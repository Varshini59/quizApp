import React from "react";
import StartQuizBtn from "./StartQuizBtn";
import "../stylesheets/QuizBody.css";

function QuizBody({ onClick }) {
  return (
    <div className="quizbody">
      <h1>Coding Quiz Challenge</h1>
      <p>
        Try to answer the following code-related questions within the time
        limit.
      </p>
      <p>
        Keep in mind that incorrect answers will penalize your score/time by ten
        seconds!
      </p>
      <StartQuizBtn onClick={onClick} content="Start Quiz" />
    </div>
  );
}

export default QuizBody;
