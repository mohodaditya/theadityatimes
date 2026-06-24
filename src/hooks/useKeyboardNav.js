import { useEffect } from 'react';

export function useKeyboardNav({ nextPage, prevPage, jumpToPage, isAnimating }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (isAnimating) return;

      // Don't capture if user is typing in a form
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          nextPage();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          prevPage();
          break;
        case 'Home':
          e.preventDefault();
          jumpToPage(0);
          break;
        case 'End':
          e.preventDefault();
          jumpToPage(9);
          break;
        case '1': jumpToPage(0); break;
        case '2': jumpToPage(1); break;
        case '3': jumpToPage(2); break;
        case '4': jumpToPage(3); break;
        case '5': jumpToPage(4); break;
        case '6': jumpToPage(5); break;
        case '7': jumpToPage(6); break;
        case '8': jumpToPage(7); break;
        case '9': jumpToPage(8); break;
        case '0': jumpToPage(9); break;
        default: break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage, jumpToPage, isAnimating]);
}
