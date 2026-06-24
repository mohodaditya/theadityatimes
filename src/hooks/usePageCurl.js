import { useEffect, useRef, useCallback, useState } from 'react';
import { PageCurlEngine } from '../engine/PageCurlEngine';

export function usePageCurl({ 
  currentPage, 
  targetPage, 
  startManualTurn,
  completeTurn, 
  cancelTurn, 
  scale, 
  totalPages 
}) {
  const engineRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [curlProgress, setCurlProgress] = useState(0);
  const [curlDirection, setCurlDirection] = useState(null);
  const [clipPath, setClipPath] = useState('none');

  const callbacksRef = useRef({ startManualTurn, completeTurn, cancelTurn });

  useEffect(() => {
    callbacksRef.current = { startManualTurn, completeTurn, cancelTurn };
  });

  // Initialize engine once
  useEffect(() => {
    const engine = new PageCurlEngine({
      onTurnComplete: (direction) => {
        setCurlProgress(0);
        setCurlDirection(null);
        setClipPath('none');
        callbacksRef.current.completeTurn();
      },
      onTurnCancel: () => {
        setCurlProgress(0);
        setCurlDirection(null);
        setClipPath('none');
        callbacksRef.current.cancelTurn();
      },
      onProgressUpdate: (progress, direction) => {
        setCurlProgress(progress);
        setCurlDirection(direction);
      },
      onTurnStart: (direction) => {
        if (callbacksRef.current.startManualTurn) {
          callbacksRef.current.startManualTurn(direction);
        }
      },
    });
    engineRef.current = engine;

    if (containerRef.current && canvasRef.current) {
      engine.attach(containerRef.current, canvasRef.current, scale);
    }

    return () => {
      engine.detach();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once

  // Attach/detach on container mount
  useEffect(() => {
    const engine = engineRef.current;
    if (engine && containerRef.current && canvasRef.current) {
      engine.attach(containerRef.current, canvasRef.current, scale);
    }
    return () => {
      if (engine) engine.detach();
    };
  }, [scale]);

  // Update scale
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.updateScale(scale);
    }
  }, [scale]);

  // Update clip path during animation
  useEffect(() => {
    if (engineRef.current && curlProgress > 0) {
      setClipPath(engineRef.current.getClipPath());
    } else {
      setClipPath('none');
    }
  }, [curlProgress]);

  // Handle Programmatic Turns
  // If targetPage changes from outside (via Navigation Arrows or Keyboard),
  // tell the engine to animate it (if not already animating/dragging).
  useEffect(() => {
    const engine = engineRef.current;
    if (engine && targetPage !== null && targetPage !== currentPage) {
      if (!engine.isDragging && !engine.isAnimating) {
        const dir = targetPage > currentPage ? 'forward' : 'backward';
        engine.animateTurn(dir);
      }
    }
  }, [targetPage, currentPage]);

  return {
    containerRef,
    canvasRef,
    curlProgress,
    curlDirection,
    clipPath,
  };
}
