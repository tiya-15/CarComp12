import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCompass,
  FaGraduationCap,
  FaBookOpen,
  FaRobot,
} from "react-icons/fa";
import "./Hero.css";

function Hero({ user }) {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* Left Side */}

        <div className="hero-left">

          <span className="hero-badge">
            <FaCompass />
            Career Guidance Platform
          </span>

          {user && (
            <p className="welcome-text">
              👋 Welcome back, <strong>{user.name}</strong>
            </p>
          )}

          <h1>
            Navigate Your <span>Future</span> with Confidence
          </h1>

          <p>
            {user
              ? "Ready to continue your career journey? Take another assessment, explore new opportunities, and make informed decisions for your future."
              : "Explore careers, courses, entrance exams and receive personalized guidance through our intelligent Career Assistant. Find the right path for your future—all in one place."}
          </p>

          <div className="hero-buttons">
            <Link
              to={user ? "/history" : "/careers"}
              className="primary-btn"
            >
              {user ? "Assessment History" : "Explore Careers"}
              <FaArrowRight />
            </Link>
            <Link
              to="/navigator"
              className="secondary-btn"
            >
              Take Assessment
            </Link>
          </div>

          <div className="hero-highlights">

            <div className="highlight">
              <FaGraduationCap />
              <span>Popular courses</span>
            </div>

            <div className="highlight">
              <FaBookOpen />
              <span>12 Entrance Exams</span>
            </div>

            <div className="highlight">
              <FaRobot />
              <span>AI Career Assistant</span>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-right">

          <div className="hero-card">

            <div className="hero-card-header">
              Career Match
            </div>

            <h2>Software Engineer</h2>

            <div className="progress">
              <div className="progress-fill"></div>
            </div>

            <p>92% Match</p>

            <hr />

            <div className="hero-card-info">
              <span>Recommended Course</span>
              <strong>B.Tech CSE</strong>
            </div>

            <div className="hero-card-info">
              <span>Entrance Exam</span>
              <strong>JEE Main</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;