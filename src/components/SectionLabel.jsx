export function SectionLabel({ text, variant = 'solid', className = '' }) {
  let labelClass = 'section-label';
  if (variant === 'outline') labelClass = 'section-label--outline';
  if (variant === 'text') labelClass = 'section-label--text';

  return (
    <div className={`${labelClass} ${className}`}>
      {text}
    </div>
  );
}
