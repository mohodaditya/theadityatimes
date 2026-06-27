import { NotebookCard } from './NotebookCard';

/**
 * NotebookGrid — Masonry-like 4-column layout.
 * Distributes cards round-robin across columns so heights
 * vary naturally, creating an organic editorial board feel.
 */
export function NotebookGrid({ notes, onCardClick }) {
  /* Distribute notes across 4 columns */
  const columns = [[], [], [], []];
  notes.forEach((note, i) => {
    columns[i % 4].push({ note, index: i });
  });

  return (
    <div className="notebook-grid">
      {columns.map((col, colIdx) => (
        <div key={colIdx} className="flex-col" style={{ gap: '10px' }}>
          {col.map(({ note, index }) => (
            <NotebookCard
              key={note.slug}
              note={note}
              onClick={() => onCardClick(index)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
