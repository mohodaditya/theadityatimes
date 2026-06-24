import { useReducer, useCallback, useEffect } from 'react';

const PAGE_NAMES = [
  'cover', 
  'education', 
  'tech-arena',
  'deshkarojgar', 
  'blogs', 
  'contact', 
  'backcover'
];

const PAGE_TITLES = [
  'Front Page', 
  'Education', 
  'Tech Arena',
  'DeshKaRojgar', 
  'Blogs', 
  'Contact', 
  'Back Cover'
];

const TOTAL_PAGES = PAGE_NAMES.length;

const initialState = {
  currentPage: 0,
  targetPage: null,
  isAnimating: false,
  direction: null, // 'forward' | 'backward'
};

function navigationReducer(state, action) {
  switch (action.type) {
    case 'START_TURN':
      return {
        ...state,
        targetPage: action.targetPage,
        isAnimating: true,
        direction: action.targetPage > state.currentPage ? 'forward' : 'backward',
      };
    case 'COMPLETE_TURN':
      return {
        ...state,
        currentPage: state.targetPage ?? state.currentPage,
        targetPage: null,
        isAnimating: false,
        direction: null,
      };
    case 'CANCEL_TURN':
      return {
        ...state,
        targetPage: null,
        isAnimating: false,
        direction: null,
      };
    case 'JUMP_TO_PAGE':
      return {
        ...state,
        currentPage: action.page,
        targetPage: null,
        isAnimating: false,
        direction: null,
      };
    default:
      return state;
  }
}

export function usePageNavigation() {
  const [state, dispatch] = useReducer(navigationReducer, initialState, (init) => {
    // Initialize from URL hash
    const hash = window.location.hash.replace('#', '');
    const pageIndex = PAGE_NAMES.indexOf(hash);
    if (pageIndex >= 0) {
      return { ...init, currentPage: pageIndex };
    }
    return init;
  });

  const goToPage = useCallback((pageIndex) => {
    if (pageIndex < 0 || pageIndex >= TOTAL_PAGES || pageIndex === state.currentPage || state.isAnimating) return;
    dispatch({ type: 'START_TURN', targetPage: pageIndex });
  }, [state.currentPage, state.isAnimating]);

  const nextPage = useCallback(() => {
    if (state.currentPage < TOTAL_PAGES - 1 && !state.isAnimating) {
      dispatch({ type: 'START_TURN', targetPage: state.currentPage + 1 });
    }
  }, [state.currentPage, state.isAnimating]);

  const prevPage = useCallback(() => {
    if (state.currentPage > 0 && !state.isAnimating) {
      dispatch({ type: 'START_TURN', targetPage: state.currentPage - 1 });
    }
  }, [state.currentPage, state.isAnimating]);

  const completeTurn = useCallback(() => {
    dispatch({ type: 'COMPLETE_TURN' });
  }, []);

  const cancelTurn = useCallback(() => {
    dispatch({ type: 'CANCEL_TURN' });
  }, []);

  const jumpToPage = useCallback((pageIndex) => {
    if (pageIndex >= 0 && pageIndex < TOTAL_PAGES) {
      dispatch({ type: 'JUMP_TO_PAGE', page: pageIndex });
    }
  }, []);

  // Sync URL hash
  useEffect(() => {
    const pageName = PAGE_NAMES[state.currentPage];
    window.location.hash = pageName;
    document.title = `${PAGE_TITLES[state.currentPage]} — THE ADITYA TIMES`;
  }, [state.currentPage]);

  return {
    ...state,
    totalPages: TOTAL_PAGES,
    pageNames: PAGE_NAMES,
    pageTitles: PAGE_TITLES,
    goToPage,
    nextPage,
    prevPage,
    completeTurn,
    cancelTurn,
    jumpToPage,
  };
}
