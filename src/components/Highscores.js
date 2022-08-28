import React from "react";
import "../stylesheets/Highscores.css";

function Highscores({ onClick, highscores, clearScore }) {
  return (
    <div className="highscores">
      <h1>Highscores</h1>

      {highscores.map((highscore, idx) => (
        <p key={idx}>
          {idx + 1 + ". " + highscore.initials + " - " + highscore.score}
        </p>
      ))}

      <button onClick={onClick} className="go_back_btn">
        Go Back
      </button>
      <button onClick={clearScore} className="clear_highscore_btn">
        Clear Highscores
      </button>
    </div>
  );
}

export default Highscores;
