import {
  FaBullseye,
  FaRobot,
  FaBookOpen,
  FaRoute,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import "./WhyChoose.css";

const reasons = [
  {
    icon: <FaBullseye />,
    title: "Personalized Guidance",
    description:
      "Receive career recommendations tailored to your interests and goals.",
  },
  {
    icon: <FaRobot />,
    title: "AI Career Assistant",
    description:
      "Get instant answers to your career, course and entrance exam queries.",
  },
  {
    icon: <FaBookOpen />,
    title: "Comprehensive Resources",
    description:
      "Explore careers, courses and entrance exams from one platform.",
  },
  {
    icon: <FaRoute />,
    title: "Career Navigator",
    description:
      "Take a guided assessment to discover careers that suit your strengths.",
  },
  {
    icon: <FaChartLine />,
    title: "Future Ready",
    description:
      "Learn about salary trends, future scope and career opportunities.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Simple & Reliable",
    description:
      "Designed specifically for students with an intuitive and easy-to-use interface.",
  },
];

function WhyChoose() {
  return (
    <section className="why-section">
      <div className="section-header">
        <h2>Why Choose Career Compass?</h2>

        <p>
          Everything you need to confidently plan your future,
          all in one platform.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="why-card"
          >
            <div className="why-icon">
              {reason.icon}
            </div>

            <h3>{reason.title}</h3>

            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;