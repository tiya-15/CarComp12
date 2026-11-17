import { Link } from "react-router-dom";
import {
  FaCompass,
  FaGraduationCap,
  FaClipboardList,
  FaRobot,
  FaQuestionCircle,
  FaRoute,
  FaArrowRight,
} from "react-icons/fa";
import "./Explore.css";

const modules = [
  {
    title: "Career Explorer",
    description:
      "Explore 120+ career paths and discover your ideal profession.",
    icon: <FaCompass />,
    link: "/careers",
    button: "Explore Careers",
  },
  {
    title: "Course Explorer",
    description:
      "Browse undergraduate courses and future opportunities.",
    icon: <FaGraduationCap />,
    link: "/courses",
    button: "Explore Courses",
  },
  {
    title: "Entrance Exams",
    description:
      "Learn about eligibility, patterns and preparation roadmaps.",
    icon: <FaClipboardList />,
    link: "/exams",
    button: "Explore Exams",
  },
  {
    title: "Career Assistant",
    description:
      "Ask career-related questions and get instant guidance.",
    icon: <FaRobot />,
    link: "/assistant",
    button: "Open Assistant",
  },
  {
    title: "FAQ Assistant",
    description:
      "Find quick answers to commonly asked career questions.",
    icon: <FaQuestionCircle />,
    link: "/faq",
    button: "Browse FAQs",
  },
  {
    title: "Career Navigator",
    description:
      "Take an assessment to discover careers that match your interests.",
    icon: <FaRoute />,
    link: "/navigator",
    button: "Start Assessment",
  },
];

function Explore() {
  return (
    <section className="explore-section">

      <div className="section-header">

        <h2>Explore Career Compass</h2>

        <p>
          Everything you need to plan your career
          in one powerful platform.
        </p>

      </div>

      <div className="explore-grid">

        {modules.map((module) => (
          <div
            key={module.title}
            className="explore-card"
          >

            <div className="explore-icon">
              {module.icon}
            </div>

            <h3>{module.title}</h3>

            <p>{module.description}</p>

            <Link
              to={module.link}
              className="explore-btn"
            >
              {module.button}

              <FaArrowRight />
            </Link>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Explore;