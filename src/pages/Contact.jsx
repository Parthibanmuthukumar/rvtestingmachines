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
  const timerRef                  = useRef(null);

  const showTip = (key) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveTip(key);
    timerRef.current = setTimeout(() => {
      setActiveTip(null);
    }, 3000); // Auto disappear after 3 seconds
  };

  const dismiss = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveTip(null);
  };

  useEffect(() => {
    // Automatically show address tooltip for 3 seconds on load
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
    const body    = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\nMessage:\n${form.message}`;
    const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Triggers native mobile Mail / Gmail app or desktop default email client
    window.location.href = mailtoUrl;

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
                    className={`contact-card address-card-container${activeTip === 'address' ? ' active-card' : ''}`}
                    onMouseEnter={() => showTip('address')}
                  >
                    <strong>Address</strong>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=RV+Testing+Machines+Private+Limited+Chennai"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={dismiss}
                    >
                      Plot No 89, Door No 5/49 A,<br />
                      Vanavil Flats - A2, Natesan Nagar,<br />
                      Ramapuram, Chennai - 600 089, India
                    </a>
                    {activeTip === 'address' && (
                      <div className="address-tooltip-bubble">
                        <span className="address-tooltip-arrow" />
                        <span className="address-tooltip-text">{TOOLTIPS.address}</span>
                        <button className="address-tooltip-close-btn" onClick={e => { e.stopPropagation(); e.preventDefault(); dismiss(); }} aria-label="Dismiss">×</button>
                      </div>
                    )}
                  </TiltCard>

                  {/* Phone */}
                  <div
                    className={`contact-card${activeTip === 'phone' ? ' active-card' : ''}`}
                    onMouseEnter={() => showTip('phone')}
                  >
                    <strong>Phone</strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <a
                        href={`https://wa.me/${CONTACT.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi, I am interested in RV Testing Machines and would like to make an enquiry.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={dismiss}
                      >
                        💬 WhatsApp: {CONTACT.phone}
                      </a>
                      <a href={`tel:${CONTACT.phoneLandline.replace(/[^0-9+]/g, '')}`} onClick={dismiss}>
                        📞 Landline: {CONTACT.phoneLandline}
                      </a>
                    </div>
                    {activeTip === 'phone' && (
                      <div className="address-tooltip-bubble">
                        <span className="address-tooltip-arrow" />
                        <span className="address-tooltip-text">{TOOLTIPS.phone}</span>
                        <button className="address-tooltip-close-btn" onClick={e => { e.stopPropagation(); e.preventDefault(); dismiss(); }} aria-label="Dismiss">×</button>
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div
                    className={`contact-card${activeTip === 'email' ? ' active-card' : ''}`}
                    onMouseEnter={() => showTip('email')}
                  >
                    <strong>Email</strong>
                    <a
                      href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Enquiry to RV Testing Machines')}`}
                      onClick={dismiss}
                    >
                      {CONTACT.email}
                    </a>
                    {activeTip === 'email' && (
                      <div className="address-tooltip-bubble">
                        <span className="address-tooltip-arrow" />
                        <span className="address-tooltip-text">{TOOLTIPS.email}</span>
                        <button className="address-tooltip-close-btn" onClick={e => { e.stopPropagation(); e.preventDefault(); dismiss(); }} aria-label="Dismiss">×</button>
                      </div>
                    )}
                  </div>

                  {/* Hours */}
                  <div
                    className={`contact-card${activeTip === 'hours' ? ' active-card' : ''}`}
                    onMouseEnter={() => showTip('hours')}
                  >
                    <strong>Working Hours</strong>
                    <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
                    {activeTip === 'hours' && (
                      <div className="address-tooltip-bubble">
                        <span className="address-tooltip-arrow" />
                        <span className="address-tooltip-text">{TOOLTIPS.hours}</span>
                        <button className="address-tooltip-close-btn" onClick={e => { e.stopPropagation(); e.preventDefault(); dismiss(); }} aria-label="Dismiss">×</button>
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
                      Mobile Number
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} autoComplete="tel" placeholder={PLACEHOLDERS.phone} />
                    </label>
                    <label>
                      Subject
                      <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder={PLACEHOLDERS.subject} />
                    </label>
                  </div>
                  <label>
                    Your Message
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder={PLACEHOLDERS.message} />
                  </label>
                  <button type="submit" className="contact-submit">Submit Enquiry →</button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* ── Google Maps Embed ── */}
        <ScrollAnimation direction="up">
          <div className="contact-map-wrap">
            <div className="contact-map-header">
              <span className="home-label">Find Us</span>
              <h3>Our Location</h3>
              <p>
                Plot No 89, Door No 5/49 A, Vanavil Flats - A2,<br />
                Natesan Nagar, Ramapuram, Chennai - 600 089, India
              </p>
            </div>
            <div className="contact-map-frame">
              <iframe
                title="RV Testing Machines Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1234567890!2d80.1761!3d13.0329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260e9f7e4c5c5%3A0x0!2sRV+Testing+Machines+Private+Limited+Ramapuram+Chennai!5e0!3m2!1sen!2sin!4v1690000000000"
                width="100%"
                height="340"
                style={{ border: 0, borderRadius: '16px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <GlobalPartners />
    </main>
  );
}
