import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/level.css";
function LevelPick() {
  const [level, setLevel] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("level")) {
      localStorage.setItem("level", 1);
    }
  }, []);
  return (
    <div className="level-pick-container">
      <h1 className="level-heading">Chose Level Based On Your Interest</h1>
      <div
        className={`level-1 ${level === 1 ? "selected-level" : ""}`}
        onClick={() => {
          setLevel(1);
        }}
      >
        Level 1
      </div>
      <div
        className={`level-1 ${level === 2 ? "selected-level" : ""}`}
        onClick={() => {
          setLevel(2);
        }}
      >
        level 2
      </div>
      <div
        className={`level-1 ${level === 3 ? "selected-level" : ""}`}
        onClick={() => {
          setLevel(3);
        }}
      >
        level 3
      </div>
      <div className="level-buttons">
        <button
          className="skip-button"
          onClick={() => {
            navigate("/home");
          }}
        >
          Skip
        </button>
        <button
          onClick={() => {
            localStorage.setItem("level", level);
            navigate("/home");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default LevelPick;
