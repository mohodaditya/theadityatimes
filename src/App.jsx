import { Suspense, lazy, useEffect, useState, useRef } from 'react';
import { usePageScale } from './hooks/usePageScale';
import { usePageNavigation } from './hooks/usePageNavigation';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { usePageCurl } from './hooks/usePageCurl';
import { usePinchZoom } from './hooks/usePinchZoom';

import { PageIndicator } from './components/PageIndicator';
import { AriaAnnouncer } from './components/AriaAnnouncer';
import { LoadingScreen } from './components/LoadingScreen';

// Lazy load pages for performance
const CoverPage = lazy(() => import('./pages/CoverPage').then(m => ({ default: m.CoverPage })));
const EducationPage = lazy(() => import('./pages/EducationPage').then(m => ({ default: m.EducationPage })));
const TechArenaPage = lazy(() => import('./pages/TechArenaPage').then(m => ({ default: m.TechArenaPage })));
const DeshKaRojgarPage = lazy(() => import('./pages/DeshKaRojgarPage').then(m => ({ default: m.DeshKaRojgarPage })));
const BlogsPage = lazy(() => import('./pages/BlogsPage').then(m => ({ default: m.BlogsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const BackCoverPage = lazy(() => import('./pages/BackCoverPage').then(m => ({ default: m.BackCoverPage })));

const PAGES = [
  CoverPage,
  EducationPage,
  DeshKaRojgarPage,
  TechArenaPage,
  BlogsPage,
  ContactPage,
  BackCoverPage
];

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [zoom, setZoom] = useState(1);
  const isDraggingPan = useRef(false);

  // Scaling system
  const { scale, containerRef: viewportRef, REFERENCE_WIDTH, REFERENCE_HEIGHT } = usePageScale();

  const handleZoomIn = () => setZoom(z => Math.min(z + 0.5, 4));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.5, 1));
  const handleResetZoom = () => setZoom(1);

  const effectiveScale = scale * zoom;
  const isZoomed = zoom > 1;

  // Custom hook to support mobile pinch-to-zoom on the native scroll container
  usePinchZoom(viewportRef, zoom, setZoom);

  // Desktop Drag-to-Pan Logic
  const handlePointerDown = (e) => {
    // Only allow drag-to-pan with mouse (touch natively scrolls with momentum)
    if (isZoomed && e.pointerType === 'mouse') {
      // Don't intercept clicks on interactive elements
      if (e.target.closest('button') || e.target.closest('a')) return;

      isDraggingPan.current = true;
      if (viewportRef.current) {
        viewportRef.current.style.cursor = 'grabbing';
      }
    }
  };

  const handlePointerMove = (e) => {
    if (isDraggingPan.current && viewportRef.current && e.pointerType === 'mouse') {
      // Prevent default to stop text selection while dragging
      e.preventDefault();
      viewportRef.current.scrollBy(-e.movementX, -e.movementY);
    }
  };

  const handlePointerUpOrLeave = (e) => {
    if (e.pointerType === 'mouse') {
      isDraggingPan.current = false;
      if (viewportRef.current) {
        viewportRef.current.style.cursor = isZoomed ? 'grab' : 'auto';
      }
    }
  };

  // Update cursor based on zoom
  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.style.cursor = isZoomed ? 'grab' : 'auto';
    }
  }, [isZoomed]);

  // Navigation state
  const {
    currentPage, targetPage, isAnimating,
    totalPages, pageTitles,
    goToPage, nextPage, prevPage, jumpToPage,
    completeTurn, cancelTurn
  } = usePageNavigation();

  // Keyboard support
  useKeyboardNav({ nextPage, prevPage, jumpToPage, isAnimating });

  // Page Curl engine
  const {
    containerRef: newspaperRef,
    canvasRef,
    curlProgress,
    clipPath,
  } = usePageCurl({
    currentPage,
    targetPage,
    startManualTurn: (dir) => dir === 'forward' ? nextPage() : prevPage(),
    completeTurn,
    cancelTurn,
    scale, // Pass base scale so PageCurlEngine can detect zoom level!
    totalPages
  });

  // Wait for fonts to load before rendering
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  // Determine what to render based on animation state
  const isTurning = isAnimating && targetPage !== null;
  const CurrentPageComponent = PAGES[currentPage];
  const TargetPageComponent = isTurning ? PAGES[targetPage] : null;

  // The actual render tree
  return (
    <>
      {!fontsLoaded && <LoadingScreen />}
      <div
        className="newspaper-viewport"
        ref={viewportRef}
        style={{
          display: fontsLoaded ? 'flex' : 'none',
          overflow: isZoomed ? 'auto' : 'hidden', // Hide intentional margin bleed when unzoomed
          touchAction: 'pan-x pan-y', // Ensure browser sends raw multi-touch events
        }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUpOrLeave}
      onPointerLeave={handlePointerUpOrLeave}
    >
      <AriaAnnouncer currentPageTitle={pageTitles[currentPage]} />

      {/* Navigation Arrows */}
      <button
        className={`nav-arrow nav-arrow--left ${currentPage === 0 ? 'nav-arrow--hidden' : ''}`}
        onClick={prevPage}
        disabled={isAnimating || currentPage === 0}
        aria-label="Previous Page"
      >
        <span className="nav-arrow__icon">‹</span>
      </button>

      <button
        className={`nav-arrow nav-arrow--right ${currentPage === totalPages - 1 ? 'nav-arrow--hidden' : ''}`}
        onClick={nextPage}
        disabled={isAnimating || currentPage === totalPages - 1}
        aria-label="Next Page"
      >
        <span className="nav-arrow__icon">›</span>
      </button>

      {/* Zoom Controls */}
      <div className="zoom-controls" style={{ position: 'fixed', zIndex: 200 }}>
        <button className="zoom-btn" onClick={handleZoomIn} aria-label="Zoom In">+</button>
        <button className="zoom-btn" onClick={handleZoomOut} aria-label="Zoom Out">−</button>
        <button className="zoom-btn zoom-btn--reset" onClick={handleResetZoom} aria-label="Reset Zoom">↺</button>
      </div>

      <div
        className="newspaper-centering-wrapper"
        style={{
          width: `${REFERENCE_WIDTH * effectiveScale}px`,
          height: `${REFERENCE_HEIGHT * effectiveScale}px`,
        }}
      >
        <div
          ref={newspaperRef}
          className="newspaper-page"
          style={{
            transform: `scale(${effectiveScale})`,
            transformOrigin: 'top left',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          {/* Next/Target Page (Bottom Layer) */}
          {isTurning && (
            <div className="newspaper-page" style={{ zIndex: 1, boxShadow: 'none' }} aria-hidden="true" inert="true">
              <Suspense fallback={<div className="page-content-wrapper p-4">Loading...</div>}>
                <TargetPageComponent currentPage={targetPage} onNavigate={goToPage} />
              </Suspense>
            </div>
          )}

          {/* Current Page (Top Layer, clipped during turn) */}
          <div
            className="newspaper-page"
            style={{
              zIndex: 2,
              clipPath: clipPath,
              boxShadow: isTurning ? 'none' : undefined,
              pointerEvents: isTurning ? 'none' : 'auto'
            }}
            aria-hidden={isTurning ? "true" : "false"}
            inert={isTurning ? "true" : undefined}
          >
            <Suspense fallback={<div className="page-content-wrapper p-4">Loading...</div>}>
              <CurrentPageComponent currentPage={currentPage} onNavigate={goToPage} />
              {currentPage === 0 && !isTurning && curlProgress === 0 && (
                <div className="swipe-hint">
                  <span className="swipe-hint__arrow">←</span> Swipe or drag edge to turn
                </div>
              )}
            </Suspense>
          </div>

          {/* Canvas for fold shadow and page edge highlight */}
          <canvas ref={canvasRef} className="curl-canvas" />
        </div>
      </div>

      <PageIndicator
        totalPages={totalPages}
        currentPage={currentPage}
        onDotClick={jumpToPage}
      />
    </div>
    </>
  );
}
