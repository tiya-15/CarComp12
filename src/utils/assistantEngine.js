import { searchPages } from "./navigationEngine";
import { searchEverything } from "./searchEngine";
import {
  getRelatedCourses,
  getRelatedExams,
} from "./relationshipEngine";

export function getAssistantResponse(query) {
  // Check if the user is asking for a page
  const pageResults = searchPages(query);

  if (pageResults.length > 0) {
    return {
      message: "Here are the pages you're looking for.",
      suggestions: pageResults,
    };
  }

  // Search datasets
  const data = searchEverything(query);

  const suggestions = [];

  // =========================
  // Careers
  // =========================

  data.careers.forEach((career) => {
    const relatedCourses = getRelatedCourses(career);

    const relatedExams = getRelatedExams(career);

    suggestions.push({
      id: `career-${career.id}`,

      type: "career",

      icon: "💼",

      title: career.title,

      description: career.description,

      salary: career.salary,

      stream: career.stream,

      relatedCourses,

      relatedExams,

      route: `/careers/${career.id}`,

      buttonText: "View Career",
    });
  });

  // =========================
  // Courses
  // =========================

  data.courses.forEach((course) => {
    suggestions.push({
      id: `course-${course.id}`,

      type: "course",

      icon: "🎓",

      title: course.name,

      description: course.description,

      route: `/courses/${course.id}`,

      buttonText: "View Course",
    });
  });

  // =========================
  // Exams
  // =========================

  data.exams.forEach((exam) => {
    suggestions.push({
      id: `exam-${exam.id}`,

      type: "exam",

      icon: "📝",

      title: exam.name,

      description: exam.description,

      route: `/exams/${exam.id}`,

      buttonText: "View Exam",
    });
  });

  // No Results
  if (suggestions.length === 0) {
    return {
      message:
        "I couldn't find anything related to your search. Try different keywords.",
      suggestions: [],
    };
  }

  // Success
  return {
    message: `I found ${suggestions.length} result${
      suggestions.length > 1 ? "s" : ""
    } related to your search.`,
    suggestions,
  };
}