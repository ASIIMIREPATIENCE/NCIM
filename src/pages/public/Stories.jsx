
import { Link } from "react-router-dom";
import "./Stories.css";

const stories = [
  {
    number: "01",
    category: "EARLY CHILDHOOD DEVELOPMENT",
    title: "Small steps, growing confidence",
    image: "/media/stories/community-learning.jpg",
    intro:
      "Amina is a fictional young learner who gradually becomes more comfortable participating in group activities. Through stories, songs and playful learning, she discovers new ways to communicate and explore.",
    lesson:
      "Patient encouragement and supportive learning environments can help children develop confidence at their own pace.",
  },
  {
    number: "02",
    category: "CHILD SPONSORSHIP",
    title: "Making room for learning",
    image: "/media/stories/ugandan-community.jpg",
    intro:
      "Daniel's fictional story explores the importance of educational support, family encouragement and opportunities for children to participate in learning.",
    lesson:
      "A child's educational journey involves the child, family, school and wider community.",
  },
  {
    number: "03",
    category: "WOMEN EMPOWERMENT",
    title: "Finding confidence in new opportunities",
    image: "/media/stories/ugandan-community.jpg",
    intro:
      "Grace is a fictional woman exploring opportunities to strengthen her skills, exchange ideas with others and contribute more confidently to her community.",
    lesson:
      "Empowerment includes access to opportunities, meaningful participation and respect for women's aspirations.",
  },
  {
    number: "04",
    category: "TUESDAY FELLOWSHIP SERIES",
    title: "Growing through reflection",
    image: "/media/stories/community-learning.jpg",
    intro:
      "This fictional account follows a participant reflecting on Bible study, fellowship and conversations about applying lessons to everyday life.",
    lesson:
      "Reflection and shared discussion can create opportunities for learning, listening and mutual encouragement.",
  },
];

const impactFigures = [
  {
    value: "120",
    title: "Children reached",
    description: "Illustrative programme reporting figure",
  },
  {
    value: "45",
    title: "Women participating",
    description: "Illustrative programme reporting figure",
  },
  {
    value: "12",
    title: "Learning sessions",
    description: "Illustrative programme reporting figure",
  },
];

function Stories() {
  return (
    <main className="stories-page">
      <section className="stories-hero">
        <div className="stories-hero-content">
          <span className="stories-eyebrow">STORIES &amp; IMPACT</span>
          <h1>Behind every programme is a human story.</h1>
          <p>
            Explore the experiences, aspirations and everyday challenges
            connected to childhood development, education, women's
            empowerment and fellowship.
          </p>

          <div className="stories-hero-actions">
            <a
              className="stories-button stories-button-gold"
              href="#programme-stories"
            >
              Explore stories
            </a>
            <Link
              className="stories-button stories-button-outline"
              to="/programmes"
            >
              Our programmes
            </Link>
          </div>
        </div>

        <div className="stories-hero-image">
          <img
            src="/media/stories/community-learning.jpg"
            alt="Community members sharing a learning experience"
          />
          <div className="stories-image-caption">
            <span>PEOPLE · OPPORTUNITY · GROWTH</span>
            <p>Every journey begins with an opportunity.</p>
          </div>
        </div>
      </section>

      <section className="stories-intro">
        <div>
          <span className="stories-eyebrow stories-eyebrow-dark">
            THE PEOPLE BEHIND THE WORK
          </span>
          <h2>Impact begins with understanding people's experiences.</h2>
        </div>
        <p>
          Development is about more than activities and services. It is also
          about the opportunities people encounter, the challenges they
          navigate and the possibilities they imagine for their future.
          These sample stories explore those themes through NCIM's four
          programme areas.
        </p>
      </section>

      <section className="stories-featured">
        <div className="stories-featured-image">
          <img
            src="/media/stories/ugandan-community.jpg"
            alt="Community members in a shared community setting"
            loading="lazy"
          />
        </div>

        <div className="stories-featured-copy">
          <span className="stories-tag">FEATURED STORY</span>
          <h2>Every child deserves the chance to learn and grow.</h2>
          <p>
            Imagine a child who begins a learning activity quietly, unsure
            whether to take part. With time, encouragement and opportunities
            to practise new skills, the child begins asking questions,
            contributing ideas and discovering what is possible.
          </p>
          <p>
            This fictional example reflects an important principle of
            child-focused development: children need supportive environments
            in which they can learn, participate and develop at their own pace.
          </p>
          <Link className="stories-text-link" to="/programmes">
            Discover our programmes <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="stories-programmes" id="programme-stories">
        <div className="stories-section-heading">
          <div>
            <span className="stories-eyebrow stories-eyebrow-dark">
              STORIES FROM OUR PROGRAMMES
            </span>
            <h2>Four areas of work. Different journeys.</h2>
          </div>
          <p>
            Each story explores a different aspect of community development,
            from early learning and educational support to women's
            opportunities and shared spiritual reflection.
          </p>
        </div>

        <div className="stories-programme-grid">
          {stories.map((story) => (
            <article className="stories-programme-card" key={story.number}>
              <div className="stories-card-image">
                <img src={story.image} alt="" loading="lazy" />
                <span>{story.number}</span>
              </div>

              <div className="stories-card-body">
                <span className="stories-card-category">
                  {story.category}
                </span>
                <h3>{story.title}</h3>
                <p>{story.intro}</p>

                <div className="stories-focus">
                  <strong>Key lesson</strong>
                  <p>{story.lesson}</p>
                </div>

                <Link className="stories-text-link" to="/programmes">
                  Explore programme <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stories-impact">
        <div className="stories-impact-heading">
          <span className="stories-eyebrow stories-eyebrow-dark">
            IMPACT AT A GLANCE
          </span>
          <h2>Making progress visible.</h2>
          <p>
            Sample figures demonstrate how NCIM could present programme
            reach and participation. They are mock data, not verified
            organisational results.
          </p>
        </div>

        <div className="stories-impact-grid">
          {impactFigures.map((figure) => (
            <article className="stories-impact-item" key={figure.title}>
              <span className="stories-impact-value">{figure.value}</span>
              <h3>{figure.title}</h3>
              <p>{figure.description}</p>
            </article>
          ))}
        </div>

        <p className="stories-impact-footnote">
          Illustrative data for the website prototype. Replace these figures
          with verified NCIM records before public launch.
        </p>
      </section>

      <section className="stories-sharing">
        <div>
          <span className="stories-eyebrow stories-eyebrow-dark">
            WHAT IMPACT MEANS
          </span>
          <h2>Progress is personal, practical and ongoing.</h2>
        </div>
        <p>
          Meaningful impact reporting considers what changed, what helped,
          what challenges remain and what can be learned. It recognises
          the strengths of families and communities and the value of
          continued cooperation.
        </p>
      </section>

      <section className="stories-cta">
        <div>
          <span className="stories-eyebrow">BE PART OF THE JOURNEY</span>
          <h2>Help create opportunities for brighter futures.</h2>
          <p>
            Explore NCIM's programmes, discover ways to participate or learn
            how your support could contribute to community development.
          </p>
        </div>

        <div className="stories-cta-actions">
          <Link
            className="stories-button stories-button-gold"
            to="/get-involved"
          >
            Get involved
          </Link>
          <Link
            className="stories-button stories-button-outline"
            to="/donate"
          >
            Support NCIM
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Stories;
