import { useEffect, useRef, useMemo } from 'react';
import { marked } from 'marked';

/**
 * Configure marked for safe, clean output.
 */
marked.setOptions({
  breaks: true,
  gfm: true,
});

/**
 * NotebookModal — Premium reading popup.
 *
 * Features:
 *  - Renders full Markdown content (paragraphs, code, lists, quotes, images)
 *  - Keyboard navigation: ESC to close, ← / → for prev/next
 *  - Smooth open/close transitions (scale + fade + translate)
 *  - Shows prev/next note titles for context
 *  - Internal scroll for long content; page never scrolls
 */
export function NotebookModal({ notes, activeIndex, onClose, onNav }) {
  const overlayRef = useRef(null);
  const popupRef = useRef(null);
  const isOpen = activeIndex !== null;
  const note = isOpen ? notes[activeIndex] : null;

  /* Keyboard support */
  useEffect(() => {
    if (!isOpen) return;

    function handleKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && activeIndex > 0) onNav(activeIndex - 1);
      if (e.key === 'ArrowRight' && activeIndex < notes.length - 1) onNav(activeIndex + 1);
    }

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, activeIndex, notes.length, onClose, onNav]);

  /* Scroll popup back to top when navigating between notes */
  useEffect(() => {
    if (isOpen && popupRef.current) {
      popupRef.current.scrollTop = 0;
    }
  }, [activeIndex, isOpen]);

  /* Render Markdown to HTML */
  const renderedContent = useMemo(() => {
    if (!note) return '';
    return marked.parse(note.content);
  }, [note]);

  /* Format dates */
  const displayDate = note
    ? new Date(note.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  const noteNum = note ? String(activeIndex + 1).padStart(2, '0') : '';

  /* Prev / next note titles */
  const prevNote = activeIndex > 0 ? notes[activeIndex - 1] : null;
  const nextNote = activeIndex < notes.length - 1 ? notes[activeIndex + 1] : null;

  return (
    <div
      ref={overlayRef}
      className={`notebook-overlay ${isOpen ? 'notebook-overlay--open' : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-modal="true"
      role="dialog"
      aria-label={note ? note.title : 'Notebook entry'}
    >
      <div className="notebook-popup" ref={popupRef}>
        <button className="notebook-popup__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="notebook-popup__number">NOTEBOOK ENTRY #{noteNum}</div>
        <div className="notebook-popup__date">{displayDate}</div>
        <h2 className="notebook-popup__title">{note?.title}</h2>

        <div
          className="notebook-popup__body"
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />

        <div className="notebook-popup__nav">
          <button
            className="notebook-popup__nav-btn"
            disabled={!prevNote}
            onClick={() => prevNote && onNav(activeIndex - 1)}
          >
            ← {prevNote ? prevNote.title : 'Previous Note'}
          </button>
          <button
            className="notebook-popup__nav-btn"
            disabled={!nextNote}
            onClick={() => nextNote && onNav(activeIndex + 1)}
          >
            {nextNote ? nextNote.title : 'Next Note'} →
          </button>
        </div>
      </div>
    </div>
  );
}
