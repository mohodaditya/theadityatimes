export function ArticleCard({ children, featured = false, noBorder = false, className = '' }) {
  let cardClass = 'article-card';
  if (featured) cardClass = 'article-card--featured';
  if (noBorder) cardClass = 'article-card--no-border';

  return (
    <div className={`${cardClass} flex-col ${className}`}>
      {children}
    </div>
  );
}
