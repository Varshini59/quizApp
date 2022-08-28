import React from "react";
import "../stylesheets/Header.css";

function Header({ onClick, sec }) {
  return (
    <div className="header">
      <p onClick={onClick}>View Highscores</p>
      <p>Time: {sec} </p>
    </div>
  );
}

export default Header;
