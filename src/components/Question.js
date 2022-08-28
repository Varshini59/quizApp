import "../stylesheets/Question.css";

function Question({ question, choice, onClick, currentQnResult }) {
  return (
    <div className="question_container">
      <h2 className="question">{question}</h2>
      <div className="choices_container">
        {choice.map((ch, idx) => (
          <button key={idx} className="choice" onClick={onClick}>
            {idx + 1 + ". " + ch}
          </button>
        ))}
        <p>{currentQnResult}</p>
      </div>
    </div>
  );
}

export default Question;
