import { useCallback, useEffect, useRef, useState } from 'react';

const REFERENCE_WIDTH = 850;
const REFERENCE_HEIGHT = 1100;

// The inner content area dimensions of the newspaper page
// (obtained by subtracting the page padding: 850 - 35*2 and 1100 - 20*2)
const CONTENT_WIDTH = 780;
const CONTENT_HEIGHT = 1060;

export function usePageScale() {
  const calculateScale = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const isPortrait = vh > vw;
    let calculatedScale;

    if (isPortrait) {
      let refWidth = REFERENCE_WIDTH;
      if (vw < 768) {
        const t = Math.max(0, Math.min(1, (768 - vw) / (768 - 320)));
        refWidth = REFERENCE_WIDTH - t * (REFERENCE_WIDTH - CONTENT_WIDTH);
      }
      calculatedScale = vw / refWidth;

      // Reserve 80px space for bottom navigation arrows on mobile portrait to prevent overlap
      let maxAvailableHeight = vh;
      if (vw < 768) {
        maxAvailableHeight = vh - 80;
      }

      if (calculatedScale * REFERENCE_HEIGHT > maxAvailableHeight) {
        calculatedScale = maxAvailableHeight / REFERENCE_HEIGHT;
      }
    } else {
      let refHeight = REFERENCE_HEIGHT;
      if (vh < 600) {
        const t = Math.max(0, Math.min(1, (600 - vh) / (600 - 320)));
        refHeight = REFERENCE_HEIGHT - t * (REFERENCE_HEIGHT - CONTENT_HEIGHT);
      }
      calculatedScale = vh / refHeight;

      if (calculatedScale * REFERENCE_WIDTH > vw) {
        calculatedScale = vw / REFERENCE_WIDTH;
      }
    }

    return calculatedScale;
  }, []);

  const [scale, setScale] = useState(() => calculateScale());
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setScale(calculateScale());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [calculateScale]);

  return { scale, containerRef, REFERENCE_WIDTH, REFERENCE_HEIGHT };
}

