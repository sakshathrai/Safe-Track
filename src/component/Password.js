import React, { useState } from "react";
import "../css/password.css";
import logo from "../image/logo.jpg";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;

function Password() {
  async function VerifyPin() {
    if (pin[3] === -1) {
      setError("Enter Correct PIN");
      return;
    }
    const response = await fetch(`${FETCH_BASE_URL}/api/verifypin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userPin: pin.join(""),
      }),
    });
    const responsJSON = await response.json();
    return responsJSON.success;
  }
  const [pin, setPin] = useState([-1, -1, -1, -1]);
  const [index, setIndex] = useState(-1);
  const [error, setError] = useState("");
  return (
    <div className="security">
      <div className="main-container">
        <div className="logo-container">
          <div className="error">{error}</div>
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
          <button className="keypad-btn" id="verifyBtn" onClick={VerifyPin}>
            verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default Password;
