import { useEffect, useRef, useState } from 'react';
import { PageHero } from '../components/shared/PageHero';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import ScrollAnimation from '../components/ScrollAnimation';
import TiltCard from '../components/TiltCard';
import { CONTACT } from '../seo/siteConfig';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

const PLACEHOLDERS = {
  name:    'e.g. Rajesh Kumar',
  email:   'e.g. quality.lab@yourcompany.com',
  phone:   'e.g. +91 98765 43210',
  subject: 'e.g. UTM calibration / Rubber tester quote',
  message: 'Machine model, test type, location, and when you need support…',
};

const TOOLTIPS = {
  address: '💡 Click to view location on Google Maps',
  phone:   '💡 Click to chat on WhatsApp or call landline',
  email:   '💡 Click to send an email enquiry',
  hours:   '💡 Open Mon – Sat from 9:00 AM to 6:00 PM',
};

export default function Contact() {
  const [form, setForm]           = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [activeTip, setActiveTip] = useState('address');
  const [dismissedTips, setDismissedTips] = useState({});
  const timerRef                  = useRef(null);

  const showTip = (key) => {
    if (dismissedTips[key]) return; // If manually dismissed, stay hidden
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveTip(key);
    timerRef.current = setTimeout(() => {
      setActiveTip(null);
    }, 4000);
  };

  const dismissTip = (e, key) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    setDismissedTips((prev) => ({ ...prev, [key]: true }));
    setActiveTip(null);
  };

  useEffect(() => {
    // Automatically show address tooltip for 4 seconds on initial page load
    showTip('address');
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const subject = form.subject || 'Website Contact Inquiry';
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\nMessage:\n${form.message}`;
    
    // Check if device is mobile (iOS or Android)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (isMobile) {
      // On mobile, trigger mailto to open native Gmail app
      window.location.href = mailtoUrl;
    } else {
      // On laptop/desktop, open Gmail Web directly in a new browser tab
      window.open(gmailWebUrl, '_blank', 'noopener,noreferrer');
    }

    setSubmitted(true);
    setForm(initialForm);
  };

  const renderCloseBtn = (key) => (
    <button
      type="button"
      className="address-tooltip-close-btn"
      onClick={(e) => dismissTip(e, key)}
      aria-label="Dismiss tooltip"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );

  return (
    <main id="main-content" className="inner-page">
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Reach our team for product enquiries, consultation, calibration scheduling, and technical support across India."
      />

      <section className="contact-section">
        <div className="contact-container">
          <ScrollAnimation direction="up">
            <h2 className="contact-main-title">We're Here to Help</h2>
          </ScrollAnimation>

          <div className="contact-grid">
            {/* Info */}
            <ScrollAnimation direction="left">
              <div className="contact-info">
                <p>Contact RV Testing Machines Private Limited for sales, service, calibration, and expert guidance on material testing solutions.</p>

                <div className="contact-cards">
                  {/* Address */}
                  <TiltCard
                    intensity={5}
                    className={`contact-card address-card-container${activeTip === 'address' && !dismissedTips.address ? ' active-card' : ''}`}
                    onMouseEnter={() => showTip('address')}
                  >
                    <strong>Address</strong>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=RV+Testing+Machines+Private+Limited+Chennai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Plot No 89, Door No 5/49 A,<br />
                      Vanavil Flats - A2, Natesan Nagar,<br />
                      Ramapuram, Chennai - 600 089, India
                    </a>
                    {activeTip === 'address' && !dismissedTips.address && (
                      <div className="address-tooltip-bubble">
                        <span className="address-tooltip-arrow" />
                        <span className="address-tooltip-text">{TOOLTIPS.address}</span>
                        {renderCloseBtn('address')}
                      </div>
                    )}
                  </TiltCard>

                  {/* Phone */}
                  <div
                    className={`contact-card${activeTip === 'phone' && !dismissedTips.phone ? ' active-card' : ''}`}
                    onMouseEnter={() => showTip('phone')}
                  >
                    <strong>Phone</strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <a
                        href={`https://wa.me/${CONTACT.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi, I am interested in RV Testing Machines and would like to make an enquiry.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        💬 WhatsApp: {CONTACT.phone}
                      </a>
                      <a href={`tel:${CONTACT.phoneLandline.replace(/[^0-9+]/g, '')}`}>
                        📞 Landline: {CONTACT.phoneLandline}
                      </a>
                    </div>
                    {activeTip === 'phone' && !dismissedTips.phone && (
                      <div className="address-tooltip-bubble">
                        <span className="address-tooltip-arrow" />
                        <span className="address-tooltip-text">{TOOLTIPS.phone}</span>
                        {renderCloseBtn('phone')}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div
                    className={`contact-card${activeTip === 'email' && !dismissedTips.email ? ' active-card' : ''}`}
                    onMouseEnter={() => showTip('email')}
                  >
                    <strong>Email</strong>
                    <a
                      href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Enquiry to RV Testing Machines')}`}
                    >
                      {CONTACT.email}
                    </a>
                    {activeTip === 'email' && !dismissedTips.email && (
                      <div className="address-tooltip-bubble">
                        <span className="address-tooltip-arrow" />
                        <span className="address-tooltip-text">{TOOLTIPS.email}</span>
                        {renderCloseBtn('email')}
                      </div>
                    )}
                  </div>

                  {/* Hours */}
                  <div
                    className={`contact-card${activeTip === 'hours' && !dismissedTips.hours ? ' active-card' : ''}`}
                    onMouseEnter={() => showTip('hours')}
                  >
                    <strong>Working Hours</strong>
                    <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
                    {activeTip === 'hours' && !dismissedTips.hours && (
                      <div className="address-tooltip-bubble">
                        <span className="address-tooltip-arrow" />
                        <span className="address-tooltip-text">{TOOLTIPS.hours}</span>
                        {renderCloseBtn('hours')}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Form */}
            <ScrollAnimation direction="right">
              <div className="contact-form-wrap">
                <h3>Send Us a Message</h3>
                {submitted && <p className="form-success" role="status">Opening your mail app…</p>}
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <label>
                      Full Name
                      <input type="text" name="name" value={form.name} onChange={handleChange} required autoComplete="name" placeholder={PLACEHOLDERS.name} />
                    </label>
                    <label>
                      Your Email
                      <input type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" placeholder={PLACEHOLDERS.email} />
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      Phone Number
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} autoComplete="tel" placeholder={PLACEHOLDERS.phone} />
                    </label>
                    <label>
                      Subject
                      <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder={PLACEHOLDERS.subject} />
                    </label>
                  </div>

                  <label className="form-full">
                    Your Message / Requirement Details
                    <textarea name="message" rows="5" value={form.message} onChange={handleChange} required placeholder={PLACEHOLDERS.message} />
                  </label>

                  <button type="submit" className="form-submit-btn">
                    Send Enquiry via Email &rarr;
                  </button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="contact-map-wrap">
        <ScrollAnimation direction="up">
          <div className="contact-map-header">
            <span className="home-label">Our Location</span>
            <h3>Visit Our Laboratory &amp; Office</h3>
            <p>Plot No 89, Door No 5/49 A, Vanavil Flats - A2, Natesan Nagar, Ramapuram, Chennai - 600 089, Tamil Nadu, India.</p>
            <div style={{ marginTop: '0.75rem' }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=RV+Testing+Machines+Private+Limited+Ramapuram+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-direct-link"
              >
                📍 Open "RV Testing Machines Private Limited" in Google Maps &rarr;
              </a>
            </div>
          </div>
          <div className="contact-map-frame">
            <iframe
              title="RV Testing Machines Private Limited Location Map"
              src="https://maps.google.com/maps?q=RV+Testing+Machines+Private+Limited,+Natesan+Nagar,+Ramapuram,+Chennai,+Tamil+Nadu&t=&z=16&ie=UTF8&iwloc=near&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollAnimation>
      </section>

      <GlobalPartners />
    </main>
  );
}
