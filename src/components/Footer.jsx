import { Link } from 'react-router-dom';
import logoPdf from '../assets/images/RVTMPL LOGO_page-0001.jpg';
import { CONTACT } from '../seo/siteConfig';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src={logoPdf} alt="RV Testing Machines" className="footer-logo-img" />
            <div className="footer-brand-name">
              <span className="nm">RV Testing Machines</span>
              <span className="sub">Private Limited</span>
            </div>
          </div>
          <p className="footer-tagline">
            Trusted partner for material testing, NABL accredited calibration &amp; expert technical
            support across India — serving industry for over 10 years.
          </p>
          <div className="footer-nabl-chip">
            <span className="footer-nabl-dot" />
            NABL Accredited Calibration Lab — Certificate No: CC – 4232
          </div>
          <div className="footer-socials">
            <a href="https://www.facebook.com/RVTestingMachines" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-social">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            </a>
            <a href="https://twitter.com/RVTestingMachine" target="_blank" rel="noreferrer" aria-label="Twitter" className="footer-social">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="http://www.linkedin.com/in/rvtestingmachines" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="footer-col-title">About Us</h4>
          <ul className="footer-links footer-contact">
            <li><Link to="/about">Company Overview</Link></li>
            <li><Link to="/about">Our Vision &amp; Mission</Link></li>
            <li><Link to="/about">10+ Years Experience</Link></li>
            <li><Link to="/about">Accreditation</Link></li>
            <li><Link to="/about">Global Partners</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links footer-contact">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/services">Calibration Services</Link></li>
            <li><Link to="/consultation">Consultation</Link></li>
            <li><Link to="/contact">Technical Support</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="footer-col-title">Contact Us</h4>
          <ul className="footer-links footer-contact">
            <li>
              <span className="footer-contact-ico">📍</span>
              <a href="https://www.google.com/maps/search/?api=1&query=RV+Testing+Machines+Private+Limited+Chennai" target="_blank" rel="noopener noreferrer">
                Plot No 89, Door No 5/49 A,<br />
                Vanavil Flats - A2, Natesan Nagar,<br />
                Ramapuram, Chennai – 600 089, India
              </a>
            </li>
            <li>
              <span className="footer-contact-ico">💬</span>
              <a
                href={`https://wa.me/${CONTACT.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi, I am interested in RV Testing Machines.')}`}
                target="_blank" rel="noreferrer"
              >
                WhatsApp: {CONTACT.phone}
              </a>
            </li>
            <li>
              <span className="footer-contact-ico">📞</span>
              <a href={`tel:${CONTACT.phoneLandline.replace(/[^0-9+]/g, '')}`}>
                {CONTACT.phoneLandline}
              </a>
            </li>
            <li>
              <span className="footer-contact-ico">✉️</span>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`} target="_blank" rel="noreferrer">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} RV Testing Machines Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
