import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGraduationCap,
  FaBriefcase,
  FaClipboardList,
} from "react-icons/fa";

import "./FeaturedSection.css";

function FeaturedSection({
  title,
  subtitle,
  data,
  type,
  viewAll,
}) {
  return (
    <section className="featured-section">

      <div className="section-header">

        <h2>{title}</h2>

        <p>{subtitle}</p>

      </div>

      <div className="featured-grid">

        {data.slice(0, 4).map((item) => (

          <div
            key={item.id}
            className="featured-card"
          >

            <div className="featured-icon">

              {type === "career" && (
                <FaBriefcase />
              )}

              {type === "course" && (
                <FaGraduationCap />
              )}

              {type === "exam" && (
                <FaClipboardList />
              )}

            </div>

            <h3>
              {item.name}
            </h3>

            <p>

              {type === "career" &&
                item.description}

              {type === "course" &&
                item.description}

              {type === "exam" &&
                item.category}

            </p>

          </div>

        ))}

      </div>

      <div className="featured-footer">

        <Link
          to={viewAll}
          className="featured-btn"
        >

          View All

          <FaArrowRight />

        </Link>

      </div>

    </section>
  );
}

export default FeaturedSection;