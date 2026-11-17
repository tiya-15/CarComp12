import { courses } from "../data/courses";
import { exams } from "../data/exams";

export function getRelatedCourses(career) {
  if (!career || !career.courses) return [];

  return courses.filter((course) =>
    career.courses.includes(course.name)
  );
}

export function getRelatedExams(career) {
  if (!career) return [];

  const stream = career.stream;

  return exams.filter((exam) => {
    const category = exam.category.toLowerCase();

    if (stream.includes("PCM")) {
      return (
        category.includes("engineering") ||
        category.includes("architecture") ||
        category.includes("design")
      );
    }

    if (stream.includes("PCB")) {
      return category.includes("medical");
    }

    if (stream.includes("Commerce")) {
      return (
        category.includes("commerce") ||
        category.includes("management") ||
        category.includes("accountancy")
      );
    }

    if (stream.includes("Arts")) {
      return (
        category.includes("law") ||
        category.includes("design") ||
        category.includes("humanities")
      );
    }

    return false;
  });
}