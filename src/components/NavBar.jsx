const NAV_ITEMS = [
  { label: 'About', page: 1 }, // EducationPage
  { label: 'Projects', page: 2 }, // DeshKaRojgarPage (first project)
  { label: 'Notebook', page: 4 }, // BlogsPage
  { label: 'Contact', page: 5 }, // ContactPage
];

export function NavBar({ currentPage, onNavigate }) {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__left">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className={`nav-link ${currentPage === item.page ? 'nav-link--active' : ''}`}
            onClick={() => onNavigate(item.page)}
            aria-current={currentPage === item.page ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="navbar__right">
        <button className="navbar__search" aria-label="Search">🔍</button>
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </nav>
  );
}
