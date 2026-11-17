
import { Link, useParams } from "react-router-dom";
import { careers } from "../data/careers";
import { courses } from "../data/courses";
import "./CareerDetail.css";

import {
  FaArrowLeft,
  FaMoneyBillWave,
  FaGraduationCap,
  FaLayerGroup,
  FaCheckCircle,
  FaArrowRight,
  FaBookOpen,
  FaRocket,
} from "react-icons/fa";

function CareerDetail() {
  const { id } = useParams();

  const career = careers.find(
    (career) => career.id === Number(id)
  );

  if (!career) {
    return <h2>Career Not Found</h2>;
  }

  return (
    <div className="career-detail-page">

      {/* Back Button */}

      <Link to="/careers" className="back-btn">
  <FaArrowLeft className="back-icon" />
  <span>Back</span>
</Link>
      {/* Hero Section */}

      <section className="career-hero">

        <div className="hero-content">

          <div className="hero-left">

            <span className="career-category">
              {career.category}
            </span>

            <h1>{career.title}</h1>

          </div>

          <div className="hero-right">

            <div className="hero-circle">

              💼

            </div>

          </div>

        </div>

      </section>

      <section className="snapshot-grid">

        <div className="snapshot-card">

          <h4>Salary</h4>

          <p>{career.salary}</p>

        </div>

        <div className="snapshot-card">

          <h4>Education</h4>

          <p>{career.courses[0]}</p>

        </div>

        <div className="snapshot-card">

          <h4>Category</h4>

          <p>{career.category}</p>

        </div>

        <div className="snapshot-card">

          <h4>Streams</h4>

          <p>{career.stream.join(", ")}</p>

        </div>

      </section>
      {/* About */}

      <section className="content-card">

        <h2>About Career</h2>

        <p>{career.description}</p>

      </section>

      {/* Skills */}

      <section className="content-card">

        <h2>Skills Required</h2>

        <div className="skills-container">

          {career.skills.map((skill, index) => (

            <div
              className="skill-chip"
              key={index}
            >
              <FaCheckCircle />
              {skill}
            </div>

          ))}

        </div>

      </section>

      {/* Roadmap */}

      <section className="content-card">

        <h2>Career Roadmap</h2>

        <div className="roadmap-container">

          {career.roadmap.map((step, index) => (

            <div
              className="roadmap-wrapper"
              key={index}
            >

              <div className="roadmap-step">

                <span>
                  Step {index + 1}
                </span>

                <h3>{step}</h3>

              </div>

              {index !== career.roadmap.length - 1 && (

                <FaArrowRight className="road-arrow" />

              )}

            </div>

          ))}

        </div>

      </section>

      {/* Recommended Courses */}

      <section className="content-card">
  <div className="section-heading">
    <FaBookOpen />
    <h2>Recommended Courses</h2>
  </div>

  <div className="course-grid">
    {career.courses.map((courseName, index) => {
      const matchedCourse = courses.find(
        (course) => course.name === courseName
      );

      return matchedCourse ? (
        <Link
          to={`/courses/${matchedCourse.id}`}
          className="career-detail-card"
          key={index}
        >
          <FaGraduationCap className="course-icon" />

          <h3>{matchedCourse.name}</h3>

          <p>Recommended for this career path</p>
        </Link>
      ) : (
        <div className="career-detail-card" key={index}>
          <FaGraduationCap className="course-icon" />
          <h3>{courseName}</h3>
          <p>Recommended for this career path</p>
        </div>
      );
    })}
  </div>
</section>


      {/* Future Scope */}

      <section className="future-card">

        <FaRocket className="future-icon" />

        <div>

          <h2>Future Scope</h2>

          <p>{career.futureScope}</p>

        </div>

      </section>

      {/* Related Careers */}

      <section className="content-card">

        <h2>Related Careers</h2>

        <div className="related-grid">

          {careers
            .filter(
              (item) =>
                item.category === career.category &&
                item.id !== career.id
            )
            .slice(0, 3)
            .map((item) => (

              <Link
                to={`/careers/${item.id}`}
                className="related-card"
                key={item.id}
              >

                <h3>{item.title}</h3>

                <p>{item.category}</p>

                <button className="view-btn">

                  View Details →

                </button>
              </Link>

            ))}

        </div>

      </section>

    </div>
  );
}

export default CareerDetail;