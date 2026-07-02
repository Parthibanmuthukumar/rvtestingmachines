import { Link } from 'react-router-dom';
import logoPdf from '../assets/images/RVTMPL LOGO_page-0001.jpg';
import nablLogo from '../assets/images/nabl-logo.png';
import { CONTACT } from '../seo/siteConfig';

const Footer = () => (
  <footer className="site-footer">

    <div className="footer-top">

      {/* Col 1: Brand */}
      <div className="footer-col footer-col-brand">
        <div className="footer-brand-header">
          <img src={logoPdf} alt="RV Testing Machines Private Limited" className="footer-logo" />
          <div className="footer-brand-text">
            <span className="footer-brand-name">
              <span className="brand-text-main">RV Testing Machines</span>{' '}
              <span className="brand-text-sub">Private Limited</span>
            </span>
            <span className="footer-brand-sub">ISO/IEC 17025 Accredited Lab</span>
          </div>
        </div>
        <p className="footer-tagline">
          Trusted partner for material testing, calibration &amp; inspection solutions
          across India for over 20 years.
        </p>
        <div className="footer-nabl-wrap">
          <img src={nablLogo} alt="NABL Accredited – CC-2858" className="footer-nabl" />
          <p className="footer-nabl-text">NABL Accredited Calibration Lab<br/>Certificate No: CC – 2858</p>
        </div>

        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308C2.497 19.466 2.226 18.2 2.163 16.833 2.105 15.567 2.093 15.187 2.093 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.446 2.497 5.712 2.226 7.079 2.163 8.345 2.105 8.725 2.093 12 2.093zm0-2.163c-3.259 0-3.667.014-4.947.072C5.553.163 4.1.502 2.968 1.635.502 4.1.163 5.553.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.091 1.5.43 2.953 1.563 4.086 1.132 1.132 2.585 1.472 4.085 1.563C6.999 22.986 7.407 23 12 23s4.947-.014 6.227-.072c1.5-.091 2.953-.43 4.086-1.563 1.132-1.132 1.472-2.585 1.563-4.086.058-1.28.072-1.688.072-4.948 0-3.259-.014-3.667-.072-4.947-.091-1.5-.43-2.953-1.563-4.086C21.953.502 20.5.163 19 .072 17.947.014 17.539 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter / X" className="social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

      {/* Col 2: About Us */}
      <div className="footer-col">
        <h4 className="footer-col-title">About Us</h4>
        <ul className="footer-col-list">
          <li><Link to="/about">Company Overview</Link></li>
          <li><Link to="/about">Our Vision &amp; Mission</Link></li>
          <li><Link to="/about">20+ Years of Expertise</Link></li>
          <li><Link to="/about">ISO/IEC 17025 Accreditation</Link></li>
          <li><Link to="/about">Global Technology Partners</Link></li>
        </ul>
      </div>

      {/* Col 3: Quick Links */}
      <div className="footer-col">
        <h4 className="footer-col-title">Quick Links</h4>
        <ul className="footer-col-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Our Products</Link></li>
          <li><Link to="/services">Calibration Services</Link></li>
          <li><Link to="/contact">Technical Support</Link></li>
        </ul>
      </div>

      {/* Col 4: Contact */}
      <div className="footer-col">
        <h4 className="footer-col-title">Contact Us</h4>
        <ul className="footer-col-list footer-contact-list">
          <li>
            <span className="footer-icon">📍</span>
            <a href="https://www.google.com/maps/search/?api=1&query=RV+Testing+Machines+Private+Limited+Ramapuram+Chennai" target="_blank" rel="noopener noreferrer">
              {CONTACT.address.streetAddress}, Chennai - {CONTACT.address.postalCode}, India
            </a>
          </li>
          <li>
            <span className="footer-icon">💬</span>
            <a
              href={`https://wa.me/${CONTACT.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi, I am interested in RV Testing Machines and would like to make an enquiry.')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: {CONTACT.phone}
            </a>
          </li>
          <li>
            <span className="footer-icon">📞</span>
            <a href={`tel:${CONTACT.phoneLandline.replace(/[^0-9+]/g, '')}`}>
              Landline: {CONTACT.phoneLandline}
            </a>
          </li>
          <li>
            <span className="footer-icon">✉️</span>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </li>
        </ul>
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent('Plot No 89, Natesan Nagar, Ramapuram, Chennai - 600089')}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="110"
          style={{ border: 0, borderRadius: '8px', marginTop: '12px', display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>

    </div>

    <div className="footer-bottom">
      <p className="footer-copy">© {new Date().getFullYear()} RV Testing Machines Private Limited All rights reserved.</p>
    </div>

  </footer>
);

export default Footer;
