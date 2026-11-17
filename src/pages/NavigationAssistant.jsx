import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

import { getAssistantResponse } from "../utils/assistantEngine";

import "../pages/NavigationAssistant.css";

function NavigationAssistant() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    if (!message.trim()) return;

    const result = getAssistantResponse(message);

    setChatHistory((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
      {
        sender: "assistant",
        message: result.message,
        suggestions: result.suggestions,
      },
    ]);

    setMessage("");
  };

  return (
    <div className="assistant-page">
      <h1>Career Assistant</h1>

      <p>
        Search careers, courses and entrance exams across Career Compass.
      </p>

      <div className="chat-box">
        {chatHistory.length === 0 ? (
          <div className="assistant-placeholder">
            <h3>Try asking...</h3>

            <p>💻 Software Engineer</p>
            <p>🩺 Doctor</p>
            <p>🎓 B.Tech CSE</p>
            <p>📝 JEE Main</p>
            <p>📊 Commerce Careers</p>
          </div>
        ) : (
          chatHistory.map((chat, index) => (
            <div key={index}>
              {chat.sender === "user" ? (
                <div className="user-message">
                  <p>{chat.text}</p>
                </div>
              ) : (
                <div className="assistant-message">
                  <h4>Career Assistant</h4>

                  <p>{chat.message}</p>

                  {chat.suggestions.length > 0 ? (
                    <div className="assistant-cards">
                      {chat.suggestions.map((item) => (
                        <div
                          key={item.id}
                          className="assistant-card"
                        >
                          {/* Header */}

                          <div className="assistant-card-header">
                            <div className="assistant-icon">
                              {item.icon}
                            </div>

                            <div className="assistant-info">
                              <h3>{item.title}</h3>

                              <p className="assistant-description">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          {/* Career Only */}

                          {item.type === "career" &&
                            item.relatedCourses?.length > 0 && (
                              <div className="assistant-section">
                                <h4>
                                  📚 Recommended Course
                                </h4>

                                <div className="assistant-tags">
                                  {item.relatedCourses
                                    .slice(0, 2)
                                    .map((course) => (
                                      <span
                                        key={course.id}
                                        className="assistant-tag"
                                      >
                                        🎓 {course.name}
                                      </span>
                                    ))}

                                  {item.relatedCourses.length >
                                    2 && (
                                    <span className="assistant-more">
                                      +
                                      {item.relatedCourses
                                        .length - 2}{" "}
                                      more
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}

                          {item.type === "career" &&
                            item.relatedExams?.length > 0 && (
                              <div className="assistant-section">
                                <h4>
                                  📝 Entrance Exams
                                </h4>

                                <div className="assistant-tags">
                                  {item.relatedExams
                                    .slice(0, 2)
                                    .map((exam) => (
                                      <span
                                        key={exam.id}
                                        className="assistant-tag"
                                      >
                                        {exam.name}
                                      </span>
                                    ))}

                                  {item.relatedExams.length >
                                    2 && (
                                    <span className="assistant-more">
                                      +
                                      {item.relatedExams
                                        .length - 2}{" "}
                                      more
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}

                          <Link
                            to={item.route}
                            className="assistant-button"
                          >
                            {item.buttonText} →
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="no-results">
                      No matching careers, courses
                      or entrance exams found.
                    </p>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask about careers, courses or exams..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button onClick={handleSend}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

export default NavigationAssistant;