import React, { useState } from "react";
import "../stylesheets/Results.css";

function Results({ totalScore, onChange, onClick }) {
  const [initials, setInitials] = useState("");

  const initialsChangeHandler = (e) => {
    setInitials(e.target.value);
    console.log(initials);
  };
  return (
    <div className="results">
      <h1>All done!</h1>
      <p>Your final score is {totalScore}.</p>
      <p>
        Enter initials:
        <input
          className="initials_txt_input"
          type="text"
          onChange={initialsChangeHandler}
        />
        <button className="submit_btn" onClick={(event) => onClick(initials)}>
          Submit
        </button>
      </p>
    </div>
  );
}

export default Results;
