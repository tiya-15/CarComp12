import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";
import "./CourseDetail.css";

import {
  FaArrowLeft,
  FaGraduationCap,
  FaClock,
  FaUserGraduate,
  FaLayerGroup,
} from "react-icons/fa";

function CourseDetail() {
  const { id } = useParams();

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  const relatedCourses = courses.filter(
    (item) =>
      item.stream === course.stream &&
      item.id !== course.id
  );

  return (
    <div className="course-detail-page">

      {/* Back Button */}

      <Link to="/courses" className="back-btn">
        <FaArrowLeft className="back-icon" />
        <span>Back</span>
      </Link>

      {/* Hero Section */}

      <section className="course-hero">

        <div className="hero-content">

          <div className="hero-left">

            <span className="course-category">
              {course.stream}
            </span>

            <h1>{course.name}</h1>
          </div>

          <div className="hero-right">

            <div className="hero-circle">

              🎓

            </div>

          </div>

        </div>

      </section>

      {/* About */}

      <section className="content-card">

        <h2>About Course</h2>

        <p>{course.description}</p>

      </section>

      {/* Snapshot */}

      <section className="snapshot-grid">

        <div className="snapshot-card">

          <FaClock className="snapshot-icon" />

          <h4>Duration</h4>

          <p>{course.duration}</p>

        </div>

        <div className="snapshot-card">

          <FaUserGraduate className="snapshot-icon" />

          <h4>Eligibility</h4>

          <p>{course.eligibility}</p>

        </div>

        <div className="snapshot-card">

          <FaLayerGroup className="snapshot-icon" />

          <h4>Stream</h4>

          <p>{course.stream}</p>

        </div>

        <div className="snapshot-card">

          <FaGraduationCap className="snapshot-icon" />

          <h4>Career Paths</h4>

          <p>{course.careerOptions.length}+</p>

        </div>

      </section>


          {/* Career Opportunities */}

      <section className="content-card">

        <h2>Career Opportunities</h2>

        <div className="skills-container">

          {course.careerOptions.map((career, index) => (

            <div
              className="skill-chip"
              key={index}
            >
              <FaGraduationCap />
              {career}
            </div>

          ))}

        </div>

      </section>


      {/* Related Courses */}

      <section className="content-card">

        <h2>Related Courses</h2>

        <div className="related-grid">

          {relatedCourses.length > 0 ? (

            relatedCourses
              .slice(0, 4)
              .map((related) => (

                <Link
                  to={`/courses/${related.id}`}
                  className="related-card"
                  key={related.id}
                >

                  <FaGraduationCap
                    className="course-icon"
                  />

                  <h3>{related.name}</h3>

                  <p>{related.duration}</p>

                  <button className="view-btn">

                    View Details →

                  </button>

                </Link>

              ))

          ) : (

            <p>No related courses found.</p>

          )}

        </div>

      </section>
           
            {/* Career Scope */}

      <section className="future-card">

        <FaGraduationCap className="future-icon" />

        <div>

          <h2>Career Scope</h2>

          <p>

            Completing <strong>{course.name}</strong> opens opportunities in various industries. Graduates can pursue careers as{" "}
            {course.careerOptions.join(", ")}. With additional certifications and experience, professionals can further specialize and enjoy excellent career growth.

          </p>

        </div>

      </section>

    </div>
  );
}

export default CourseDetail;