import { useState } from "react";
import { Link } from "react-router-dom";
import { exams } from "../data/exams";
import {
  FaSearch,
  FaLaptopCode,
  FaHeartbeat,
  FaBalanceScale,
  FaPalette,
  FaBuilding,
  FaUniversity,
  FaBriefcase,
  FaBookOpen,
  FaClock,
  FaGraduationCap,
  FaCalendarAlt,
  FaArrowRight,
  FaList,
} from "react-icons/fa";
import "../pages/Exams.css";

function Exams() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Engineering",
    "Medical",
    "Architecture",
    "Design",
    "Law",
    "Management",
    "Commerce",
    "University Admissions",
  ];

  const filteredExams = exams.filter((exam) => {
    const matchesSearch = exam.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      exam.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Engineering":
        return <FaLaptopCode className="category-icon engineering" />;

      case "Medical":
        return <FaHeartbeat className="category-icon medical" />;

      case "Architecture":
        return <FaBuilding className="category-icon architecture" />;

      case "Design":
        return <FaPalette className="category-icon design" />;

      case "Law":
        return <FaBalanceScale className="category-icon law" />;

      case "Management":
        return <FaBriefcase className="category-icon management" />;

      case "Commerce":
        return <FaBriefcase className="category-icon commerce" />;

      case "University Admissions":
        return <FaUniversity className="category-icon university" />;

      default:
        return <FaBookOpen className="category-icon" />;
    }
  };

  return (
    <div className="exams-page">
      {/* Heading */}

      <div className="box">
        <h1>Explore Entrance Exams</h1>
      </div>

      <div className="box1">
        {/* Search */}

        <div className="search-container">
          <FaSearch className="search-icon" />

          <input
            className="search-box"
            type="text"
            placeholder="Search exams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Layout */}

        <div className="exams-layout">
          {/* Sidebar */}

          <aside className="exam-sidebar">
            <div className="category-heading">
              <FaList className="heading-icon" />
              <span>Categories</span>
            </div>

            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedCategory(category)
                }
              >
                {getCategoryIcon(category)}
                <span>{category}</span>
              </button>
            ))}
          </aside>

          {/* Cards */}

          <div className="exam-container">
            {filteredExams.length > 0 ? (
              filteredExams.map((exam) => (
                <div key={exam.id} className="exam-card">

                  {/* Title */}

                  <div className="exam-title">
                    <div className="exam-title-icon">
                      {getCategoryIcon(exam.category)}
                    </div>

                    <h3>{exam.name}</h3>
                  </div>

                  {/* Meta Information */}

                  <div className="exam-meta">

                    <div className="exam-info">
                      <FaGraduationCap className="icon" />

                      <strong>Eligibility</strong>

                      <span className="exam-value">
                        {exam.eligibility}
                      </span>
                    </div>

                    <div className="exam-info">
                      <FaClock className="icon" />

                      <strong>Duration</strong>

                      <span className="exam-value">
                        {exam.duration}
                      </span>
                    </div>

                    <div className="exam-info">
                      <FaCalendarAlt className="icon" />

                      <strong>Exam Date</strong>

                      <span className="exam-value">
                        {exam.examDate}
                      </span>
                    </div>

                  </div>

                  {/* Button */}

                  <Link
                    to={`/exams/${exam.id}`}
                    className="exam-btn"
                  >
                    View Details
                    <FaArrowRight />
                  </Link>

                </div>
              ))
            ) : (
              <div className="empty-state">
                <h2>No Exams Found</h2>
                <p>Try searching with another keyword.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exams;