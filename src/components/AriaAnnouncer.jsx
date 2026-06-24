import { useEffect, useState } from 'react';

export function AriaAnnouncer({ currentPageTitle }) {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    // Add a slight delay so screen readers pick it up after the DOM updates
    const timer = setTimeout(() => {
      setAnnouncement(`Navigated to: ${currentPageTitle}`);
    }, 100);
    return () => clearTimeout(timer);
  }, [currentPageTitle]);

  return (
    <div className="sr-only" aria-live="polite" aria-atomic="true">
      {announcement}
    </div>
  );
}
