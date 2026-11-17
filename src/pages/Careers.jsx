import { useState } from "react";
import { Link } from "react-router-dom";
import { careers } from "../data/careers";
import "./Careers.css";

import { FaSearch } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import {
  FaLaptopCode,
  FaChartLine,
  FaPalette,
  FaArrowRight,
  FaList,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from "react-icons/hi2";

function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStream, setSelectedStream] = useState("All");
const streams = [
  "All",
  "PCM",
  "PCB",
  "Commerce",
  "Arts",
];
  const filteredCareers = careers.filter((career) => {
    const matchesSearch = career.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStream =
      selectedStream === "All" ||
      career.stream.includes(selectedStream);

    return matchesSearch && matchesStream;
  });
const getCareerIcon = (stream) => {
  if (stream.includes("PCM")) {
    return (
      <FaLaptopCode
        className="stream-icon"
        style={{ color: "#0c5c9a" }}
      />
    );
  }

  if (stream.includes("PCB")) {
    return (
      <FaUserDoctor
        className="stream-icon"
        style={{ color: "#10B981" }}
      />
    );
  }

  if (stream.includes("Commerce")) {
    return (
      <FaChartLine
        className="stream-icon"
        style={{ color: "#F59E0B" }}
      />
    );
  }

  if (stream.includes("Arts")) {
    return (
      <FaPalette
        className="stream-icon"
        style={{ color: "#A855F7" }}
      />
    );
  }

  return (
    <FaLaptopCode
      className="stream-icon"
      style={{ color: "#6B7280" }}
    />
  );
};
const getStreamIcon = (stream) => {
  switch (stream) {
    case "PCM":
      return <FaLaptopCode className="category-icon pcm" />;

    case "PCB":
      return <FaUserDoctor className="category-icon pcb" />;

    case "Commerce":
      return <FaChartLine className="category-icon commerce" />;

    case "Arts":
      return <FaPalette className="category-icon arts" />;

    default:
      return <TbCategory className="category-icon" />;
  }
};


  return (
    <div className="careers-page">
      <h1 className="box">Explore Careers</h1>

      {/* Search */}

      <div className="box1">
        <div className="search-container">
          <FaSearch className="search-icon" />

          <input
            type="text"
            className="search-box"
            placeholder="Search careers..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>
      </div>

      <div className="careers-layout">

        {/* Sidebar */}

        <div className="categories-sidebar">

  <div className="category-heading">
  <FaList className="heading-icon" />
  <span>Categories</span>
</div>

  {streams.map((stream) => (
    <button
      key={stream}
      className={selectedStream === stream ? "active" : ""}
      onClick={() => setSelectedStream(stream)}
    >
      {getStreamIcon(stream)}
      <span>
        {stream === "All" ? "All" : stream}
      </span>
    </button>
  ))}

</div>

        {/* Cards */}

        <div className="careers-container">

          {filteredCareers.map((career) => (
            <div
              key={career.id}
              className="career-card"
            >
              <h3 className="career-title">
                {getCareerIcon(career.stream)}
                {career.title}
              </h3>

              <p className="career-info">
                <HiOutlineAcademicCap className="icon" />
                <strong>Stream:</strong>{" "}
                {career.stream}
              </p>

              <p className="career-info">
                <HiOutlineBriefcase className="icon" />
                <strong>Category:</strong>{" "}
                {career.category}
              </p>

              <p className="career-description">
                {career.description.length > 90
                  ? career.description.substring(
                      0,
                      90
                    ) + "..."
                  : career.description}
              </p>

              <Link
                to={`/careers/${career.id}`}
                className="view-details-btn"
              >
                View Details
                <FaArrowRight />
              </Link>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Careers;