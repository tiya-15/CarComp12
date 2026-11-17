import {
  FaList,
  FaLaptopCode,
  FaPalette,
} from "react-icons/fa";

import { FaUserDoctor } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LuCalendarClock } from "react-icons/lu";
import { HiOutlineViewList } from "react-icons/hi";
import { TbCategory } from "react-icons/tb";
import { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import { FaSearch } from "react-icons/fa";
import "../pages/Courses.css";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStream, setSelectedStream] = useState("All");
  const streams = [
    "All",
    "PCM",
    "PCB",
    "Commerce",
    "Arts",
  ];
  // Filter Courses
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStream =
      selectedStream === "All" ||
      course.stream === selectedStream;

    return matchesSearch && matchesStream;
  });

  // Return icon according to stream
  const getCourseIcon = (stream) => {
    switch (stream) {
      case "PCM":
        return (
          <FaLaptopCode
            className="stream-icon"
            style={{ color: "#0c5c9a" }} // Blue
          />
        );

      case "PCB":
        return (
          <FaUserDoctor
            className="stream-icon"
            style={{ color: "#10B981" }} // Green
          />
        );

      case "Commerce":
        return (
          <FaChartLine
            className="stream-icon"
            style={{ color: "#F59E0B" }} // Orange
          />
        );

      case "Arts":
        return (
          <FaPalette
            className="stream-icon"
            style={{ color: "#da40eb" }} // Purple
          />
        );

      default:
        return (
          <FaLaptopCode
            className="stream-icon"
            style={{ color: "#c7bd31" }} // Grey
          />
        );
    }
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
    <div className="courses-page">
      <h1 className="box">Explore Courses</h1>

      {/* Search Bar */}
      <div className="box1">
        <div className="search-container">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-box"
          />
        </div>
      </div>

      <div className="courses-layout">
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
              <span>{stream}</span>
            </button>
          ))}

        </div>

        {/* Course Cards */}
        <div className="courses-container">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <h3 className="course-title">
                {getCourseIcon(course.stream)}
                {course.name}
              </h3>

              <p className="course-info">
                <HiOutlineAcademicCap className="icon" />
                <strong>Stream:</strong> {course.stream}
              </p>

              <p className="course-info">
                <LuCalendarClock className="icon" />
                <strong>Duration:</strong> {course.duration}
              </p>

              <p className="course-description">
                {course.description.length > 90
                  ? course.description.substring(0, 90) + "..."
                  : course.description}
              </p>

              <Link
                to={`/courses/${course.id}`}
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

export default Courses;