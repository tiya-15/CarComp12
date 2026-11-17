import { Link, useParams } from "react-router-dom";
import { exams } from "../data/exams";
import "../pages/ExamDetail.css";
import {
  FaCalendarAlt,
  FaLaptop,
  FaClock,
  FaUserGraduate,
  FaTag,
} from "react-icons/fa";

function ExamDetail() {
  const { id } = useParams();

  const exam = exams.find(
    (exam) => exam.id === Number(id)
  );

  if (!exam) {
    return <h2>Exam Not Found</h2>;
  }

  const relatedExams = exams.filter(
    (item) =>
      item.category === exam.category &&
      item.id !== exam.id
  );

  return (
    <div className="exam-detail">
      <Link to="/exams" className="back-link">
        ← Back to Exams
      </Link>

      <h1>{exam.name}</h1>

      {/* Quick Facts */}

      <div className="quick-facts">
        <div className="fact-card">
          <FaCalendarAlt className="fact-icon" />
          <div>
            <h4>Exam Date</h4>
            <p>{exam.examDate}</p>
          </div>
        </div>

        <div className="fact-card">
          <FaLaptop className="fact-icon" />
          <div>
            <h4>Mode</h4>
            <p>{exam.mode}</p>
          </div>
        </div>

        <div className="fact-card">
          <FaClock className="fact-icon" />
          <div>
            <h4>Duration</h4>
            <p>{exam.duration}</p>
          </div>
        </div>

        <div className="fact-card">
          <FaUserGraduate className="fact-icon" />
          <div>
            <h4>Eligibility</h4>
            <p>{exam.eligibility}</p>
          </div>
        </div>

        <div className="fact-card">
          <FaTag className="fact-icon" />
          <div>
            <h4>Category</h4>
            <p>{exam.category}</p>
          </div>
        </div>
      </div>

      {/* Description */}

      <section className="detail-section">
        <h2>Description</h2>
        <p>{exam.description}</p>
      </section>

      {/* Exam Pattern */}

      <section className="detail-section">
        <h2>Exam Pattern</h2>
        <p>{exam.pattern}</p>
      </section>

      {/* Related Courses */}

      <section className="detail-section">
        <h2>Related Courses</h2>

        <ul>
          {exam.relatedCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </section>

      {/* Preparation Roadmap */}

      <section className="detail-section">
        <h2>Preparation Roadmap</h2>

        <ol>
          {exam.roadmap.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Official Website */}

      <section className="detail-section">
        <h2>Official Website</h2>

        <a
          href={exam.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="official-link"
        >
          Visit Official Website
        </a>
      </section>

      {/* Related Exams */}

      <section className="detail-section">
        <h2>Related Entrance Exams</h2>

        {relatedExams.length > 0 ? (
          <div className="related-exams">
            {relatedExams.map((related) => (
              <div
                key={related.id}
                className="related-exam-card"
              >
                <h3>{related.name}</h3>

                <p>
                  <strong>Exam Date:</strong>{" "}
                  {related.examDate}
                </p>

                <Link to={`/exams/${related.id}`}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No related entrance exams found.</p>
        )}
      </section>
    </div>
  );
}

export default ExamDetail;