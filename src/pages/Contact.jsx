import { useState, useEffect } from 'react';
import { PageHero } from '../components/shared/PageHero';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import ScrollAnimation from '../components/ScrollAnimation';
import { CONTACT } from '../seo/siteConfig';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const FIELD_PLACEHOLDERS = {
  name: 'e.g. Rajesh Kumar',
  email: 'e.g. quality.lab@yourcompany.com',
  phone: 'e.g. +91 98765 43210',
  subject: 'e.g. UTM calibration / Rubber tester quote',
  message:
    'Machine model, test type (tensile, hardness, rubber), location, and when you need support…',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    setActiveTooltip('address');
    
    const timer1 = setTimeout(() => {
      setActiveTooltip('phone');
    }, 3000);

    const timer2 = setTimeout(() => {
      setActiveTooltip('email');
    }, 6000);

    const timer3 = setTimeout(() => {
      setActiveTooltip(null);
    }, 9000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const dismissTour = () => {
    setActiveTooltip(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subjectLine = form.subject || 'Website Contact Inquiry';
    const emailBody = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\nMessage:\n${form.message}`;

    // Gmail Web Compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}&su=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open Gmail compose directly in a new browser tab
    window.open(gmailUrl, '_blank');

    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <main id="main-content" className="inner-page">
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Reach our team for product enquiries, consultation, calibration scheduling, and technical support across India."
      />

      <section className="contact-section">
        <div className="contact-grid">
          <ScrollAnimation direction="left">
            <div className="contact-info">
              <h2>We&apos;re Here to Help</h2>
              <p>
                Contact RV Testing Machines Private Limited for sales, service, calibration, and expert guidance on
                material testing solutions.
              </p>
              <div className="contact-cards">
                <div className={`contact-card address-card-container ${activeTooltip === 'address' ? 'active-card' : ''}`}>
                  <strong>Address</strong>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=RV+Testing+Machines+Private+Limited+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={dismissTour}
                  >
                    RV Testing Machines Private Limited, Chennai, India
                  </a>
                  {activeTooltip === 'address' && (
                    <div className="address-tooltip-bubble">
                      <span className="address-tooltip-arrow" />
                      <span className="address-tooltip-text">💡 Click here to view address on map</span>
                      <button 
                        className="address-tooltip-close-btn" 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          e.preventDefault(); 
                          dismissTour(); 
                        }} 
                        aria-label="Dismiss info"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
                <div className={`contact-card address-card-container ${activeTooltip === 'phone' ? 'active-card' : ''}`}>
                  <strong>Phone</strong>
                  <div className="contact-link-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                    <a
                      href={`https://wa.me/${CONTACT.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi, I am interested in RV TESTING MACHINES PRIVATE LIMITED and would like to make an enquiry.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={dismissTour}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      💬 WhatsApp: {CONTACT.phone}
                    </a>
                    <a
                      href={`tel:${CONTACT.phoneLandline.replace(/[^0-9+]/g, '')}`}
                      onClick={dismissTour}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      📞 Landline: {CONTACT.phoneLandline}
                    </a>
                  </div>
                  {activeTooltip === 'phone' && (
                    <div className="address-tooltip-bubble">
                      <span className="address-tooltip-arrow" />
                      <span className="address-tooltip-text">💬 Click here to message us on WhatsApp</span>
                      <button 
                        className="address-tooltip-close-btn" 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          e.preventDefault(); 
                          dismissTour(); 
                        }} 
                        aria-label="Dismiss info"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
                <div className={`contact-card address-card-container ${activeTooltip === 'email' ? 'active-card' : ''}`}>
                  <strong>Email</strong>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}&su=${encodeURIComponent('Enquiry to RV Testing Machines')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={dismissTour}
                  >
                    {CONTACT.email}
                  </a>
                  {activeTooltip === 'email' && (
                    <div className="address-tooltip-bubble">
                      <span className="address-tooltip-arrow" />
                      <span className="address-tooltip-text">✉️ Click here to email us</span>
                      <button 
                        className="address-tooltip-close-btn" 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          e.preventDefault(); 
                          dismissTour(); 
                        }} 
                        aria-label="Dismiss info"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
                <div className="contact-card">
                  <strong>Working Hours</strong>
                  <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="contact-form-wrap">
              <h3>Send Us a Message</h3>
              {submitted ? (
                <p className="form-success" role="status">
                  Thank you! Redirecting you to Gmail to send your message...
                </p>
              ) : null}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    Full Name
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder={FIELD_PLACEHOLDERS.name}
                    />
                  </label>
                  <label>
                    Your Email
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder={FIELD_PLACEHOLDERS.email}
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Mobile Number
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      placeholder={FIELD_PLACEHOLDERS.phone}
                    />
                  </label>
                  <label>
                    Subject
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder={FIELD_PLACEHOLDERS.subject}
                    />
                  </label>
                </div>
                <label>
                  Your Message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={FIELD_PLACEHOLDERS.message}
                  />
                </label>
                <button type="submit" className="contact-submit">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <GlobalPartners />
    </main>
  );
}
