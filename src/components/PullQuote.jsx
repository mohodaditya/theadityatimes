export function PullQuote({ text, attr, className = '' }) {
  return (
    <div className={`flex-col ${className}`}>
      <div className="divider-h mb-6" />
      <div className="pull-quote-text text-center">{text}</div>
      {attr && <div className="pull-quote-attr text-center">{attr}</div>}
      <div className="divider-h mt-6" />
    </div>
  );
}
