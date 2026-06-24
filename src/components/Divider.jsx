export function Divider({ type = 'horizontal', className = '', ...props }) {
  let dividerClass = '';
  switch (type) {
    case 'horizontal':
      dividerClass = 'divider-h';
      break;
    case 'horizontal-thick':
      dividerClass = 'divider-h--thick';
      break;
    case 'double':
      dividerClass = 'divider-double';
      break;
    case 'vertical':
      dividerClass = 'divider-v';
      break;
    default:
      dividerClass = 'divider-h';
  }

  return <div className={`${dividerClass} ${className}`} aria-hidden="true" {...props} />;
}
