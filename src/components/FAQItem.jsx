import {
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function FAQItem({
  faq,
  isOpen,
  onToggle,
}) {
  return (
    <div className="faq-item">

      <button
        className="faq-question"
        onClick={onToggle}
      >
        <span>{faq.question}</span>

        {isOpen ? (
          <FaChevronUp className="faq-icon" />
        ) : (
          <FaChevronDown className="faq-icon" />
        )}
      </button>

      {isOpen && (
        <div className="faq-answer">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQItem;