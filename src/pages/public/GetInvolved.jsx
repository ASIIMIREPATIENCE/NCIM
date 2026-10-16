
import { useState } from "react";
import { Link } from "react-router-dom";
import "./GetInvolved.css";

const activities = [
  {
    number: "01",
    title: "Volunteer with us",
    image: "/media/get-involved/volunteer.jpg",
    description:
      "Give your time, energy and experience to support children, families and community activities.",
    action: "Volunteer",
    subject: "Volunteering with NCIM",
  },
  {
    number: "02",
    title: "Make a donation",
    image: "/media/get-involved/donate.jpg",
    description:
      "Help provide learning materials, programme resources and support for community initiatives.",
    action: "Support our work",
    subject: "Making a donation",
  },
  {
    number: "03",
    title: "Partner with NCIM",
    image: "/media/get-involved/partnerships.jpg",
    description:
      "Explore collaboration opportunities with businesses, institutions, churches and organisations.",
    action: "Become a partner",
    subject: "Partnership opportunities",
  },
  {
    number: "04",
    title: "Share your skills",
    image: "/media/get-involved/skills-training.jpg",
    description:
      "Contribute through mentoring, training, professional expertise or practical skills.",
    action: "Share your skills",
    subject: "Sharing skills with NCIM",
  },
  {
    number: "05",
    title: "Join community activities",
    image: "/media/get-involved/community-participation.jpg",
    description:
      "Take part in community initiatives, learning activities and opportunities to work together.",
    action: "Get involved",
    subject: "Community participation",
  },
  {
    number: "06",
    title: "Support a programme",
    image: "/media/get-involved/programme-support.jpg",
    description:
      "Support early childhood development, child sponsorship, women's empowerment or other community programmes.",
    action: "Explore programmes",
    link: "/programmes",
  },
  {
    number: "07",
    title: "Spread the word",
    image: "/media/get-involved/awareness.jpg",
    description:
      "Help more people learn about community development by sharing NCIM's work with your networks.",
    action: "Contact our team",
    subject: "Raising awareness about NCIM",
  },
];

const donationAmounts = [10000, 25000, 50000, 100000];

function DonationSection() {
  const [amount, setAmount] = useState("25000");
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [programme, setProgramme] = useState("Where most needed");
  const [preview, setPreview] = useState(false);

  const selectedAmount =
    amount === "custom" ? Number(customAmount) : Number(amount);

  function handleSubmit(event) {
    event.preventDefault();

    if (!Number.isFinite(selectedAmount) || selectedAmount < 1000) {
      window.alert("Please enter an amount of at least UGX 1,000.");
      setPreview(false);
      return;
    }

    setPreview(true);
  }

  return (
    <>
      <section className="giving-section" id="donate">
        <div className="giving-intro">
          <div className="giving-side-image">
            <img
              src="/media/stories/ugandan-community.jpg"
              alt="Community members working together"
              loading="lazy"
            />
          </div>

          <span className="section-eyebrow">YOUR GENEROSITY MATTERS</span>
          <h2>Every contribution can make a difference.</h2>
          <p>
            Your generosity can support learning, child development,
            women's empowerment and community activities.
          </p>

          <div className="giving-note">
            <span className="giving-note-icon" aria-hidden="true">
              ♥
            </span>
            <div>
              <strong>Give with purpose</strong>
              <p>
                Choose a programme or direct your intended contribution
                towards the organisation's most pressing needs.
              </p>
            </div>
          </div>

          <a
            className="button-light donation-scroll-link"
            href="#payment-methods"
          >
            View donation methods →
          </a>
        </div>

        <div className="donation-card">
          <div className="donation-card-heading">
            <span className="section-eyebrow">DEMO DONATION FORM</span>
            <h3>Make a giving pledge</h3>
            <p>
              Choose an illustrative donation amount in Ugandan shillings.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="form-label">Choose an amount</label>

            <div className="amount-options">
              {donationAmounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`amount-option ${
                    amount === String(value) ? "selected" : ""
                  }`}
                  aria-pressed={amount === String(value)}
                  onClick={() => {
                    setAmount(String(value));
                    setPreview(false);
                  }}
                >
                  UGX {value.toLocaleString("en-UG")}
                </button>
              ))}

              <button
                type="button"
                className={`amount-option ${
                  amount === "custom" ? "selected" : ""
                }`}
                aria-pressed={amount === "custom"}
                onClick={() => {
                  setAmount("custom");
                  setPreview(false);
                }}
              >
                Other amount
              </button>
            </div>

            {amount === "custom" && (
              <div className="form-field">
                <label htmlFor="customAmount">Amount (UGX)</label>
                <input
                  id="customAmount"
                  type="number"
                  min="1000"
                  step="1000"
                  required
                  value={customAmount}
                  onChange={(event) => {
                    setCustomAmount(event.target.value);
                    setPreview(false);
                  }}
                  placeholder="e.g. 75000"
                />
              </div>
            )}

            <div className="form-field">
              <label htmlFor="donorName">Your name</label>
              <input
                id="donorName"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setPreview(false);
                }}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="donorEmail">Email address</label>
              <input
                id="donorEmail"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setPreview(false);
                }}
                placeholder="you@example.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="donationProgramme">
                What would you like to support?
              </label>
              <select
                id="donationProgramme"
                value={programme}
                onChange={(event) => {
                  setProgramme(event.target.value);
                  setPreview(false);
                }}
              >
                <option>Where most needed</option>
                <option>Early Childhood Development</option>
                <option>Child Sponsorship</option>
                <option>Women Empowerment</option>
                <option>Tuesday Fellowship Series</option>
                <option>Learning materials</option>
                <option>Community activities</option>
              </select>
            </div>

            <button className="giving-submit" type="submit">
              Preview donation intention
            </button>

            <p className="demo-disclaimer">
              Demo only. No payment is processed, and your details are not
              saved or sent to NCIM.
            </p>
          </form>

          {preview && (
            <div className="donation-preview" role="status" aria-live="polite">
              <span className="section-eyebrow">DEMO SUMMARY</span>
              <h4>Thank you, {name}.</h4>
              <p>
                Intended amount:{" "}
                <strong>
                  UGX {selectedAmount.toLocaleString("en-UG")}
                </strong>
              </p>
              <p>
                Preferred purpose: <strong>{programme}</strong>
              </p>
              <p>Email entered: {email}</p>
              <p>
                This is a demonstration only. No donation has been made
                and no information has been sent.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="payment-methods" id="payment-methods">
        <div className="payment-heading">
          <span className="section-eyebrow">DEMO PAYMENT INFORMATION</span>
          <h3>How to donate to NCIM</h3>
          <p>
            These fictional payment details demonstrate how NCIM's donation
            options could appear on the website.
          </p>
          <span className="demo-payment-label">
            DEMO DETAILS — NOT FOR REAL PAYMENTS
          </span>
        </div>

        <div className="payment-method-grid">
          <article className="payment-method-card">
            <div className="payment-method-icon" aria-hidden="true">▤</div>
            <h4>Bank transfer</h4>
            <p className="payment-provider">Demo commercial bank</p>

            <div className="payment-detail">
              <span>Account name</span>
              <strong>NCIM Community Initiative (Demo)</strong>
            </div>
            <div className="payment-detail">
              <span>Account number</span>
              <strong>DEMO-ACCOUNT-001</strong>
            </div>
            <div className="payment-detail">
              <span>Branch</span>
              <strong>Kampala (Demo)</strong>
            </div>
          </article>

          <article className="payment-method-card">
            <div className="payment-method-icon" aria-hidden="true">▣</div>
            <h4>MTN Mobile Money</h4>
            <p className="payment-provider">MTN MoMo · Demo</p>

            <div className="payment-detail">
              <span>Registered name</span>
              <strong>NCIM Demo Account</strong>
            </div>
            <div className="payment-detail">
              <span>Payment number</span>
              <strong>DEMO ONLY — NO ACTIVE NUMBER</strong>
            </div>
            <p className="payment-method-note">
              No real mobile money number is provided.
            </p>
          </article>

          <article className="payment-method-card">
            <div className="payment-method-icon" aria-hidden="true">▣</div>
            <h4>Airtel Money</h4>
            <p className="payment-provider">Airtel Money · Demo</p>

            <div className="payment-detail">
              <span>Registered name</span>
              <strong>NCIM Demo Account</strong>
            </div>
            <div className="payment-detail">
              <span>Payment number</span>
              <strong>DEMO ONLY — NO ACTIVE NUMBER</strong>
            </div>
            <p className="payment-method-note">
              No real mobile money number is provided.
            </p>
          </article>
        </div>

        <p className="payment-footer-note">
          All payment details are fictional placeholders. Do not transfer
          money using this demonstration information.
        </p>
      </section>
    </>
  );
}

function GetInvolved() {
  return (
    <main className="get-involved-page">
      <section className="involved-hero">
        <div className="involved-hero-content">
          <span className="section-eyebrow">BE PART OF THE CHANGE</span>
          <h1>There is a place for you in our story.</h1>
          <p>
            Your time, skills, partnerships and generosity can help create
            opportunities for children, families and communities.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#opportunities">
              Explore opportunities
            </a>
            <a className="button-outline" href="#donate">
              Support our work
            </a>
          </div>

          <p className="hero-small-note">
            Start with what you can give. Every meaningful contribution
            begins somewhere.
          </p>
        </div>

        <div className="involved-hero-visual">
          <img
            src="/media/get-involved/volunteer.jpg"
            alt="Volunteer supporting children with learning activities"
          />
          <div className="hero-image-caption">
            <span>01 / COMMUNITY</span>
            <strong>Working together for a brighter future</strong>
          </div>
        </div>
      </section>

      <section className="opportunities-section" id="opportunities">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">WAYS TO PARTICIPATE</span>
            <h2>Find your way to get involved.</h2>
          </div>
          <p>
            Whether you have time to give, skills to share or resources to
            contribute, choose an opportunity that feels right for you.
          </p>
        </div>

        <div className="opportunities-grid">
          {activities.map((activity) => (
            <article className="opportunity-card" key={activity.number}>
              <div className="opportunity-image-wrap">
                <img
                  src={activity.image}
                  alt={activity.title}
                  loading="lazy"
                />
                <span className="opportunity-number">
                  {activity.number}
                </span>
              </div>

              <div className="opportunity-content">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>

                {activity.link ? (
                  <Link className="text-link" to={activity.link}>
                    {activity.action} <span aria-hidden="true">→</span>
                  </Link>
                ) : activity.number === "02" ? (
                  <a className="text-link" href="#donate">
                    {activity.action} <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <Link
                    className="text-link"
                    to={`/contact?subject=${encodeURIComponent(activity.subject)}`}
                  >
                    {activity.action} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <DonationSection />

      <section className="giving-guidelines">
        <div className="guidelines-heading">
          <span className="section-eyebrow">GIVING RESPONSIBLY</span>
          <h2>Our giving guidelines.</h2>
          <p>
            Clear information and responsible handling of contributions help
            build trust between an organisation and its supporters.
          </p>
        </div>

        <div className="guidelines-grid">
          <article className="guideline-item">
            <span className="guideline-number">01</span>
            <h3>Use verified channels</h3>
            <p>
              Confirm official payment details before making a real donation.
            </p>
          </article>
          <article className="guideline-item">
            <span className="guideline-number">02</span>
            <h3>Ask for confirmation</h3>
            <p>
              Find out how contributions are acknowledged and receipts or
              confirmations are provided.
            </p>
          </article>
          <article className="guideline-item">
            <span className="guideline-number">03</span>
            <h3>Understand the purpose</h3>
            <p>
              Ask which activities your contribution may support and how
              programme updates are shared.
            </p>
          </article>
          <article className="guideline-item">
            <span className="guideline-number">04</span>
            <h3>Protect your information</h3>
            <p>
              Share personal and financial information only through verified,
              appropriate channels.
            </p>
          </article>
        </div>

        <p className="guidelines-disclaimer">
          These guidelines are proposed demonstration content and should be
          reviewed before being presented as official policy.
        </p>
      </section>

      <section className="partnership-banner">
        <div>
          <span className="section-eyebrow">LET'S WORK TOGETHER</span>
          <h2>Good things happen when we work together.</h2>
          <p>
            Have an idea, a skill to share or a partnership to discuss? Start
            a conversation with our team.
          </p>
        </div>
        <Link className="button-light" to="/contact">
          Start a conversation <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="involved-values">
        <span className="section-eyebrow">A SHARED COMMITMENT</span>
        <h2>Participation built on respect and purpose.</h2>
        <div className="values-list">
          <span>Community first</span>
          <span>Respect and dignity</span>
          <span>Responsible giving</span>
          <span>Working together</span>
        </div>
      </section>
    </main>
  );
}

export default GetInvolved;
