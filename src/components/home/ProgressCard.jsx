import { Link } from "react-router-dom";
import "./ProgressCard.css";
import {
  FaClipboardCheck,
  FaBullseye,
  FaCalendarAlt,
} from "react-icons/fa";

function ProgressCard({ history }) {
  const totalAssessments = history.length;

  const latestAssessment = history[0];

  const latestRecommendation =
  totalAssessments > 0
    ? latestAssessment.recommendations?.[0]?.title
    : "No assessments yet";

  const lastAssessmentDate = latestAssessment
    ? new Date(latestAssessment.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "N/A";

  return (
    <section className="progress-section">
      <div className="progress-card">

        <div className="progress-header">
          <h2>📊 Your Progress
Keep tracking your career journey.</h2>

          <Link to="/history" className="history-link">
            View History →
          </Link>
        </div>

        <div className="progress-grid">

          <div className="progress-item">
            <span>Assessments Taken</span>
            <strong>{totalAssessments}</strong>
          </div>

          <div className="progress-item">
            <span>Latest Recommendation</span>
            <strong>{latestRecommendation}</strong>
          </div>

          <div className="progress-item">
            <span>Last Assessment</span>
            <strong>{lastAssessmentDate}</strong>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProgressCard;