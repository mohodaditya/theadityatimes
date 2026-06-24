export function Masthead({ 
  compact = false, 
  showMeta = true,
  edition = "Late Edition",
  location = "Pune, India"
}) {
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).toUpperCase();

  return (
    <div className={`masthead-bar ${compact ? 'masthead-bar--compact' : ''}`}>
      {showMeta && !compact && (
        <div className="masthead-meta">
          <span className="masthead-dateline">{location}</span>
          <span className="masthead-edition">{edition}</span>
          <span className="masthead-volume">Vol. MMXXIV</span>
        </div>
      )}
      {compact && (
        <div className="masthead-meta">
          <span className="masthead-dateline">{dateStr.split(',')[0]}, {dateStr.split(',')[1]?.trim()?.split(' ')[0]} {today.getDate()}</span>
          <div style={{ flex: 1 }} />
          <span className="masthead-volume">
            <button className="navbar__search" aria-label="Search">🔍</button>
            <button className="subscribe-btn">Subscribe</button>
          </span>
        </div>
      )}
      <div className="divider-h--dark" style={{ marginBottom: compact ? 4 : 6 }} />
      <h1 className={`masthead-title ${compact ? 'masthead-title--compact' : ''}`}>
        The Aditya Times
      </h1>
      <div className="divider-double" style={{ marginTop: compact ? 4 : 6 }} />
    </div>
  );
}
