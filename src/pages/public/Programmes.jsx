
import { Link } from "react-router-dom";
import "./Events.css";

const activities = [
  {
    number: "01",
    category: "Education & learning",
    title: "Brain Quiz",
    description:
      "Brain Quiz activities create opportunities for learners to test their knowledge, think critically and learn through friendly academic competition. They can complement NCIM's focus on children's learning and development.",
    image: "/media/events/community-learning.jpg",
    alt: "Young people learning and participating together",
    connection: "Early Childhood Development",
  },
  {
    number: "02",
    category: "Arts & expression",
    title: "Music, Dance and Drama",
    description:
      "Music, Dance and Drama (MDD) gives children and young people a way to express ideas, share their talents and participate in group performances. It can also provide a platform for communicating messages that matter to communities.",
    image: "/media/events/community-gathering.jpg",
    alt: "A group gathered for a shared community experience",
    connection: "Children & community participation",
  },
  {
    number: "03",
    category: "Ideas & communication",
    title: "Debates and educational competitions",
    description:
      "Debates and educational competitions encourage participants to research, explain their ideas, listen to others and develop confidence in speaking. These activities put learning into practice beyond the classroom.",
    image: "/media/events/community-outreach.jpg",
    alt: "People participating in a group learning activity",
    connection: "Learning & personal development",
  },
  {
    number: "04",
    category: "Sport & teamwork",
    title: "Sports days",
    description:
      "Sports activities bring participants together through teamwork, participation and friendly competition. They can create opportunities for children and young people to build relationships and enjoy positive shared experiences.",
    image: "/media/events/youth-families.jpg",
    alt: "Young people spending time together in a group",
    connection: "Children & community engagement",
  },
  {
    number: "05",
    category: "Faith & fellowship",
    title: "Tuesday Fellowship Series",
    description:
      "The Tuesday Fellowship Series is one of the programme areas identified for NCIM. This section can share its purpose, themes, participation details and highlights once the organisation's official information is confirmed.",
    image: "/media/events/community-moments.jpg",
    alt: "Community members gathered together",
    connection: "Tuesday Fellowship Series",
  },
];

export default function Events() {
  return (
    <main className="events-page">
      {/* HERO */}
      <section className="events-masthead">
        <div className="events-masthead-copy">
          <p className="events-eyebrow">NCIM · Events & activities</p>

          <h1>
            Learning.
            <span> Expression.</span>
            Community.
          </h1>

          <p className="events-lead">
            From academic competitions to creative expression, sport and
            fellowship, activities can bring people together around learning,
            participation and shared experiences. Explore the activities
            connected to NCIM's work with children, families and communities.
          </p>

          <div className="events-masthead-actions">
            <Link className="events-button events-button-gold" to="/contact">
              Enquire about activities
            </Link>

            <Link className="events-text-link" to="/programmes">
              Explore our programmes <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="events-masthead-visual">
          <img
            src="/media/events/community-gathering.jpg"
            alt="People coming together for a shared activity"
          />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="events-introduction">
        <p className="events-section-label">Why activities matter</p>

        <div className="events-introduction-grid">
          <h2>
            Every activity
            <br />
            creates an opportunity.
          </h2>

          <div>
            <p>
              Learning does not happen only through formal lessons. Quizzes,
              performances, debates and sports can help participants practise
              skills, discover their abilities and build confidence.
            </p>

            <p>
              For NCIM, events and activities should connect meaningfully to
              its wider work supporting children, strengthening families and
              communities, and empowering women.
            </p>
          </div>
        </div>
      </section>

      {/* ACTIVITY DIRECTORY */}
      <section className="events-activities-section" id="activities">
        <div className="events-activities-heading">
          <div>
            <p className="events-section-label">Explore the activities</p>
            <h2>Where participation comes to life.</h2>
          </div>

          <p>
            Discover the different activity areas discussed for NCIM and how
            they can contribute to learning, expression and community life.
          </p>
        </div>

        <div className="events-activity-list">
          {activities.map((activity) => (
            <article
              className="events-activity"
              key={activity.number}
              id={`activity-${activity.number}`}
            >
              <div className="events-activity-image">
                <img
                  src={activity.image}
                  alt={activity.alt}
                  loading="lazy"
                />
                <span>{activity.number}</span>
              </div>

              <div className="events-activity-copy">
                <p className="events-activity-category">
                  {activity.category}
                </p>

                <h3>{activity.title}</h3>

                <p>{activity.description}</p>

                <div className="events-activity-connection">
                  <span>Related area</span>
                  <strong>{activity.connection}</strong>
                </div>

                <Link to="/contact" className="events-text-link">
                  Enquire with NCIM <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="events-disclaimer">
          Activity descriptions explain their intended value. Confirm the
          current delivery, schedule and participation arrangements with NCIM.
        </p>
      </section>

      {/* PROGRAMME CONNECTIONS */}
      <section className="events-programme-section">
        <div className="events-programme-heading">
          <p className="events-section-label">Connected to our wider work</p>
          <h2>Activities are part of a bigger picture.</h2>
          <p>
            Events make more sense when visitors can connect them to the
            programmes and people at the heart of NCIM.
          </p>
        </div>

        <div className="events-programme-links">
          <Link to="/programmes" className="events-programme-link">
            <span>01</span>
            <div>
              <h3>Early Childhood Development</h3>
              <p>Explore NCIM's early childhood programme area.</p>
            </div>
            <span className="events-programme-arrow">↗</span>
          </Link>

          <Link to="/programmes" className="events-programme-link">
            <span>02</span>
            <div>
              <h3>Child Sponsorship</h3>
              <p>Learn about the child sponsorship programme area.</p>
            </div>
            <span className="events-programme-arrow">↗</span>
          </Link>

          <Link to="/programmes" className="events-programme-link">
            <span>03</span>
            <div>
              <h3>Women Empowerment</h3>
              <p>Discover the programme area focused on women.</p>
            </div>
            <span className="events-programme-arrow">↗</span>
          </Link>

          <Link to="/programmes" className="events-programme-link">
            <span>04</span>
            <div>
              <h3>Tuesday Fellowship Series</h3>
              <p>Explore this identified NCIM programme area.</p>
            </div>
            <span className="events-programme-arrow">↗</span>
          </Link>
        </div>
      </section>

      {/* EVENT UPDATES */}
      <section className="events-updates-section">
        <div>
          <p className="events-section-label">Event updates</p>
          <h2>Stay connected with NCIM.</h2>
          <p>
            Contact the NCIM team for information about planned activities,
            confirmed dates, venues and opportunities to participate.
          </p>
        </div>

        <Link className="events-button events-button-dark" to="/contact">
          Contact NCIM <span aria-hidden="true">↗</span>
        </Link>
      </section>

      {/* STORIES */}
      <section className="events-stories-section">
        <div className="events-stories-image">
          <img
            src="/media/events/community-moments.jpg"
            alt="People sharing a community experience"
            loading="lazy"
          />
        </div>

        <div className="events-stories-copy">
          <p className="events-section-label">Beyond the event</p>
          <h2>Every experience has a story.</h2>
          <p>
            Discover the experiences, progress and people behind NCIM's work
            through stories and impact updates.
          </p>

          <Link className="events-button events-button-dark" to="/stories">
            Stories & impact <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
