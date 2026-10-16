
import { Link } from "react-router-dom";
import "./Stories.css";

const stories = [
  {
    number: "01",
    category: "EARLY CHILDHOOD DEVELOPMENT",
    title: "Small steps, growing confidence",
    name: "Amina's story",
    image: "/media/programmes/early-childhood.jpg",
    alt: "Young children taking part in a learning activity",
    intro:
      "At first, Amina preferred to watch other children during group activities. With encouragement, playful learning and opportunities to participate, she gradually became more comfortable joining in.",
    body:
      "Her story illustrates why early childhood experiences matter. Through songs, stories, creative activities and interaction with others, young children can explore their surroundings and practise communication, cooperation and problem-solving.",
    lesson:
      "Children develop at different rates. Patient encouragement and supportive learning environments can help them participate with greater confidence.",
  },
  {
    number: "02",
    category: "CHILD SPONSORSHIP",
    title: "When support creates room to learn",
    name: "Daniel's story",
    image: "/media/programmes/child-sponsorship.jpg",
    alt: "A school-age child studying with an exercise book",
    intro:
      "Daniel is a fictional school-age learner whose family is working hard to support his education. His story explores how practical assistance, encouragement and a supportive environment can help children engage with learning.",
    body:
      "Educational journeys involve more than attending school. Children need encouragement, opportunities to learn and adults who take an interest in their progress. Support can also help families navigate some of the challenges associated with education.",
    lesson:
      "A child's educational journey is shaped by several people and circumstances. Sustainable support recognises the role of children, families, schools and their wider communities.",
  },
  {
    number: "03",
    category: "WOMEN EMPOWERMENT",
    title: "Finding confidence in new opportunities",
    name: "Grace's story",
    image: "/media/programmes/women-empowerment.jpg",
    alt: "Women working together during a group activity",
    intro:
      "Grace's fictional story follows a woman who wants to strengthen her skills, explore opportunities and contribute more confidently to decisions affecting her household and community.",
    body:
      "Learning opportunities, peer support and spaces where women can exchange ideas may help women recognise their strengths and consider new possibilities. Progress looks different for each person and often develops over time.",
    lesson:
      "Empowerment is not one achievement or a single event. It involves opportunity, participation, informed choices and respect for women's own goals.",
  },
  {
    number: "04",
    category: "TUESDAY FELLOWSHIP SERIES",
    title: "Growing through reflection and fellowship",
    name: "A fellowship reflection",
    image: "/media/programmes/tuesday-fellowship.jpg",
    alt: "People gathered for a discussion in a welcoming setting",
    intro:
      "This illustrative story follows a participant who joins a Bible study and fellowship session seeking time for reflection, learning and conversation with others.",
    body:
      "Through reading scripture, discussing questions and listening to different perspectives, participants can reflect on how their beliefs connect with everyday decisions, relationships and responsibilities.",
    lesson:
      "Meaningful fellowship creates room for listening, thoughtful discussion, mutual encouragement and continued reflection.",
  },
];

const impactExamples = [
  {
    value: "120",
    label: "Children reached",
    detail: "Illustrative sample for programme reporting",
  },
  {
    value: "45",
    label: "Women participating",
    detail: "Illustrative sample for programme reporting",
  },
  {
    value: "12",
    label: "Learning sessions",
    detail: "Illustrative sample for programme reporting",
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
            connected to childhood development, education, women's empowerment
            and fellowship. Every story offers another way to understand the
            people at the heart of community development.
          </p>
          <div className="stories-hero-actions">
            <a
              className="stories-button stories-button-gold"
              href="#featured-story"
            >
              Read our featured story
            </a>
            <Link
              className="stories-button stories-button-outline"
              to="/programmes"
            >
              Explore our programmes
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
          navigate, the relationships they build and the possibilities they
          imagine for their future. These sample stories explore those themes
          through NCIM's four programme areas.
        </p>
      </section>

      <section className="stories-featured" id="featured-story">
        <div className="stories-featured-image">
          <img
            src="/media/stories/community-outreach.jpg"
            alt="People participating in a community activity"
            loading="lazy"
          />
        </div>
        <div className="stories-featured-copy">
          <span className="stories-tag">FEATURED STORY</span>
          <h2>Every child deserves the chance to learn and grow.</h2>
          <p>
            Imagine a child who begins a learning activity quietly, unsure
            whether to take part. With time, encouragement and opportunities to
            practise new skills, that child begins contributing ideas, asking
            questions and discovering what is possible.
          </p>
          <p>
            This fictional example reflects an important principle behind
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
                <img src={story.image} alt={story.alt} loading="lazy" />
                <span>{story.number}</span>
              </div>

              <div className="stories-card-body">
                <span className="stories-card-category">
                  {story.category}
                </span>
                <h3>{story.title}</h3>
                <p>{story.intro}</p>

                <div className="stories-focus">
                  <strong>What this story explores</strong>
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
            Numbers can help communicate the reach of community work, while
            personal stories help explain what that work means. The figures
            below are illustrative mock data for the website prototype, not
            actual NCIM results.
          </p>
        </div>

        <div className="stories-impact-grid">
          {impactExamples.map((item) => (
            <article className="stories-impact-item" key={item.label}>
              <span className="stories-impact-value">{item.value}</span>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <p className="stories-impact-footnote">
          Sample figures for demonstration only. Replace with verified NCIM
          programme records before publishing the website publicly.
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
          A meaningful account of impact considers what changed, what helped,
          what challenges remain and what can be learned. It recognises that
          families and communities have their own strengths and that lasting
          progress often requires continued effort and cooperation.
        </p>
      </section>

      <section className="stories-cta">
        <div>
          <span className="stories-eyebrow">BE PART OF THE JOURNEY</span>
          <h2>Help create opportunities for brighter futures.</h2>
          <p>
            Discover the work behind these stories, explore ways to get
            involved or learn how your support can contribute to NCIM's
            programmes.
          </p>
        </div>

        <div className="stories-cta-actions">
          <Link className="stories-button stories-button-gold" to="/get-involved">
            Get involved
          </Link>
          <Link className="stories-button stories-button-outline" to="/donate">
            Support NCIM
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Stories;
