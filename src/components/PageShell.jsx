import { Masthead } from './Masthead';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export function PageShell({ 
  children, 
  currentPage, 
  onNavigate, 
  compact = true, 
  showNav = true, 
  showFooter = true,
  edition,
  location
}) {
  return (
    <div className="page-content-wrapper">
      <Masthead compact={compact} edition={edition} location={location} />
      {showNav && (
        <>
          <NavBar currentPage={currentPage} onNavigate={onNavigate} />
          <div className="divider-h" />
        </>
      )}
      <div className="page-inner flex-col flex-1">
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  );
}
