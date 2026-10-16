
import { Link } from "react-router-dom";
import "./Programmes.css";

const programmes = [
  {
    number: "01",
    category: "CHILD DEVELOPMENT",
    title: "Early Childhood Development",
    introduction:
      "The early years are an important stage in a child's growth. This programme area focuses on the conditions that help young children learn, develop and begin life with a strong foundation.",
    audience:
      "Young children, parents, caregivers and communities supporting early development.",
    focus: [
      "Early learning and developmental support",
      "Caregiver awareness and participation",
      "Safe, nurturing environments for children",
    ],
    image: "/media/programmes/early-childhood.jpg",
    alt: "Young children taking part in an early learning activity",
    imageNote: "Learning begins in the early years",
    linkText: "Enquire about early childhood development",
  },
  {
    number: "02",
    category: "CHILD WELLBEING",
    title: "Child Sponsorship",
    introduction:
      "Sponsorship can provide a way for supporters to contribute towards children's wellbeing and development. This programme section will explain NCIM's sponsorship model and how interested supporters can learn more.",
    audience:
      "Children and families eligible under NCIM's approved sponsorship arrangements, and prospective sponsors.",
    focus: [
      "Understanding sponsorship opportunities",
      "Learning about eligibility and the application process",
      "Responsible communication with prospective sponsors",
    ],
    image: "/media/programmes/child-sponsorship.jpg",
    alt: "A schoolchild working in an exercise book at a desk",
    imageNote: "Every child deserves opportunities to grow",
    linkText: "Ask about child sponsorship",
  },
  {
    number: "03",
    category: "WOMEN & COMMUNITIES",
    title: "Women Empowerment",
    introduction:
      "Women's participation can contribute to stronger families and communities. This programme area provides space to explain NCIM's work with women, the opportunities available and the activities that support their participation.",
    audience:
      "Women and community groups within NCIM's intended programme communities.",
    focus: [
      "Skills development and learning opportunities",
      "Participation in community initiatives",
      "Opportunities for collaboration and leadership",
    ],
    image: "/media/programmes/women-empowerment.jpg",
    alt: "Women participating in a practical community training activity",
    imageNote: "Supporting participation and potential",
    linkText: "Enquire about women empowerment",
  },
  {
    number: "04",
    category: "COMMUNITY FELLOWSHIP",
    title: "Tuesday Fellowship Series",
    introduction:
      "The Tuesday Fellowship Series is a distinct programme area that deserves its own identity. Visitors should be able to understand its purpose, who it welcomes, what takes place during sessions and how to find out about upcoming gatherings.",
    audience:
      "People interested in the fellowship and the community it brings together.",
    focus: [
      "Purpose and format of fellowship sessions",
      "Information about upcoming gatherings",
      "How interested participants can make contact",
    ],
    image: "/media/programmes/tuesday-fellowship.jpg",
    alt: "Community members gathered for a group discussion",
    imageNote: "Creating space for connection",
    linkText: "Ask about the Tuesday Fellowship",
  },
];

function ProgrammeFeature({ programme, index }) {
  return (
    <article
      className={`programme-feature ${
        index % 2 === 1 ? "programme-feature-reverse" : ""
      }`}
      id={`programme-${programme.number}`}
    >
      <div className="programme-feature-image">
        <img
          src={programme.image}
          alt={programme.alt}
          loading="lazy"
        />
        <span className="programme-image-number">
          {programme.number}
        </span>
        <p className="programme-image-note">{programme.imageNote}</p>
      </div>

      <div className="programme-feature-content">
        <span className="programme-category">
          {programme.category}
        </span>

        <h2>{programme.title}</h2>
        <p className="programme-introduction">
          {programme.introduction}
        </p>

        <div className="programme-audience">
          <span>WHO IT IS FOR</span>
          <p>{programme.audience}</p>
        </div>

        <h3>Areas to explore</h3>
        <ul className="programme-focus-list">
          {programme.focus.map((item) => (
            <li key={item}>
              <span aria-hidden="true">↗</span>
              {item}
            </li>
          ))}
        </ul>

        <Link to="/contact" className="programme-enquiry">
          {programme.linkText}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function Programmes() {
  return (
    <main className="programmes-page">
      <section className="programmes-masthead">
        <div className="programmes-masthead-top">
          <span>NCIM / OUR WORK</span>
          <span>PEOPLE · OPPORTUNITY · COMMUNITY</span>
        </div>

        <div className="programmes-masthead-main">
          <div>
            <span className="programmes-kicker">
              GET TO KNOW OUR PROGRAMMES
            </span>
            <h1>
              Where purpose
              <br />
              <span>becomes action.</span>
            </h1>
          </div>

          <div className="programmes-masthead-description">
            <p>
              Explore NCIM's programme areas, understand whom they
              are intended to serve, and discover how to ask questions
              or connect with the organisation.
            </p>
            <a href="#programme-directory">
              EXPLORE THE DIRECTORY <span>↓</span>
            </a>
          </div>
        </div>

        <div className="programmes-masthead-footer">
          <span>FOUR PROGRAMME AREAS</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <nav
        className="programme-directory"
        id="programme-directory"
        aria-label="Programme directory"
      >
        <span className="programme-directory-label">
          EXPLORE BY AREA
        </span>

        {programmes.map((programme) => (
          <a
            href={`#programme-${programme.number}`}
            key={programme.number}
          >
            <span>{programme.number}</span>
            {programme.title}
            <span aria-hidden="true">↘</span>
          </a>
        ))}
      </nav>

      <section className="programmes-editorial-intro">
        <span className="programmes-section-index">01 / THE BIG PICTURE</span>
        <div>
          <h2>Different needs. A shared commitment to people.</h2>
          <p>
            Each programme area has a different focus and audience.
            The information below is organised to help visitors understand
            the intended purpose of each area and find the right way to
            contact NCIM for more details.
          </p>
        </div>
      </section>

      <section className="programme-features" aria-label="NCIM programme areas">
        {programmes.map((programme, index) => (
          <ProgrammeFeature
            key={programme.number}
            programme={programme}
            index={index}
          />
        ))}
      </section>

      <section className="programmes-information">
        <div className="programmes-information-heading">
          <span className="programmes-section-index">
            02 / TAKING THE NEXT STEP
          </span>
          <h2>Interested in a programme?</h2>
          <p>
            Start a conversation with NCIM to find out which opportunities
            are available, who can participate and what steps may be
            required.
          </p>
        </div>

        <div className="programme-next-steps">
          <article>
            <span className="next-step-number">01</span>
            <h3>Make an enquiry</h3>
            <p>
              Tell the team which programme interests you and what
              information you would like to receive.
            </p>
          </article>

          <article>
            <span className="next-step-number">02</span>
            <h3>Understand the details</h3>
            <p>
              Ask about eligibility, availability, activities and
              any relevant participation requirements.
            </p>
          </article>

          <article>
            <span className="next-step-number">03</span>
            <h3>Find your way to contribute</h3>
            <p>
              Discuss appropriate ways to participate, collaborate
              or support NCIM's work.
            </p>
          </article>
        </div>

        <Link to="/contact" className="programmes-primary-link">
          Contact NCIM <span>↗</span>
        </Link>
      </section>

      <section className="programmes-story-link">
        <div>
          <span className="programmes-kicker">
            BEYOND THE PROGRAMME DESCRIPTION
          </span>
          <h2>Discover the people and experiences behind the work.</h2>
          <p>
            Read approved stories and updates to learn more about
            NCIM's activities and the experiences of the communities
            connected to its work.
          </p>
        </div>

        <Link to="/stories" className="programmes-story-button">
          Explore Stories & Impact <span>→</span>
        </Link>
      </section>
    </main>
  );
}
