import { writeFileSync } from 'fs';

const content = `import { useState } from 'react';
import { PageHero } from '../components/shared/PageHero';
import { PartnersLogos } from '../components/shared/PartnersLogos';
import ScrollAnimation from '../components/ScrollAnimation';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
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
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Reach our team for product enquiries, consultation, calibration scheduling, and technical support across India."
      />

      <section className="contact-section">
        <motion.div className="contact-grid">
          <ScrollAnimation direction="left">
            <div className="contact-info">
              <h2>We&apos;re Here to Help</h2>
              <p>
                Contact RV Testing Machines for sales, service, calibration, and expert guidance on
                material testing solutions.
              </p>
              <div className="contact-cards">
                <div className="contact-card">
                  <strong>Address</strong>
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
                <div className="contact-card">
                  <strong>Phone</strong>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
                <motion.div className="contact-card">
                  <strong>Email</strong>
                  <a href="mailto:info@rvtestingmachines.com">info@rvtestingmachines.com</a>
                </motion.div>
                <div className="contact-card">
                  <strong>Working Hours</strong>
                  <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="contact-form-wrap">
              <h3>Send Us a Message</h3>
              {submitted ? (
                <p className="form-success" role="status">
                  Thank you! Your message has been received. We will contact you shortly.
                </p>
              ) : null}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                    />
                  </label>
                </motion.div>
                <div className="form-row">
                  <label>
                    Phone
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91"
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
                      placeholder="How can we help?"
                    />
                  </label>
                </motion.div>
                <label>
                  Message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your testing requirements..."
                  />
                </label>
                <button type="submit" className="contact-submit">
                  Submit Enquiry
                </button>
              </form>
            </motion.div>
          </ScrollAnimation>
        </motion.div>
      </section>

      <PartnersLogos />
    </main>
  );
}
`;

writeFileSync(new URL('../src/pages/Contact.jsx', import.meta.url), content.replace(/<\/?motion\.div/g, (m) => m.replace('motion.', '')));
