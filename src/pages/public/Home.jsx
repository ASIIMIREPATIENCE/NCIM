
import { Link } from "react-router-dom";

const programmes = [
  {
    number: "01",
    title: "Early Childhood Development",
    short: "ECD",
    image: "/media/programmes/early-childhood.jpg",
    description:
      "Supporting children's early learning, development, curiosity and preparation for future education.",
    link: "/programmes",
  },
  {
    number: "02",
    title: "Child Sponsorship",
    short: "Education & Care",
    image: "/media/programmes/child-sponsorship.jpg",
    description:
      "Helping create opportunities for children through educational support and community involvement.",
    link: "/programmes",
  },
  {
    number: "03",
    title: "Women Empowerment",
    short: "Skills & Opportunity",
    image: "/media/programmes/women-empowerment.jpg",
    description:
      "Promoting opportunities for women to develop skills, confidence and greater economic participation.",
    link: "/programmes",
  },
  {
    number: "04",
    title: "Tuesday Fellowship Series",
    short: "Learning Together",
    image: "/media/programmes/tuesday-fellowship.jpg",
    description:
      "A space for shared learning, fellowship, discussion and community connection.",
    link: "/programmes",
  },
];

const activities = [
  {
    title: "Brain Quiz",
    text: "Educational activities that encourage learning, knowledge and healthy competition.",
    icon: "✦",
  },
  {
    title: "Music, Dance & Drama",
    text: "Creative expression, cultural participation and opportunities to develop talent.",
    icon: "♫",
  },
  {
    title: "Debates & Sports",
    text: "Activities that encourage teamwork, communication, confidence and participation.",
    icon: "◎",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="hero-content">
          <span className="eyebrow">
            COMMUNITY • OPPORTUNITY • GROWTH
          </span>

          <h1>
            Building Hope.
            <br />
            <span>Changing Futures.</span>
          </h1>

          <p>
            Every child deserves an opportunity to learn, every woman
            deserves a chance to thrive, and every community deserves
            opportunities to grow.
          </p>

          <div className="hero-actions">
            <Link to="/programmes" className="button button-gold">
              Explore Our Programmes
            </Link>
            <Link to="/get-involved" className="button button-outline">
              Get Involved
            </Link>
          </div>

          <div className="hero-note">
            Working towards stronger communities and brighter possibilities.
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/media/hero/ugandan-children.png"
            alt="Children in Uganda participating in a learning environment"
          />

          <div className="hero-image-caption">
            <span className="caption-mark">✦</span>
            <div>
              <strong>Hope starts with opportunity.</strong>
              <p>Discover the work and programmes of NCIM.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-intro section-padding">
        <div className="section-heading">
          <span className="eyebrow">GET TO KNOW US</span>
          <h2>Creating opportunities that matter.</h2>
        </div>

        <div className="intro-content">
          <p>
            NCIM's website brings together information about its programmes,
            activities and opportunities for community involvement. Explore
            the work focused on children, women and community development.
          </p>
          <p>
            Learn about the programmes, discover activities, read stories
            and find ways to contribute. Our commitment is to share
            information clearly and make it easier for people to connect
            with the organisation.
          </p>
          <Link to="/about" className="text-link">
            Learn About NCIM <span>→</span>
          </Link>
        </div>
      </section>

      <section className="programmes-section section-padding">
        <div className="section-topline">
          <div className="section-heading">
            <span className="eyebrow">OUR AREAS OF WORK</span>
            <h2>Programmes with purpose.</h2>
            <p>
              Explore the areas through which NCIM seeks to support
              learning, opportunity and community participation.
            </p>
          </div>

          <Link to="/programmes" className="text-link">
            View All Programmes <span>→</span>
          </Link>
        </div>

        <div className="programme-grid">
          {programmes.map((programme) => (
            <article className="programme-card" key={programme.number}>
              <div className="programme-image">
                <img
                  src={programme.image}
                  alt={programme.title}
                  loading="lazy"
                />
                <span className="programme-number">
                  {programme.number}
                </span>
              </div>

              <div className="programme-body">
                <span className="programme-category">
                  {programme.short}
                </span>
                <h3>{programme.title}</h3>
                <p>{programme.description}</p>
                <Link to={programme.link} className="text-link">
                  Explore Programme <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-purpose">
        <div className="purpose-image">
          <img
            src="/media/stories/community-learning.jpg"
            alt="Community members participating in a learning activity in Uganda"
            loading="lazy"
          />
        </div>

        <div className="purpose-content">
          <span className="eyebrow">WHY THIS WORK MATTERS</span>
          <h2>Stronger communities begin with people.</h2>
          <p>
            Education, practical opportunities, creativity and
            participation can help individuals and communities work
            towards a stronger future.
          </p>
          <p>
            NCIM's programmes provide a starting point for learning about
            the organisation's areas of work and finding ways to participate.
          </p>
          <Link to="/about" className="button button-gold">
            Discover Our Mission
          </Link>
        </div>
      </section>

      <section className="activities-section section-padding">
        <div className="section-topline">
          <div className="section-heading">
            <span className="eyebrow">BEYOND THE CLASSROOM</span>
            <h2>Learning, talent and community.</h2>
            <p>
              Educational and community activities can create space
              for participation, creativity and shared experiences.
            </p>
          </div>

          <Link to="/events" className="text-link">
            Explore Activities <span>→</span>
          </Link>
        </div>

        <div className="activity-feature-image">
          <img
            src="/media/events/cultural-performance.jpg"
            alt="A Ugandan cultural performance"
            loading="lazy"
          />
          <div className="activity-feature-caption">
            Celebrating learning, culture and creativity
          </div>
        </div>

        <div className="activity-grid">
          {activities.map((activity) => (
            <article className="activity-card" key={activity.title}>
              <span className="activity-icon">{activity.icon}</span>
              <h3>{activity.title}</h3>
              <p>{activity.text}</p>
              <Link to="/events" className="text-link">
                Explore Events <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="stories-section section-padding">
        <div className="stories-copy">
          <span className="eyebrow">STORIES & IMPACT</span>
          <h2>Every journey has a story.</h2>
          <p>
            Stories help us understand experiences, challenges, progress
            and the people behind community programmes. Visit our stories
            section for updates and approved accounts of NCIM's work.
          </p>
          <Link to="/stories" className="button button-dark">
            Read Our Stories
          </Link>
        </div>

        <div className="stories-image">
          <img
            src="/media/stories/ugandan-community.jpg"
            alt="Members of a Ugandan community"
            loading="lazy"
          />
        </div>
      </section>

      <section className="involve-section">
        <div>
          <span className="eyebrow">BE PART OF THE JOURNEY</span>
          <h2>Help create possibilities.</h2>
          <p>
            Explore ways to contribute your time, skills, resources
            or partnership to NCIM's work.
          </p>
        </div>

        <div className="involve-actions">
          <Link to="/get-involved" className="button button-light">
            Get Involved
          </Link>
          <Link to="/donate" className="button button-gold">
            Support Our Work
          </Link>
        </div>
      </section>
    </div>
  );
}
