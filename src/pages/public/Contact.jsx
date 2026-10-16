
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const enquiryTypes = [
  "General enquiry",
  "Our programmes",
  "Volunteering",
  "Donations and sponsorship",
  "Partnership opportunities",
  "Community activities",
  "Other",
];

const contactDetails = [
  {
    icon: "⌖",
    title: "Our location",
    description: "Buikwe District, Uganda",
    note: "Exact office address to be confirmed.",
  },
  {
    icon: "@",
    title: "Email address",
    description: "info@example.com",
    note: "Temporary placeholder — replace before launch.",
  },
  {
    icon: "☎",
    title: "Telephone",
    description: "+256 700 000 000",
    note: "Dummy number — not an official NCIM contact.",
  },
  {
    icon: "◷",
    title: "Office hours",
    description: "Monday – Friday",
    note: "Provisional hours: 9:00 AM – 5:00 PM.",
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: enquiryTypes[0],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            WE'D LOVE TO HEAR FROM YOU
          </span>

          <h1>Let's start a conversation.</h1>

          <p>
            Have a question, an idea, or an interest in supporting our work?
            Reach out to NCIM. We welcome conversations with individuals,
            families, organisations and potential partners.
          </p>

          <div className="contact-hero-actions">
            <a href="#contact-form" className="contact-button contact-button-gold">
              Send an enquiry <span aria-hidden="true">→</span>
            </a>

            <a href="#our-location" className="contact-button contact-button-outline">
              Our location
            </a>
          </div>

          <div className="contact-hero-note">
            <span aria-hidden="true">✦</span>
            Building hope. Changing futures.
          </div>
        </div>

        <div className="contact-hero-visual">
          <img
            src="/media/get-involved/community-participation.jpg"
            alt="Community members coming together to support local development"
          />

          <div className="contact-hero-caption">
            <span>NCIM · UGANDA</span>
            <strong>Every conversation can be the beginning of change.</strong>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="contact-information">
        <div className="contact-section-heading">
          <span className="contact-eyebrow">GET IN TOUCH</span>
          <h2>How can we help you?</h2>
          <p>
            Whether you want to learn about our programmes, discuss a
            partnership or find ways to contribute, we would love to hear
            from you.
          </p>
        </div>

        <div className="contact-details-grid">
          {contactDetails.map((detail) => (
            <article className="contact-detail-card" key={detail.title}>
              <div className="contact-detail-icon" aria-hidden="true">
                {detail.icon}
              </div>

              <h3>{detail.title}</h3>
              <p className="contact-detail-main">{detail.description}</p>
              <p className="contact-detail-note">{detail.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* MESSAGE FORM AND LOCATION */}
      <section className="contact-main-section">
        <div className="contact-main-grid">
          <div className="contact-form-card" id="contact-form">
            <div className="contact-card-heading">
              <span className="contact-eyebrow">SEND US A MESSAGE</span>
              <h2>We are ready to listen.</h2>
              <p>
                Complete the form below to prepare your enquiry.
                All fields are required.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-field">
                <label htmlFor="contact-name">Your full name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-subject">What is your enquiry about?</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                >
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows="6"
                  required
                />
              </div>

              <button className="contact-submit-button" type="submit">
                Preview your enquiry <span aria-hidden="true">→</span>
              </button>

              <p className="contact-form-disclaimer">
                Demonstration form only. Messages are not sent or stored.
              </p>
            </form>

            {submitted && (
              <div className="contact-success-preview" role="status">
                <span className="contact-eyebrow">ENQUIRY PREVIEW</span>
                <h3>Thank you, {form.name}.</h3>
                <p>
                  Your enquiry is ready for review, but it has not been
                  delivered to NCIM.
                </p>

                <div className="contact-preview-detail">
                  <strong>Reply email</strong>
                  <span>{form.email}</span>
                </div>

                <div className="contact-preview-detail">
                  <strong>Enquiry type</strong>
                  <span>{form.subject}</span>
                </div>

                <div className="contact-preview-detail">
                  <strong>Message</strong>
                  <span>{form.message}</span>
                </div>

                <p className="contact-preview-warning">
                  This is a local demonstration. An email or backend
                  service must be connected before messages can be sent.
                </p>
              </div>
            )}
          </div>

          <aside className="contact-location-column" id="our-location">
            <div className="contact-location-card">
              <span className="contact-eyebrow">FIND NCIM</span>
              <h2>Rooted in our community.</h2>
              <p>
                NCIM is based in Buikwe District, Uganda. We work towards
                creating opportunities and supporting communities.
              </p>

              <div className="contact-location-visual">
                <img
                  src="/media/get-involved/community-participation.jpg"
                  alt="People working together in a community setting"
                  loading="lazy"
                />

                <div className="contact-location-overlay">
                  <span className="contact-map-pin" aria-hidden="true">⌖</span>
                  <div>
                    <strong>Buikwe District</strong>
                    <span>Uganda, East Africa</span>
                  </div>
                </div>
              </div>

              <div className="contact-location-facts">
                <div>
                  <span>District</span>
                  <strong>Buikwe</strong>
                </div>
                <div>
                  <span>Country</span>
                  <strong>Uganda</strong>
                </div>
                <div>
                  <span>Office address</span>
                  <strong>To be confirmed</strong>
                </div>
              </div>

              <p className="contact-location-note">
                This section identifies the district only. It does not
                represent an exact office location or a live map.
              </p>
            </div>

            <div className="contact-help-card">
              <span className="contact-help-symbol" aria-hidden="true">✦</span>
              <h3>Not sure where to start?</h3>
              <p>
                Explore our work to learn more about the opportunities
                available to you.
              </p>
              <Link to="/programmes" className="contact-text-link">
                Explore our programmes <span aria-hidden="true">→</span>
              </Link>
              <Link to="/get-involved" className="contact-text-link">
                Get involved <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* COMMON ENQUIRIES */}
      <section className="contact-enquiries">
        <div className="contact-section-heading">
          <span className="contact-eyebrow">HERE TO HELP</span>
          <h2>What would you like to discuss?</h2>
          <p>
            Choose the area that best describes your interest and use the
            enquiry form to tell us more.
          </p>
        </div>

        <div className="contact-enquiries-grid">
          <article className="contact-enquiry-item">
            <span className="contact-enquiry-number">01</span>
            <h3>Our programmes</h3>
            <p>
              Ask about early childhood development, child sponsorship,
              women's empowerment and community activities.
            </p>
            <Link to="/programmes" className="contact-text-link">
              View programmes →
            </Link>
          </article>

          <article className="contact-enquiry-item">
            <span className="contact-enquiry-number">02</span>
            <h3>Partnerships</h3>
            <p>
              Discuss opportunities for organisations, businesses,
              institutions and community partners to work with NCIM.
            </p>
            <a href="#contact-form" className="contact-text-link">
              Start an enquiry →
            </a>
          </article>

          <article className="contact-enquiry-item">
            <span className="contact-enquiry-number">03</span>
            <h3>Supporting our work</h3>
            <p>
              Learn about volunteering, contributing skills, donations
              and other ways to participate.
            </p>
            <Link to="/get-involved" className="contact-text-link">
              Get involved →
            </Link>
          </article>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="contact-final-cta">
        <div>
          <span className="contact-eyebrow">LET'S MAKE A DIFFERENCE</span>
          <h2>Every connection creates a possibility.</h2>
          <p>
            Learn about our work, discover opportunities and become part
            of the NCIM story.
          </p>
        </div>

        <div className="contact-final-actions">
          <Link to="/about" className="contact-button contact-button-light">
            About NCIM
          </Link>
          <Link to="/get-involved" className="contact-button contact-button-outline-light">
            Get involved
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Contact;
