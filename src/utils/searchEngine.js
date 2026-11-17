import { careers } from "../data/careers";
import { courses } from "../data/courses";
import { exams } from "../data/exams";

/* -----------------------------
   Generic Search Helper
----------------------------- */

function contains(text, query) {
  if (!text) return false;

  return text
    .toString()
    .toLowerCase()
    .includes(query.toLowerCase());
}

/* -----------------------------
   Career Search
----------------------------- */

export function searchCareers(query) {
  if (!query.trim()) return [];

  return careers.filter((career) =>
    contains(career.title, query) ||
    contains(career.description, query) ||
    contains(career.stream, query) ||
    contains(career.category, query)
  );
}

/* -----------------------------
   Course Search
----------------------------- */

export function searchCourses(query) {
  if (!query.trim()) return [];

  return courses.filter((course) =>
    contains(course.name, query) ||
    contains(course.description, query) ||
    contains(course.stream, query) ||
    contains(course.eligibility, query)
  );
}

/* -----------------------------
   Exam Search
----------------------------- */

export function searchExams(query) {
  if (!query.trim()) return [];

  return exams.filter((exam) =>
    contains(exam.name, query) ||
    contains(exam.category, query) ||
    contains(exam.description, query) ||
    contains(exam.eligibility, query)
  );
}

/* -----------------------------
   Search Everything
----------------------------- */

export function searchEverything(query) {
  return {
    careers: searchCareers(query),
    courses: searchCourses(query),
    exams: searchExams(query),
  };
}