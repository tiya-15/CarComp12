import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineViewList } from "react-icons/hi";
import { TbCategory } from "react-icons/tb";

import { faqData } from "../data/faqData";
import FAQItem from "../components/FAQItem";

import "../pages/FAQ.css";

function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Controls which FAQ is currently open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Filter FAQs
  const filteredFaqs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      faq.answer
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      faq.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="faq-page">
      <h1 className="box">Career Assistant</h1>

      <p className="faq-subtitle">
        Find answers to common questions about careers,
        courses, entrance exams, streams, and Career Compass.
      </p>

      {/* Search */}

      <div className="box1">
        <div className="search-container">
          <FaSearch className="search-icon" />

          <input
            type="text"
            className="search-box"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setOpenFAQ(null);
            }}
          />
        </div>
      </div>

      <div className="faq-layout">

        {/* Sidebar */}

        <div className="categories-sidebar">

          <h2 className="category-heading">
            <HiOutlineViewList className="heading-icon" />
            Categories
          </h2>

          <button
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("All");
              setOpenFAQ(null);
            }}
          >
            <TbCategory className="category-icon" />
            All Categories
          </button>

          <button
            className={selectedCategory === "Careers" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("Careers");
              setOpenFAQ(null);
            }}
          >
            Careers
          </button>

          <button
            className={selectedCategory === "Courses" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("Courses");
              setOpenFAQ(null);
            }}
          >
            Courses
          </button>

          <button
            className={selectedCategory === "Exams" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("Exams");
              setOpenFAQ(null);
            }}
          >
            Exams
          </button>

          <button
            className={selectedCategory === "Streams" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("Streams");
              setOpenFAQ(null);
            }}
          >
            Streams
          </button>

          <button
            className={selectedCategory === "Website" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("Website");
              setOpenFAQ(null);
            }}
          >
            Website
          </button>

          <button
            className={selectedCategory === "General" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("General");
              setOpenFAQ(null);
            }}
          >
            General
          </button>

        </div>

        {/* FAQ List */}

        <div className="faq-container">

          <p className="faq-count">
            Showing {filteredFaqs.length} of {faqData.length} FAQs
          </p>

          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openFAQ === faq.id}
                onToggle={() =>
                  setOpenFAQ(
                    openFAQ === faq.id ? null : faq.id
                  )
                }
              />
            ))
          ) : (
            <h3>No questions found.</h3>
          )}

        </div>

      </div>
    </div>
  );
}

export default FAQ;