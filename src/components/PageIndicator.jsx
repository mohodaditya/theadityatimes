export function PageIndicator({ totalPages, currentPage, onDotClick }) {
  return (
    <div className="page-indicator" role="group" aria-label="Page navigation">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={`page-indicator__dot ${i === currentPage ? 'page-indicator__dot--active' : ''}`}
          onClick={() => onDotClick(i)}
          aria-label={`Go to page ${i + 1}`}
          aria-current={i === currentPage ? 'page' : undefined}
        />
      ))}
      <span className="page-indicator__label">
        PAGE {currentPage + 1} OF {totalPages}
      </span>
    </div>
  );
}
