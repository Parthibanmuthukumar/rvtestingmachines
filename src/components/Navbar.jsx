import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoPdf from '../assets/images/RVTMPL LOGO_page-0001.jpg';
import { ProductsMegaMenu } from './ProductsMegaMenu';

const navItems = [
  { to: '/',            label: 'Home',        end: true },
  { to: '/about',       label: 'About Us' },
  { to: '/products',    label: 'Products',    hasMega: true },
  { to: '/consultation',label: 'Consultation' },
  { to: '/services',    label: 'Services' },
  { to: '/contact',     label: 'Contact Us',  enquiry: true },
];

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { pathname } = useLocation();

  /* Close on route change */
  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
    document.body.classList.remove('nav-menu-open');
  }, [pathname]);

  /* Body lock for mobile menu */
  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', menuOpen);
    return () => document.body.classList.remove('nav-menu-open');
  }, [menuOpen]);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mega menu on Escape key */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMegaOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const close  = () => {
    setMenuOpen(false);
    setMegaOpen(false);
  };
  const toggle = () => setMenuOpen(o => !o);

  const handleClick = (e, to) => {
    close();
    if (pathname === to) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <nav className="navbar" aria-label="Main navigation">
          {/* Logo & Brand */}
          <NavLink
            to="/"
            className="nav-logo"
            aria-label="RV Testing Machines — Home"
            onClick={e => handleClick(e, '/')}
          >
            <img src={logoPdf} alt="RV Testing Machines logo" className="nav-logo-img" />
            <div className="nav-brand-text">
              <span className="brand-text-main">RV Testing Machines</span>
              <span className="brand-text-sub">Private Limited</span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <ul className="nav-links--desktop" role="list">
            {navItems.map(item => {
              if (item.hasMega) {
                return (
                  <li key={item.to} className="nav-item-mega-wrapper">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `nav-mega-trigger${isActive ? ' active' : ''}${megaOpen ? ' mega-active' : ''}`
                      }
                      onClick={e => {
                        if (window.innerWidth <= 900) {
                          close();
                        } else {
                          // Click only opens/toggles mega menu (no hover)
                          e.preventDefault();
                          setMegaOpen(prev => !prev);
                        }
                      }}
                    >
                      {item.label}
                      <svg
                        className={`mega-chevron${megaOpen ? ' open' : ''}`}
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </NavLink>
                  </li>
                );
              }

              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      [item.enquiry ? 'enquiry-btn' : '', isActive ? 'active' : ''].filter(Boolean).join(' ')
                    }
                    onClick={e => handleClick(e, item.to)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Products Mega Menu Dropdown */}
          {megaOpen && (
            <ProductsMegaMenu onClose={() => setMegaOpen(false)} />
          )}

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggle}
          >
            <span className="nav-toggle-bar bar-1" />
            <span className="nav-toggle-bar bar-2" />
            <span className="nav-toggle-bar bar-3" />
          </button>
        </nav>
      </header>

      {/* Overlay Backdrop */}
      <div
        className={`nav-overlay${menuOpen || megaOpen ? ' is-visible' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <aside
        id="mobile-nav"
        className={`nav-drawer${menuOpen ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <div className="nav-drawer-header">
          <NavLink to="/" className="nav-drawer-logo" onClick={e => handleClick(e, '/')}>
            <img src={logoPdf} alt="RV Testing Machines" className="nav-drawer-logo-img" />
            <div className="nav-drawer-brand">
              <span className="drawer-brand-main">RV Testing Machines</span>
              <span className="drawer-brand-sub">Private Limited</span>
            </div>
          </NavLink>
          <button type="button" className="nav-drawer-close" onClick={close} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>

        <ul className="nav-drawer-links" role="list">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => {
                  const base = item.enquiry ? 'drawer-enquiry-btn' : 'drawer-link';
                  return isActive ? `${base} active` : base;
                }}
                onClick={e => handleClick(e, item.to)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Drawer Footer Info */}
        <div className="nav-drawer-footer">
          <div className="drawer-contact-info">
            <a href="tel:+919444490691" className="drawer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 94444 90691
            </a>
            <a href="mailto:sales@rvtestingmachines.com" className="drawer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              sales@rvtestingmachines.com
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
