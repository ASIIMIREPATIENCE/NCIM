import { Link } from "react-router-dom";
import "./About.css";

const values = [
  {
    number: "01",
    title: "Dignity",
    description:
      "Recognising the worth, rights and potential of every person.",
  },
  {
    number: "02",
    title: "Opportunity",
    description:
      "Encouraging learning, skills development and meaningful participation.",
  },
  {
    number: "03",
    title: "Community",
    description:
      "Building connections through collaboration and shared responsibility.",
  },
  {
    number: "04",
    title: "Accountability",
    description:
      "Promoting responsible leadership, transparency and trust.",
  },
];

const boardMembers = [
  {
    id: "board-1",
    name: "Board Chairperson",
    role: "Board Chairperson",
    initials: "BC",
    bio: "Add the approved biography, experience and governance responsibilities of the Board Chairperson.",
    placeholder: true,
  },
  {
    id: "board-2",
    name: "Board Member",
    role: "Vice Chairperson",
    initials: "BM",
    bio: "Add the verified biography and responsibilities of this board member.",
    placeholder: true,
  },
  {
    id: "board-3",
    name: "Board Member",
    role: "Board Secretary",
    initials: "BM",
    bio: "Add the verified biography and governance responsibilities of this board member.",
    placeholder: true,
  },
];

const staffMembers = [
  {
    id: "staff-1",
    name: "Aribariho Isaac",
    role: "Chief Executive Officer",
    image: "/media/team/aribariho-isaac.jpg",
    bio: "Leads NCIM's overall direction and organisational priorities. Add his approved professional biography and experience here.",
    placeholder: false,
  },
  {
    id: "staff-2",
    name: "Staff Member",
    role: "Programmes Manager",
    initials: "PM",
    bio: "Add the staff member's verified biography, programme responsibilities and relevant experience.",
    placeholder: true,
  },
  {
    id: "staff-3",
    name: "Staff Member",
    role: "Community Engagement Officer",
    initials: "CE",
    bio: "Add the staff member's verified biography and community engagement responsibilities.",
    placeholder: true,
  },
];

function LeaderCard({ leader }) {
  return (
    <article className="about-leader-card">
      <div className="about-leader-photo">
        {leader.image ? (
          <img
            src={leader.image}
            alt={leader.name}
            loading="lazy"
          />
        ) : (
          <div
            className="about-leader-initials"
            aria-label="Portrait to be added"
          >
            <span>{leader.initials}</span>
            <small>PROFILE PHOTO</small>
          </div>
        )}
        {leader.placeholder && (
          <span className="about-profile-badge">Prototype profile</span>
        )}
      </div>

      <div className="about-leader-details">
        <span className="about-leader-role">{leader.role}</span>
        <h3>{leader.name}</h3>
        <p>{leader.bio}</p>
        {leader.placeholder && (
          <span className="about-profile-status">
            Official details to be added
          </span>
        )}
      </div>
    </article>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <section className="about-banner">
        <div className="about-banner-content">
          <span className="eyebrow">DISCOVER NCIM</span>
          <h1>
            A purpose rooted in people.
            <span>A future built together.</span>
          </h1>
          <p>
            Get to know the organisation, the principles behind its work
            and the people who guide its direction.
          </p>
          <div className="about-banner-actions">
            <Link to="/programmes" className="button button-gold">
              Discover Our Programmes
            </Link>
            <a href="#our-story" className="about-text-link">
              Read Our Story <span>↓</span>
            </a>
          </div>
        </div>

        <div className="about-banner-image">
          <img
            src="/media/children/ugandan-children.png"
            alt="Smiling schoolchildren in a Ugandan school setting"
          />
          <div className="about-image-label">
            <span className="about-image-dot" />
            People. Purpose. Possibility.
          </div>
        </div>
      </section>

      <section className="about-story section-padding" id="our-story">
        <div className="about-section-label">
          <span className="eyebrow">01 / OUR STORY</span>
          <span className="about-section-number">01</span>
        </div>

        <div className="about-story-content">
          <h2>Every meaningful journey begins with a purpose.</h2>
          <p>
            NCIM's work focuses on children, women and community
            development. This section introduces the organisation,
            its background and the purpose guiding its work.
          </p>
          <p>
            NCIM's official founding story, establishment date, location
            and milestones should be included here using verified
            organisational information.
          </p>
          <Link to="/stories" className="about-inline-link">
            Explore Stories & Impact <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="about-purpose">
        <div className="about-purpose-intro">
          <span className="eyebrow">02 / OUR PURPOSE</span>
          <h2>What guides us forward.</h2>
          <p>
            A clear vision and mission explain the future an organisation
            seeks to help create and the purpose behind its work.
          </p>
        </div>

        <div className="about-purpose-panels">
          <article className="about-purpose-panel">
            <span className="about-panel-number">A / 01</span>
            <div className="about-panel-icon">↗</div>
            <h3>Our Vision</h3>
            <p>
              Insert NCIM's officially approved vision statement here.
              Describe the future the organisation aspires to help create.
            </p>
          </article>

          <article className="about-purpose-panel about-purpose-panel-dark">
            <span className="about-panel-number">B / 02</span>
            <div className="about-panel-icon">✳</div>
            <h3>Our Mission</h3>
            <p>
              Insert NCIM's officially approved mission statement here.
              Explain the organisation's purpose and how it works towards
              its vision.
            </p>
          </article>
        </div>
      </section>

      <section className="about-approach section-padding">
        <div className="about-approach-image">
          <img
            src="/media/stories/community-learning.jpg"
            alt="Community members participating in a learning activity"
            loading="lazy"
          />
          <div className="about-approach-image-caption">
            Progress begins with people working together.
          </div>
        </div>

        <div className="about-approach-content">
          <span className="eyebrow">03 / OUR APPROACH</span>
          <h2>Lasting progress starts with participation.</h2>
          <p>
            Learning, practical opportunities and community involvement
            can help people develop their potential and work towards
            stronger futures.
          </p>
          <p>
            Use this section to explain NCIM's actual approach, the
            communities it serves and how its programmes respond to
            identified needs.
          </p>
          <Link to="/programmes" className="about-inline-link">
            See Our Areas of Work <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="about-values section-padding">
        <div className="about-values-heading">
          <span className="eyebrow">04 / OUR VALUES</span>
          <h2>The principles behind the purpose.</h2>
          <p>
            These proposed values provide a starting point for the design.
            Confirm or replace them with NCIM's official organisational values.
          </p>
        </div>

        <div className="about-values-list">
          {values.map((value) => (
            <article className="about-value-row" key={value.number}>
              <span className="about-value-number">{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-leadership section-padding" id="leadership">
        <div className="about-leadership-heading">
          <div>
            <span className="eyebrow">05 / LEADERSHIP</span>
            <h2>The people behind the purpose.</h2>
          </div>
          <p>
            Meet the people represented in this prototype across
            governance and day-to-day organisational leadership.
          </p>
        </div>

        <div className="about-leadership-group">
          <div className="about-group-heading">
            <span className="about-group-index">01</span>
            <div>
              <h3>Board of Directors</h3>
              <p>Governance, oversight and strategic direction.</p>
            </div>
          </div>

          <div className="about-leaders-grid">
            {boardMembers.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
        </div>

        <div className="about-leadership-group">
          <div className="about-group-heading">
            <span className="about-group-index">02</span>
            <div>
              <h3>Management & Staff</h3>
              <p>Organisational leadership, programme coordination and community engagement.</p>
            </div>
          </div>

          <div className="about-leaders-grid">
            {staffMembers.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
        </div>

        <div className="about-leadership-disclaimer">
          <strong>Prototype information</strong>
          <p>
            Aribariho Isaac's profile uses the name and CEO role provided
            for this website. The other five profiles are placeholders,
            not confirmed NCIM leaders. Replace placeholder names, titles,
            portraits and biographies with verified information before
            publishing.
          </p>
        </div>
      </section>

      <section className="about-accountability section-padding">
        <div>
          <span className="eyebrow">06 / TRUST & RESPONSIBILITY</span>
          <h2>Leadership means being accountable.</h2>
          <p>
            Add NCIM's verified governance arrangements, safeguarding
            commitments, reporting practices and accountability information
            here.
          </p>
        </div>
        <Link to="/contact" className="button button-gold">
          Contact NCIM
        </Link>
      </section>

      <section className="about-closing">
        <span className="eyebrow">CONTINUE THE JOURNEY</span>
        <h2>Learn about the work. Find your way to contribute.</h2>
        <p>
          Explore NCIM's programme areas or discover opportunities to
          support its work.
        </p>
        <div className="about-closing-actions">
          <Link to="/programmes" className="button button-light">
            Our Programmes
          </Link>
          <Link to="/get-involved" className="button button-gold">
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
}
