import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/level.css";
import img1 from "../image/one.png";
import img2 from "../image/two.png";
import img3 from "../image/three.png";
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
      <div
        className={`level-1 ${level === 1 ? "selected-level" : ""}`}
        onClick={() => {
          setLevel(1);
        }}
      >
        <div class="card-image">
          <img src={img1} alt="Image 1" />
        </div>
        <div class="card-content">
          <h3>
            <b>Level 1 </b>
          </h3>
          <ul>
            <li>Initial Level for All Users</li>
            <li>Basic features</li>
            <li>Can be customized</li>
          </ul>
        </div>
      </div>
      <div
        className={`level-1 ${level === 2 ? "selected-level" : ""}`}
        onClick={() => {
          setLevel(2);
        }}
      >
        <div class="card-image">
          <img src={img2} alt="Image 2" />
        </div>
        <div class="card-content">
          <h3>Level 2</h3>
          <ul>
            <li>Slightly Advanced features</li>
            <li>Can be customized</li>
          </ul>
        </div>
      </div>
      <div
        className={`level-1 ${level === 3 ? "selected-level" : ""}`}
        onClick={() => {
          setLevel(3);
        }}
      >
        <div class="card-image">
          <img src={img3} alt="Image 3" />
        </div>
        <div class="card-content">
          <h3>Level 3 </h3>
          <ul>
            <li>All the features can be used</li>
            <li>These features can be brought down to any layer</li>
          </ul>
        </div>
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
