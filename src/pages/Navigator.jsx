import { useState } from "react";
import { Link } from "react-router-dom";
import { questions } from "../data/questions";
import { careers } from "../data/careers";
import { getRecommendations } from "../utils/recommendationEngine";
import axios from "axios";
import "./Navigator.css";

function Navigator() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const [results, setResults] = useState([]);

  const currentAnswer = answers[currentQuestion];
  const answeredQuestions = answers.filter(Boolean).length;

  const progress =
    (currentQuestion / questions.length) * 100;

  // ===========================
  // Select Answer
  // ===========================

  const handleAnswer = async (value) => {
  const updatedAnswers = [...answers];

  updatedAnswers[currentQuestion] = {
    category: questions[currentQuestion].category,
    value,
  };

  setAnswers(updatedAnswers);

  // Not last question
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion((prev) => prev + 1);
    return;
  }

  // Last question
  const recommendations = getRecommendations(
    updatedAnswers.filter(Boolean),
    careers
  );

  // Result pehle dikhao
  setResults(recommendations);

  try {
    const token = localStorage.getItem("token");

    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/assessment`,
      {
        answers: updatedAnswers.filter(Boolean),
        recommendations: recommendations.map((career) => ({
          careerId: career.id,
          title: career.title,
        })),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success("Assessment Saved Successfully!");
  } catch (error) {
    console.error(error);
    toast.error("Failed to save assessment!");
  }
};

  // ===========================
  // Previous Question
  // ===========================

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  // ===========================
  // Restart
  // ===========================

  const restartAssessment = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setResults([]);
  };

  // ===========================
  // RESULT SCREEN
  // ===========================

  if (results.length > 0) {
    return (
      <div className="results-container">

        <h1>🎯 Your Career Matches</h1>

        <p className="subtitle">
          Based on your responses, these careers suit you best.
        </p>

        <div className="results-grid">
          {results.map((career, index) => (
            <Link
              to={`/careers/${career.id}`}
              key={career.id}
              className="career-link"
            >
              <div className="career-card">

                <div className="rank">
                  #{index + 1}
                </div>

                <h2>{career.title}</h2>

                <p>{career.description}</p>

                <p>
                  <strong>Salary:</strong> {career.salary}
                </p>

                <p>
                  <strong>Category:</strong> {career.category}
                </p>

                <button className="details-btn">
                  View Career Details →
                </button>

              </div>
            </Link>
          ))}
        </div>
        <div className="result-buttons">

          <button
            className="restart-btn"
            onClick={restartAssessment}
          >
            Retake Assessment
          </button>
          <Link to="/careers" className="explore-link">
            <button className="explore-btn">
              Explore All Careers
            </button>
          </Link>

        </div>

      </div>
    );
  }

  // ===========================
  // QUESTION SCREEN
  // ===========================
  return (
    <div className="navigator-container">
      <div className="assessment-card">

        <h1>Career Compass</h1>

        {/* Header */}
        <div className="header">

          <button
            className="circle-btn"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ←
          </button>

          <div className="question-info">
            <h3>
              Question {currentQuestion + 1} / {questions.length}
            </h3>
          </div>

          {/* Empty space to keep the title centered */}
          <div className="circle-placeholder"></div>

        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <p className="progress-text">
          {Math.round(progress)}% Completed
        </p>

        {/* Question */}
        <h2 className="question">
          {questions[currentQuestion]?.text || "Loading..."}
        </h2>

        {/* Options */}
        <div className="options">

          <button
            className={
              currentAnswer?.value === 1
                ? "option selected"
                : "option"
            }
            onClick={() => handleAnswer(1)}
          >
            ❌ No
          </button>

          <button
            className={
              currentAnswer?.value === 3
                ? "option selected"
                : "option"
            }
            onClick={() => handleAnswer(3)}
          >
            🤔 Maybe
          </button>

          <button
            className={
              currentAnswer?.value === 5
                ? "option selected"
                : "option"
            }
            onClick={() => handleAnswer(5)}
          >
            ✅ Yes
          </button>

        </div>

      </div>
    </div>
  );
}

export default Navigator;