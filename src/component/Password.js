import React, { useState } from "react";
import "../css/password.css";
import logo from "../image/logo.jpg";
function Password() {
  const [pin, setPin] = useState([-1, -1, -1, -1]);
  const [index, setIndex] = useState(-1);

  return (
    <div className="security">
      <div className="main-container">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <h1>Welcome to Safe Track</h1>

        <div className="pin-container">
          {pin.map((val, i) => {
            return (
              <div
                key={i}
                className={`pin-input ${val >= 0 ? "active-input" : ""}`}
              >
                {val >= 0 ? val : " "}
              </div>
            );
          })}
        </div>
        <div className="keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((val) => {
            return (
              <button
                className="keypad-btn"
                onClick={() => {
                  if (index >= 3) return;
                  pin[index + 1] = val;
                  setIndex(index + 1);
                  setPin([...pin]);
                }}
              >
                {val}
              </button>
            );
          })}
          <button
            className="keypad-btn"
            id="deleteBtn"
            onClick={() => {
              if (index >= 0) {
                pin[index] = -1;
                setPin([...pin]);
                setIndex(index - 1);
              }
            }}
          >
            delete
          </button>
          <button className="keypad-btn" id="verifyBtn">
            verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default Password;
