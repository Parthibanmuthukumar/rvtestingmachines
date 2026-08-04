import { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoPng from '../assets/images/logo_equal_padding.png';
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const headerRef = useRef(null);
  const megaTimeoutRef = useRef(null);
  const { pathname } = useLocation();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
    setMegaOpen(false);
  }

  const handleMegaMouseEnter = () => {
    if (megaTimeoutRef.current) {
      clearTimeout(megaTimeoutRef.current);
    }
  };

  const handleMegaMouseLeave = () => {
    if (megaTimeoutRef.current) {
      clearTimeout(megaTimeoutRef.current);
    }
    megaTimeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 250);
  };

  /* Close mega menu when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };
    if (megaOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [megaOpen]);

  /* Body lock for mobile menu */
  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', menuOpen);
    document.documentElement.classList.toggle('nav-menu-open', menuOpen);
    return () => {
      document.body.classList.remove('nav-menu-open');
      document.documentElement.classList.remove('nav-menu-open');
    };
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

  const close = () => {
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
      <header ref={headerRef} className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <nav className="navbar" aria-label="Main navigation">
          {/* Logo & Brand */}
          <NavLink
            to="/"
            className="nav-logo"
            aria-label="RV Testing Machines — Home"
            onClick={e => handleClick(e, '/')}
          >
            <img src={logoPng} alt="RV Testing Machines logo" className="nav-logo-img" />
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
                  <li
                    key={item.to}
                    className="nav-item-mega-wrapper"
                    onMouseEnter={handleMegaMouseEnter}
                    onMouseLeave={handleMegaMouseLeave}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `nav-mega-trigger${isActive ? ' active' : ''}${megaOpen ? ' mega-active' : ''}`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setMegaOpen(o => !o);
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

                    {/* Products Mega Menu Dropdown */}
                    {megaOpen && (
                      <ProductsMegaMenu
                        onClose={close}
                      />
                    )}
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
            <img src={logoPng} alt="RV Testing Machines" className="nav-drawer-logo-img" />
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
                className={({ isActive }) =>
                  [item.enquiry ? 'drawer-enquiry-btn' : 'drawer-link', isActive ? 'active' : ''].filter(Boolean).join(' ')
                }
                onClick={close}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Drawer Footer with Contact Information */}
        <div className="nav-drawer-footer">
          <div className="drawer-contact-info">
            <a href="tel:+919380234567" className="drawer-contact-item">
              <span>📞</span> +91 93802 34567 / +91 98404 12345
            </a>
            <a href="mailto:info@rvtestingmachines.com" className="drawer-contact-item">
              <span>✉️</span> info@rvtestingmachines.com
            </a>
            <span className="drawer-contact-item">
              <span>📍</span> Chennai, Tamil Nadu, India
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
