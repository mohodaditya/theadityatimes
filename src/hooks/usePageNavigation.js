import { useReducer, useCallback, useEffect } from 'react';

const PAGE_NAMES = [
  'cover', 
  'education',
  'deshkarojgar',
  'tech-arena',
  'blogs', 
  'contact'
];

const PAGE_TITLES = [
  'Front Page', 
  'Education',
  'DeshKaRojgar', 
  'Tech Arena', 
  'Notebook', 
  'Contact'
];

const TOTAL_PAGES = PAGE_NAMES.length;

const ROUTE_TO_PAGE = {
  '/': 0,
  '/about': 1,
  '/projects/deshkarojgar': 2,
  '/projects/tech-arena': 3,
  '/notebook': 4,
  '/contact': 5
};

const PAGE_TO_ROUTE = [
  '/',
  '/about',
  '/projects/deshkarojgar',
  '/projects/tech-arena',
  '/notebook',
  '/contact'
];

function getPageFromPath(path) {
  // Strip trailing slash except for root path
  const cleanPath = path === '/' ? '/' : path.replace(/\/$/, '');
  
  if (cleanPath.startsWith('/notebook/')) {
    const slug = cleanPath.slice('/notebook/'.length);
    return { page: 4, noteSlug: slug || null };
  }
  
  const page = ROUTE_TO_PAGE[cleanPath];
  return { page: page !== undefined ? page : 0, noteSlug: null };
}

const initialState = {
  currentPage: 0,
  targetPage: null,
  isAnimating: false,
  direction: null, // 'forward' | 'backward'
  activeNoteSlug: null,
};

function navigationReducer(state, action) {
  switch (action.type) {
    case 'START_TURN':
      return {
        ...state,
        targetPage: action.targetPage,
        isAnimating: true,
        direction: action.targetPage > state.currentPage ? 'forward' : 'backward',
        activeNoteSlug: action.targetPage === 4 ? state.activeNoteSlug : null,
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
        activeNoteSlug: action.page === 4 ? state.activeNoteSlug : null,
      };
    case 'SET_NOTE_SLUG':
      return {
        ...state,
        activeNoteSlug: action.slug,
      };
    case 'POP_STATE':
      return {
        ...state,
        currentPage: action.page,
        activeNoteSlug: action.noteSlug,
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
    const { page, noteSlug } = getPageFromPath(window.location.pathname);
    return {
      ...init,
      currentPage: page,
      activeNoteSlug: noteSlug
    };
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

  const setNoteSlug = useCallback((slug) => {
    dispatch({ type: 'SET_NOTE_SLUG', slug });
  }, []);

  // Listen to popstate event (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const { page, noteSlug } = getPageFromPath(window.location.pathname);
      dispatch({ type: 'POP_STATE', page, noteSlug });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync URL pathname
  useEffect(() => {
    const currentRoute = PAGE_TO_ROUTE[state.currentPage];
    let targetPath = currentRoute;
    
    if (state.currentPage === 4 && state.activeNoteSlug) {
      targetPath = `/notebook/${state.activeNoteSlug}`;
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    
    document.title = `${PAGE_TITLES[state.currentPage]} — THE ADITYA TIMES`;
  }, [state.currentPage, state.activeNoteSlug]);

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
    setNoteSlug
  };
}
