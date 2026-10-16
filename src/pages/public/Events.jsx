
import { Link } from "react-router-dom";
import "./Events.css";

const events = [
  {
    number: "01",
    category: "Academic learning",
    title: "Brain Quiz",
    image: "/media/events/community-learning.jpg",
    alt: "Participants gathered for a learning activity",
    introduction:
      "Brain Quiz brings learning into an interactive and competitive setting. Participants respond to questions, draw on what they have studied and challenge themselves to think carefully under pressure.",
    whatHappens: [
      "Participants prepare around the subjects or topics selected for the competition.",
      "Teams or individual contestants answer questions according to the competition format.",
      "Questions, responses and results create opportunities to recognise knowledge and learn from the experience.",
    ],
    participants:
      "Learners, contestants, teams, educators and organisers, depending on the format of each competition.",
    whyItMatters:
      "Brain Quiz can encourage curiosity, revision, critical thinking, teamwork and confidence. It makes learning participatory and gives learners an opportunity to demonstrate what they know.",
    programme:
      "Its connection to NCIM's Early Childhood Development or Child Sponsorship work should be specified according to the learners and activities actually involved.",
  },
  {
    number: "02",
    category: "Arts and creative expression",
    title: "Music, Dance and Drama (MDD)",
    image: "/media/events/community-gathering.jpg",
    alt: "A group gathered for a shared activity",
    introduction:
      "Music, Dance and Drama gives participants a platform to express themselves through performance. Music, movement, storytelling and dramatic presentation can communicate ideas and create shared experiences for performers and audiences.",
    whatHappens: [
      "Participants develop and practise performances appropriate to the occasion.",
      "Music, dance and drama can be presented individually or as group performances.",
      "An MDD event can bring performers and audiences together to appreciate creativity and expression.",
    ],
    participants:
      "Performers, children and young people where included in the event, supporting adults, organisers and audiences.",
    whyItMatters:
      "MDD can encourage creativity, confidence, cooperation, communication and appreciation of different talents. It also creates space for participants to share messages and experiences through the arts.",
    programme:
      "Where NCIM organises MDD as part of its child-focused work, this connection should be explained using the organisation's confirmed activities.",
  },
  {
    number: "03",
    category: "Public speaking and critical thinking",
    title: "Debates",
    image: "/media/events/community-outreach.jpg",
    alt: "Participants taking part in a group discussion",
    introduction:
      "Debates give participants a structured way to examine a topic, build an argument and communicate a position. They require more than speaking confidently: participants must also listen, reason and respond to other viewpoints.",
    whatHappens: [
      "A motion or topic establishes the issue being discussed.",
      "Participants research the subject and prepare arguments supporting their assigned positions.",
      "Speakers present their points, respond to opposing arguments and take part in an organised exchange.",
      "Feedback or judging can help participants reflect on their preparation and presentation.",
    ],
    participants:
      "Debaters, teams, moderators, judges, organisers and audiences, depending on the event format.",
    whyItMatters:
      "Debates can develop public speaking, research, reasoning, respectful disagreement and confidence. They also help participants practise presenting ideas clearly and considering different perspectives.",
    programme:
      "The relevant NCIM programme connection depends on who takes part and how the debate is organised.",
  },
  {
    number: "04",
    category: "Sport and teamwork",
    title: "Sports Days",
    image: "/media/events/youth-families.jpg",
    alt: "Young people spending time together",
    introduction:
      "Sports days bring people together through games, physical activities and friendly competition. They create an opportunity to participate, work towards shared goals and enjoy activities outside ordinary routines.",
    whatHappens: [
      "Organisers identify suitable games, activities and participation arrangements.",
      "Participants take part individually or in teams according to the programme.",
      "The event provides opportunities for cooperation, encouragement and positive competition.",
      "Recognition and reflection can celebrate participation as well as achievement.",
    ],
    participants:
      "Children, young people or other community participants, together with activity leaders, organisers and supporters as appropriate.",
    whyItMatters:
      "Sports days can encourage teamwork, discipline, cooperation, confidence and a sense of belonging. The activities should be inclusive and appropriate to the people taking part.",
    programme:
      "Any connection to NCIM's programmes should reflect the actual groups participating in the sports activities.",
  },
  {
    number: "05",
    category: "Community participation",
    title: "Community Activities",
    image: "/media/events/community-moments.jpg",
    alt: "People sharing a community experience",
    introduction:
      "Community activities create opportunities for people to come together, participate in shared experiences and engage with matters affecting their community. The specific purpose depends on the activity NCIM organises.",
    whatHappens: [
      "The activity identifies a purpose, intended participants and a suitable approach.",
      "Community members can participate, share perspectives and engage with the activity.",
      "Organisers can document key discussions, participation and agreed follow-up where applicable.",
    ],
    participants:
      "Community members, families, children, women, local partners and other participants relevant to the particular activity.",
    whyItMatters:
      "Meaningful community participation can strengthen relationships, create opportunities to listen to local perspectives and help activities respond to people's needs.",
    programme:
      "Community activities may connect with different NCIM programme areas. The page should identify the relevant programme for each confirmed activity rather than assume every event belongs to every programme.",
  },
  {
    number: "06",
    category: "Faith, learning and fellowship",
    title: "Bible Study",
    image: "/media/events/community-learning.jpg",
    alt: "Participants gathered for a shared learning session",
    introduction:
      "Bible study creates space for participants to read scripture, explore its meaning, ask questions and reflect together. It can bring together individual study and group discussion in a setting centred on faith and learning.",
    whatHappens: [
      "A passage or theme provides a focus for the session.",
      "Participants read and discuss scripture, ask questions and share reflections.",
      "The group considers the meaning of the passage and its relevance to everyday life.",
      "Sessions can provide time for continued learning, reflection and fellowship.",
    ],
    participants:
      "Bible study participants, the person facilitating the session and others involved in the fellowship, according to NCIM's arrangements.",
    whyItMatters:
      "Bible study can support scripture knowledge, reflection, discussion and shared fellowship. The content and approach should reflect the organisation's actual study format.",
    programme:
      "Bible study belongs in the context of NCIM's Tuesday Fellowship Series, whose schedule, themes and participation arrangements should be confirmed by the organisation.",
  },
];

const eventPrinciples = [
  {
    number: "01",
    title: "Learning through participation",
    description:
      "Brain Quiz and debates give participants opportunities to apply knowledge, develop ideas and communicate what they have learned.",
  },
  {
    number: "02",
    title: "Creativity and teamwork",
    description:
      "MDD and sports days create opportunities to express talent, cooperate with others and participate in shared activities.",
  },
  {
    number: "03",
    title: "Community and fellowship",
    description:
      "Community activities and Bible study provide different settings for people to meet, reflect, exchange ideas and learn together.",
  },
];

export default function Events() {
  return (
    <main className="events-page">
      <section className="events-hero">
        <div className="events-hero-copy">
          <p className="events-eyebrow">NCIM / Events & Activities</p>
          <h1>
            Where people
            <span> learn, express and connect.</span>
          </h1>
          <p>
            From Brain Quiz and MDD to debates, sports days, community
            activities and Bible study, NCIM's events provide different ways
            for people to participate, share experiences and learn together.
          </p>
          <div className="events-hero-links">
            <a href="#our-events" className="events-button events-button-gold">
              Explore our events
            </a>
            <a href="#upcoming-events" className="events-hero-text-link">
              Upcoming events ↓
            </a>
          </div>
        </div>

        <div className="events-hero-image">
          <img
            src="/media/events/community-gathering.jpg"
            alt="People coming together for a shared activity"
          />
          <span>Learning · Participation · Fellowship</span>
        </div>
      </section>

      <section className="events-overview">
        <p className="events-kicker">The role of events</p>
        <div className="events-overview-grid">
          <h2>
            More than a gathering.
            <span> An opportunity to participate.</span>
          </h2>
          <div>
            <p>
              Events bring NCIM's work to life through activities that
              encourage learning, creative expression, teamwork, community
              participation and faith. Each event has its own purpose and
              offers a different experience to the people involved.
            </p>
            <p>
              This page explains the activities, the people who may take part,
              what participants can expect and how each activity can
              contribute to learning and community life. Confirmed event
              information will help visitors move from learning about an
              activity to finding out how to participate.
            </p>
          </div>
        </div>

        <div className="events-overview-stats">
          <div>
            <strong>01</strong>
            <span>Learning</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Creativity</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Teamwork</span>
          </div>
          <div>
            <strong>04</strong>
            <span>Fellowship</span>
          </div>
        </div>
      </section>

      <section className="events-directory" id="our-events">
        <div className="events-section-intro">
          <div>
            <p className="events-kicker">Explore the activities</p>
            <h2>What our events are about</h2>
          </div>
          <p>
            Explore the purpose, format, participants and value of each
            activity. Expand any section to read the full description.
          </p>
        </div>

        <nav className="events-quick-nav" aria-label="Event categories">
          {events.map((event) => (
            <a href={`#event-${event.number}`} key={event.number}>
              <span>{event.number}</span>
              {event.title}
            </a>
          ))}
        </nav>

        <div className="events-detail-list">
          {events.map((event, index) => (
            <article
              className={`events-detail ${index % 2 ? "events-detail-reverse" : ""}`}
              id={`event-${event.number}`}
              key={event.number}
            >
              <div className="events-detail-image">
                <img src={event.image} alt={event.alt} loading="lazy" />
                <span className="events-image-number">{event.number}</span>
              </div>

              <div className="events-detail-copy">
                <p className="events-category">{event.category}</p>
                <h3>{event.title}</h3>
                <p className="events-detail-intro">{event.introduction}</p>

                <details className="events-more">
                  <summary>What happens during this activity?</summary>
                  <ul>
                    {event.whatHappens.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>

                <details className="events-more">
                  <summary>Who participates?</summary>
                  <p>{event.participants}</p>
                </details>

                <details className="events-more">
                  <summary>Why is it important?</summary>
                  <p>{event.whyItMatters}</p>
                </details>

                <div className="events-programme-note">
                  <span>Connection to NCIM's work</span>
                  <p>{event.programme}</p>
                </div>

                <Link to="/contact" className="events-inline-link">
                  Enquire about this activity <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="events-content-note">
          These descriptions explain the activities and their potential value.
          NCIM's specific delivery methods, participating groups and programme
          links should be confirmed against the organisation's records.
        </p>
      </section>

      <section className="events-approach">
        <div className="events-approach-heading">
          <p className="events-kicker">The bigger picture</p>
          <h2>Different activities. Shared opportunities.</h2>
          <p>
            The value of an event is not only in what happens on the day, but
            also in the opportunities it creates for participants.
          </p>
        </div>

        <div className="events-approach-grid">
          {eventPrinciples.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <Link to="/programmes" className="events-inline-link">
          Explore NCIM's programmes <span>↗</span>
        </Link>
      </section>

      <section className="events-upcoming" id="upcoming-events">
        <div className="events-section-intro">
          <div>
            <p className="events-kicker">Plan your participation</p>
            <h2>Upcoming events</h2>
          </div>
          <p>
            Find out what is planned, when it takes place, where to go and how
            to participate.
          </p>
        </div>

        <div className="events-upcoming-panel">
          <div className="events-upcoming-symbol" aria-hidden="true">
            <span>CALENDAR</span>
            <strong>NCIM</strong>
          </div>
          <div className="events-upcoming-copy">
            <p className="events-category">Event announcements</p>
            <h3>Look out for confirmed dates and details.</h3>
            <p>
              Upcoming Brain Quiz competitions, MDD activities, debates,
              sports days, community activities and Bible study sessions can
              be listed here as NCIM confirms their dates and arrangements.
            </p>
            <p>
              Each published event should include its title, date, time,
              venue, intended participants, registration or entry
              requirements where applicable, and a contact for enquiries.
            </p>
            <Link to="/contact" className="events-button events-button-dark">
              Ask about upcoming events ↗
            </Link>
          </div>
        </div>

        <p className="events-content-note">
          No dates or venues are displayed here until they have been confirmed
          by NCIM.
        </p>
      </section>

      <section className="events-after">
        <div className="events-after-image">
          <img
            src="/media/events/community-moments.jpg"
            alt="People sharing a community experience"
            loading="lazy"
          />
        </div>
        <div className="events-after-copy">
          <p className="events-kicker">After the event</p>
          <h2>Experiences worth sharing.</h2>
          <p>
            Event highlights can help visitors understand what took place,
            who participated and what was learned. With verified photographs,
            summaries and reflections, this page can grow into a record of
            NCIM's activities over time.
          </p>
          <Link to="/stories" className="events-inline-link">
            Read Stories & Impact <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="events-contact">
        <div>
          <p className="events-kicker">Connect with NCIM</p>
          <h2>Would you like to participate or learn more?</h2>
          <p>
            Contact NCIM to enquire about activities, upcoming events,
            partnerships or ways to support the organisation's work.
          </p>
        </div>
        <Link to="/contact" className="events-button events-button-gold">
          Contact NCIM ↗
        </Link>
      </section>
    </main>
  );
}
