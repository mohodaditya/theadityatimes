import { useEffect, useRef } from 'react';

export function usePinchZoom(containerRef, zoom, setZoom) {
  const zoomRef = useRef(zoom);

  // Keep the ref updated with the latest zoom without triggering the effect below
  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  useEffect(() => {
    const container = containerRef.current; 
    if (!container) return;

    let initialDistance = null;
    let initialZoom = 1;

    const getDistance = (touches) => {
      return Math.hypot(
        touches[0].clientX - touches[1].clientX,
        touches[0].clientY - touches[1].clientY
      );
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        initialDistance = getDistance(e.touches);
        initialZoom = zoomRef.current;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 2 && initialDistance !== null) {
        // Prevent native browser zooming/scrolling while pinching
        if (e.cancelable) {
          e.preventDefault();
        }
        const currentDistance = getDistance(e.touches);
        const scaleChange = currentDistance / initialDistance;
        const newZoom = Math.min(Math.max(initialZoom * scaleChange, 1), 4);
        setZoom(newZoom);
      }
    };

    const handleTouchEnd = (e) => {
      if (e.touches.length < 2) {
        initialDistance = null;
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [containerRef, setZoom]); // Omit zoom from dependency array to avoid unmounting during pinch
}
