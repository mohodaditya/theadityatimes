import { useEffect, useState } from 'react';
import { Masthead } from './Masthead';

export function LoadingScreen() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="newspaper-viewport">
      <div className="newspaper-page flex-col" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Masthead compact={false} showMeta={false} />
        <div className="mt-10" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '18px', color: 'var(--ink)' }}>
          Preparing the presses{dots}
        </div>
      </div>
    </div>
  );
}
