import { useEffect, useState } from "react";
import axios from "axios";
import "./AssessmentHistory.css";

function AssessmentHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/assessment/history`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setHistory(response.data);
      } catch (error) {
        console.error("Failed to fetch history:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
  <div className="history-page">
    <div className="history-header">
      <h1>Assessment History</h1>
      <p>
        Track all your previous career assessments and recommendations.
      </p>
    </div>

    {history.length === 0 ? (
      <div className="empty-history">
        <h3>No Assessments Yet</h3>
        <p>Complete an assessment to see your history.</p>
      </div>
    ) : (
      <div className="history-grid">
        {history.map((assessment) => (
          <div
            className="history-card"
            key={assessment._id}
          >
            <div className="history-date">
              📅{" "}
              {new Date(
                assessment.createdAt
              ).toLocaleString()}
            </div>

            <h3>Recommended Careers</h3>

            <div className="recommendation-list">
              {assessment.recommendations.map((career) => (
                <span
                  key={career.careerId}
                  className="career-pill"
                >
                  {career.title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default AssessmentHistory;