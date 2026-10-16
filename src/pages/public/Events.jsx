
import { Link } from "react-router-dom";
import "./Events.css";

const eventHighlights = [
  {
    number: "01",
    category: "Learning & development",
    title: "Community learning sessions",
    description:
      "Spaces for sharing knowledge, discussing community priorities and exploring practical ways to improve everyday life.",
    image: "/media/events/community-learning.jpg",
    alt: "Community members taking part in a learning session",
  },
  {
    number: "02",
    category: "Community outreach",
    title: "Reaching people where they are",
    description:
      "Outreach activities can help organisations listen to local needs, share useful information and connect people with relevant support.",
    image: "/media/events/community-outreach.jpg",
    alt: "Community outreach activity in Uganda",
  },
  {
    number: "03",
    category: "Youth & families",
    title: "Creating room to participate",
    description:
      "Inclusive activities can bring children, young people and families together to learn, contribute ideas and build relationships.",
    image: "/media/events/youth-families.jpg",
    alt: "Young people participating in a community activity",
  },
];

const eventPrinciples = [
  {
    number: "01",
    title: "Listen first",
    text: "Activities should respond to community voices, experiences and priorities.",
  },
  {
    number: "02",
    title: "Make participation meaningful",
    text: "Create welcoming spaces where people can contribute, learn and connect.",
  },
  {
    number: "03",
    title: "Keep the impact visible",
    text: "Share verified updates and lessons so communities and supporters can follow the work.",
  },
];

export default function Events() {
  return (
    <main className="events-page">
      <section className="events-masthead">
        <div className="events-masthead-copy">
          <p className="events-eyebrow">NCIM · Community calendar</p>
          <h1>
            Bringing people
            <span> together.</span>
          </h1>
          <p className="events-lead">
            Community work happens through conversations, shared experiences
            and opportunities to take part. Explore the kinds of activities
            NCIM can use to connect with the people and communities it serves.
          </p>

          <div className="events-masthead-actions">
            <Link className="events-button events-button-gold" to="/contact">
              Enquire about activities
            </Link>
            <Link className="events-text-link" to="/stories">
              Explore stories <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="events-masthead-visual">
          <img
            src="/media/events/community-gathering.jpg"
            alt="Community members gathered together in Uganda"
          />
          <div className="events-image-caption">
            <span className="events-caption-mark" aria-hidden="true">
              ✳
            </span>
            <p>
              <strong>Community comes first.</strong>
              <span>Every gathering begins with people.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="events-introduction">
        <p className="events-section-label">More than a date on a calendar</p>
        <div className="events-introduction-grid">
          <h2>
            The moments that
            <br />
            <em>bring us closer.</em>
          </h2>
          <div>
            <p>
              Events create opportunities to meet, exchange ideas and build
              lasting relationships. For NCIM, each activity should have a
              clear purpose and a meaningful connection to the communities
              involved.
            </p>
            <p>
              This page will feature confirmed events, community activities
              and highlights from previous gatherings as verified information
              becomes available.
            </p>
          </div>
        </div>
      </section>

      <section className="events-calendar-section" id="upcoming">
        <div className="events-section-heading">
          <div>
            <p className="events-section-label">The calendar</p>
            <h2>What’s coming up?</h2>
          </div>
          <span className="events-heading-note">Upcoming events & notices</span>
        </div>

        <div className="events-calendar-notice">
          <span className="events-notice-icon" aria-hidden="true">
            ◷
          </span>
          <div>
            <h3>Upcoming dates will appear here</h3>
            <p>
              NCIM’s confirmed event dates, venues and registration details
              will be published here once they are available. Contact the team
              to enquire about planned activities.
            </p>
          </div>
          <Link to="/contact" className="events-notice-link">
            Contact NCIM <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="events-activities-section">
        <div className="events-activities-heading">
          <div>
            <p className="events-section-label">Ways to come together</p>
            <h2>Community activities</h2>
          </div>
          <p>
            Different ways of bringing people together around learning,
            participation and shared community priorities.
          </p>
        </div>

        <div className="events-activity-list">
          {eventHighlights.map((event) => (
            <article className="events-activity" key={event.number}>
              <div className="events-activity-image">
                <img src={event.image} alt={event.alt} loading="lazy" />
                <span>{event.number}</span>
              </div>

              <div className="events-activity-copy">
                <p className="events-activity-category">{event.category}</p>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <Link to="/contact" className="events-text-link">
                  Ask about this activity <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="events-disclaimer">
          These are illustrative activity themes, not a confirmed schedule of
          NCIM events. Specific activities should be verified with the NCIM
          team before publication.
        </p>
      </section>

      <section className="events-approach-section">
        <div className="events-approach-heading">
          <p className="events-section-label">Our approach</p>
          <h2>
            Every activity should
            <br />
            <em>mean something.</em>
          </h2>
        </div>

        <div className="events-principles">
          {eventPrinciples.map((principle) => (
            <article className="events-principle" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="events-stories-section">
        <div className="events-stories-image">
          <img
            src="/media/events/community-moments.jpg"
            alt="Community members sharing a moment together"
            loading="lazy"
          />
        </div>
        <div className="events-stories-copy">
          <p className="events-section-label">The story continues</p>
          <h2>See the people behind the work.</h2>
          <p>
            Events are only part of the picture. Discover the stories,
            experiences and progress that help explain why community work
            matters.
          </p>
          <Link className="events-button events-button-dark" to="/stories">
            Explore stories & impact
          </Link>
        </div>
      </section>

      <section className="events-contact-strip">
        <div>
          <p className="events-section-label">Get in touch</p>
          <h2>Want to learn more or take part?</h2>
          <p>Contact NCIM to ask about activities, partnerships or participation.</p>
        </div>
        <Link className="events-button events-button-gold" to="/contact">
          Talk to our team <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
