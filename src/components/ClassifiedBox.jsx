export function ClassifiedBox({ children, className = '' }) {
  return (
    <div className={`classified-box flex-col ${className}`}>
      {children}
    </div>
  );
}
