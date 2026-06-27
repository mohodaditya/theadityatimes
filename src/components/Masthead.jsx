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
      {showMeta && (
        <div className="masthead-meta">
          <span className="masthead-dateline" style={{ flex: 1, textAlign: 'left', textTransform: 'uppercase' }}>PUNE, MAHARASHTRA</span>
          <span className="masthead-edition" style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.1em' }}>INDIA</span>
          <span className="masthead-volume" style={{ flex: 1, textAlign: 'right', textTransform: 'uppercase' }}>{dateStr}</span>
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
