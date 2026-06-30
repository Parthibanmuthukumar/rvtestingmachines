import { useState } from 'react';
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
                Contact RV Private Limited for sales, service, calibration, and expert guidance on
                material testing solutions.
              </p>
              <div className="contact-cards">
                <div className="contact-card">
                  <strong>Address</strong>
                  <span>{CONTACT.address.streetAddress}, {CONTACT.address.addressLocality}, {CONTACT.address.addressRegion}, India</span>
                </div>
                <div className="contact-card">
                  <strong>Phone</strong>
                  <a href={`tel:${CONTACT.phone.replace(/[-\s]/g, '')}`}>{CONTACT.phone}</a>
                </div>
                <div className="contact-card">
                  <strong>Email</strong>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
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
