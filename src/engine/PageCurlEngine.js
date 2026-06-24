/**
 * PageCurlEngine — Clip-path + Canvas hybrid page-curl effect
 * 
 * Architecture:
 * - Current page gets clip-path: polygon(...) that progressively shrinks
 * - Canvas overlay draws fold shadow, page edge highlight, and curl flap
 * - Next page is underneath, revealed as current page clips
 * - All coordinates operate in the 850×1100 reference space
 */

const TURN_THRESHOLD = 0.25; // 25% drag to commit turn
const SPRING_STIFFNESS = 0.05;
const SPRING_DAMPING = 0.82;
const DRAG_ZONE_PERCENT = 0.15; // 15% from edges

export class PageCurlEngine {
  constructor({ onTurnComplete, onTurnCancel, onProgressUpdate, onTurnStart }) {
    this.onTurnComplete = onTurnComplete;
    this.onTurnCancel = onTurnCancel;
    this.onProgressUpdate = onProgressUpdate;
    this.onTurnStart = onTurnStart;

    this.isDragging = false;
    this.isAnimating = false;
    this.progress = 0; // 0 = no curl, 1 = fully turned
    this.direction = 'forward'; // 'forward' | 'backward'
    this.startX = 0;
    this.currentX = 0;
    this.velocity = 0;
    this.lastX = 0;
    this.lastTime = 0;

    this.pageWidth = 850;
    this.pageHeight = 1100;
    this.scale = 1;

    this.canvas = null;
    this.ctx = null;
    this.containerEl = null;
    this.animationFrame = null;

    // Bind methods
    this._onPointerDown = this._onPointerDown.bind(this);
    this._onPointerMove = this._onPointerMove.bind(this);
    this._onPointerUp = this._onPointerUp.bind(this);
    this._animate = this._animate.bind(this);
  }

  attach(containerEl, canvas, scale) {
    this.containerEl = containerEl;
    this.canvas = canvas;
    this.scale = scale;

    if (canvas) {
      this.ctx = canvas.getContext('2d');
      canvas.width = this.pageWidth;
      canvas.height = this.pageHeight;
    }

    containerEl.addEventListener('pointerdown', this._onPointerDown, { passive: false });
    window.addEventListener('pointermove', this._onPointerMove, { passive: false });
    window.addEventListener('pointerup', this._onPointerUp, { passive: false });
  }

  detach() {
    if (this.containerEl) {
      this.containerEl.removeEventListener('pointerdown', this._onPointerDown);
    }
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  updateScale(scale) {
    this.scale = scale;
  }

  // Animate a programmatic turn (keyboard/click)
  animateTurn(direction) {
    if (this.isAnimating || this.isDragging) return;
    this.direction = direction;
    this.isAnimating = true;
    this.progress = 0;
    this._targetProgress = 1;
    this._springVelocity = 0;
    this._animate();
  }

  _onPointerDown(e) {
    if (this.isAnimating) return;

    const rect = this.containerEl.getBoundingClientRect();

    // Disable page curl if the user is zoomed in (using react-zoom-pan-pinch or similar)
    // We compare the actual bounding rect width to the expected unzoomed width.
    const effectiveScale = rect.width / this.pageWidth;
    if (Math.abs(effectiveScale - this.scale) > 0.01) {
      return; // User is zoomed in, allow panning instead of page curling
    }

    const localX = (e.clientX - rect.left) / this.scale;

    const rightEdge = this.pageWidth * (1 - DRAG_ZONE_PERCENT);
    const leftEdge = this.pageWidth * DRAG_ZONE_PERCENT;

    if (localX > rightEdge) {
      this.direction = 'forward';
    } else if (localX < leftEdge) {
      this.direction = 'backward';
    } else {
      return; // Not in drag zone
    }

    this.isDragging = true;
    this.startX = e.clientX;
    this.currentX = e.clientX;
    this.lastX = e.clientX;
    this.lastTime = Date.now();
    this.velocity = 0;
    this.progress = 0;

    document.body.classList.add('is-turning');
    this.onTurnStart?.(this.direction);
    this.onProgressUpdate?.(0, this.direction);
  }

  _onPointerMove(e) {
    if (!this.isDragging) return;
    e.preventDefault();

    const now = Date.now();
    const dt = now - this.lastTime;
    if (dt > 0) {
      const instantVelocity = (e.clientX - this.lastX) / dt;
      // Low-pass filter for velocity to smooth out erratic mouse/touch updates
      this.velocity = this.velocity * 0.7 + (instantVelocity * 0.3);
    }
    this.lastX = e.clientX;
    this.lastTime = now;

    this.currentX = e.clientX;
    const dragDistance = this.startX - this.currentX;
    const scaledPageWidth = this.pageWidth * this.scale;

    if (this.direction === 'forward') {
      this.progress = Math.max(0, Math.min(1, dragDistance / scaledPageWidth));
    } else {
      this.progress = Math.max(0, Math.min(1, -dragDistance / scaledPageWidth));
    }

    this._drawCurl();
    this.onProgressUpdate?.(this.progress, this.direction);
  }

  _onPointerUp(e) {
    if (!this.isDragging) return;
    this.isDragging = false;
    document.body.classList.remove('is-turning');

    // Determine completion intent based on threshold and filtered velocity
    const velocityThreshold = 0.3;
    const shouldComplete =
      this.progress > TURN_THRESHOLD ||
      (this.direction === 'forward' && this.velocity < -velocityThreshold) ||
      (this.direction === 'backward' && this.velocity > velocityThreshold);

    this.isAnimating = true;
    this._targetProgress = shouldComplete ? 1 : 0;

    // Transfer momentum into the spring physics
    let baseSpringVel = (this.velocity * 16.6) / (this.pageWidth * this.scale);
    if (this.direction === 'forward') {
      // For forward, negative velocity (leftward) means increasing progress
      baseSpringVel = -baseSpringVel;
    }
    this._springVelocity = Math.max(-0.08, Math.min(0.08, baseSpringVel));

    this._animate();
  }

  _animate() {
    const diff = this._targetProgress - this.progress;

    if (Math.abs(diff) < 0.005 && Math.abs(this._springVelocity) < 0.005) {
      // Animation complete
      this.progress = this._targetProgress;
      this.isAnimating = false;

      if (this._targetProgress >= 1) {
        this._clearCurl();
        this.onTurnComplete?.(this.direction);
      } else {
        this._clearCurl();
        this.onTurnCancel?.();
      }
      this.progress = 0;
      return;
    }

    // Spring physics
    this._springVelocity += diff * SPRING_STIFFNESS;
    this._springVelocity *= SPRING_DAMPING;
    this.progress += this._springVelocity;
    this.progress = Math.max(0, Math.min(1, this.progress));

    this._drawCurl();
    this.onProgressUpdate?.(this.progress, this.direction);
    this.animationFrame = requestAnimationFrame(this._animate);
  }

  _drawCurl() {
    if (!this.ctx || !this.canvas) return;

    const ctx = this.ctx;
    const w = this.pageWidth;
    const h = this.pageHeight;
    const p = this.progress;

    ctx.clearRect(0, 0, w, h);

    if (p <= 0) return;

    const isForward = this.direction === 'forward';
    // The fold line position
    const foldX = isForward ? w * (1 - p) : w * p;

    // Dimensions
    const ambientShadowWidth = Math.min(120, p * w * 0.25);
    const contactShadowWidth = Math.min(25, p * w * 0.05);
    const flapWidth = Math.min(60, p * w * 0.15);

    if (ambientShadowWidth > 1) {
      // Ambient shadow (wide, soft)
      const ambShadowGrad = ctx.createLinearGradient(foldX, 0, isForward ? foldX + ambientShadowWidth : foldX - ambientShadowWidth, 0);
      ambShadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0.12)');
      ambShadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = ambShadowGrad;
      if (isForward) {
        ctx.fillRect(foldX, 0, ambientShadowWidth, h);
      } else {
        ctx.fillRect(foldX - ambientShadowWidth, 0, ambientShadowWidth, h);
      }

      // Contact shadow (narrow, sharp)
      const contactShadowGrad = ctx.createLinearGradient(foldX, 0, isForward ? foldX + contactShadowWidth : foldX - contactShadowWidth, 0);
      contactShadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0.30)');
      contactShadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = contactShadowGrad;
      if (isForward) {
        ctx.fillRect(foldX, 0, contactShadowWidth, h);
      } else {
        ctx.fillRect(foldX - contactShadowWidth, 0, contactShadowWidth, h);
      }
    }

    if (flapWidth > 1) {
      // Flap body (curling paper back)
      const flapGrad = ctx.createLinearGradient(
        isForward ? foldX - flapWidth : foldX + flapWidth,
        0,
        foldX,
        0
      );
      // Non-linear color profile to simulate cylinder geometry
      flapGrad.addColorStop(0, 'rgba(234, 228, 221, 0)'); // Fades out at the far end of the curl
      flapGrad.addColorStop(0.4, 'rgba(234, 228, 221, 0.9)');
      flapGrad.addColorStop(0.7, 'rgba(255, 255, 255, 0.45)'); // White highlight crest
      flapGrad.addColorStop(1, 'rgba(200, 194, 187, 0.95)'); // Deep warm shadow near fold
      ctx.fillStyle = flapGrad;

      if (isForward) {
        ctx.fillRect(foldX - flapWidth, 0, flapWidth, h);
      } else {
        ctx.fillRect(foldX, 0, flapWidth, h);
      }

      // Inner shadow on flap
      const innerShadowWidth = 12;
      const innerShadow = ctx.createLinearGradient(
        isForward ? foldX - flapWidth : foldX + flapWidth,
        0,
        isForward ? foldX - flapWidth + innerShadowWidth : foldX + flapWidth - innerShadowWidth,
        0
      );
      innerShadow.addColorStop(0, 'rgba(0, 0, 0, 0)');
      innerShadow.addColorStop(1, 'rgba(0, 0, 0, 0.08)');
      ctx.fillStyle = innerShadow;
      if (isForward) {
        ctx.fillRect(foldX - flapWidth, 0, innerShadowWidth, h);
      } else {
        ctx.fillRect(foldX + flapWidth - innerShadowWidth, 0, innerShadowWidth, h);
      }

      // Page edge reflection (1px highlight + 1px subtle dark outline)
      ctx.beginPath();
      ctx.moveTo(foldX, 0);
      ctx.lineTo(foldX, h);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(isForward ? foldX + 1 : foldX - 1, 0);
      ctx.lineTo(isForward ? foldX + 1 : foldX - 1, h);
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  _clearCurl() {
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.pageWidth, this.pageHeight);
    }
  }

  // Get clip-path polygon for the current page
  getClipPath() {
    if (this.progress <= 0) return 'none';

    const p = this.progress;
    if (this.direction === 'forward') {
      // Shrink from right
      const rightEdge = 100 * (1 - p);
      return `polygon(0% 0%, ${rightEdge}% 0%, ${rightEdge}% 100%, 0% 100%)`;
    } else {
      // Shrink from left
      const leftEdge = 100 * p;
      return `polygon(${leftEdge}% 0%, 100% 0%, 100% 100%, ${leftEdge}% 100%)`;
    }
  }
}
