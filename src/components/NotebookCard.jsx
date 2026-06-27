/**
 * NotebookCard — A single notebook paper clipping.
 * Each card has a unique decoration style assigned automatically.
 */

const DECO_CLASS = {
  fold: 'notebook-card--fold',
  tape: 'notebook-card--tape',
  clip: 'notebook-card--clip',
  quote: 'notebook-card--quote',
  pin: 'notebook-card--pin',
  sticky: 'notebook-card--sticky',
  torn: 'notebook-card--torn',
  lined: 'notebook-card--lined',
  stamp: 'notebook-card--stamp',
  coffee: 'notebook-card--coffee',
};

export function NotebookCard({ note, onClick }) {
  const decoClass = DECO_CLASS[note.decoration] || '';

  /* Format date for display */
  const displayDate = new Date(note.date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div
      className={`notebook-card ${decoClass}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Read note: ${note.title}`}
    >
      <div className="notebook-card__date">{displayDate}</div>
      <h4 className="notebook-card__title">{note.title}</h4>
      <p className="notebook-card__body">{note.excerpt}</p>
      <span className="notebook-card__read">Read →</span>
    </div>
  );
}
