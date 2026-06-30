import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoPdf from '../assets/images/RVTMPL LOGO_page-0001.jpg';

/* Inline X icon — no external dependency needed */
const IconX = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navItems = [
  { to: '/', label: 'HOME', end: true },
  { to: '/about', label: 'ABOUT US' },
  { to: '/products', label: 'OUR PRODUCTS' },
  { to: '/consultation', label: 'CONSULTATION' },
  { to: '/services', label: 'SERVICES' },
  { to: '/contact', label: 'CONTACT US', enquiry: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    document.body.classList.remove('nav-menu-open');
  }, [pathname]);

  // Body class for scroll lock when menu is open
  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', menuOpen);
    return () => document.body.classList.remove('nav-menu-open');
  }, [menuOpen]);

  // Toggle scrolled class when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  const handleNavClick = (e, to) => {
    closeMenu();
    if (pathname === to) {
      e.preventDefault(); // Prevent route reload/update if already active
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <nav className="navbar" aria-label="Main navigation">
          <NavLink
            to="/"
            className="nav-logo"
            aria-label="RV Private Limited — Home"
            onClick={(e) => handleNavClick(e, '/')}
          >
            <img src={logoPdf} alt="" className="nav-logo-img" />
            <span className="nav-brand-text">RV Private Limited</span>
          </NavLink>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav-links"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMenu}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className={`nav-toggle-bar${menuOpen ? ' open' : ''}`} />
            <span className={`nav-toggle-bar${menuOpen ? ' open' : ''}`} />
            <span className={`nav-toggle-bar${menuOpen ? ' open' : ''}`} />
          </button>

          {/* Desktop nav links (hidden on mobile) */}
          <ul className="nav-links nav-links--desktop">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => {
                    const base = item.enquiry ? 'enquiry-btn' : '';
                    return isActive ? `${base} active`.trim() : base;
                  }}
                  onClick={(e) => handleNavClick(e, item.to)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`nav-overlay${menuOpen ? ' is-visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <aside
        id="main-nav-links"
        className={`nav-drawer${menuOpen ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="nav-drawer-header">
          <NavLink
            to="/"
            className="nav-drawer-logo"
            onClick={(e) => handleNavClick(e, '/')}
          >
            <img src={logoPdf} alt="RV Private Limited" className="nav-drawer-logo-img" />
          </NavLink>
          <button
            type="button"
            className="nav-drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <IconX />
          </button>
        </div>

        {/* Divider */}
        <div className="nav-drawer-divider" />

        {/* Nav Items */}
        <ul className="nav-drawer-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => {
                  const base = item.enquiry ? 'drawer-enquiry-btn' : 'drawer-link';
                  return isActive ? `${base} active` : base;
                }}
                onClick={(e) => handleNavClick(e, item.to)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
