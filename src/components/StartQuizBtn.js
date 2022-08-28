import React from "react";
import "../stylesheets/StartQuizBtn.css";

function StartQuizBtn({ content, onClick }) {
  return (
    <button className="start_quiz_btn" onClick={onClick}>
      {" "}
      {content}{" "}
    </button>
  );
}

export default StartQuizBtn;
