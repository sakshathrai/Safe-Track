import React from "react";
import "../css/password.css";
import logo from "../image/logo.jpg";
function Password() {
  return <div class="security">
 <div class="main-container">

        <div class="logo-container">
            <div class="logo">
                <img src={logo} alt="Logo"/>
            </div>
        </div>

        <h1>Welcome to Safe Track</h1>

        <div class="pin-container">
            <input type="text" class="pin-input" id="pinInput1" readonly/>
            <input type="text" class="pin-input" id="pinInput2" readonly/>
            <input type="text" class="pin-input" id="pinInput3" readonly/>
            <input type="text" class="pin-input" id="pinInput4" readonly/>
        </div>
        <div class="keypad">
            <button class="keypad-btn">1</button>
            <button class="keypad-btn">2</button>
            <button class="keypad-btn">3</button>
            <button class="keypad-btn">4</button>
            <button class="keypad-btn">5</button>
            <button class="keypad-btn">6</button>
            <button class="keypad-btn">7</button>
            <button class="keypad-btn">8</button>
            <button class="keypad-btn">9</button>
            <button class="keypad-btn">0</button>
            <button class="keypad-btn" id="deleteBtn">delete</button>
            <button class="keypad-btn" id="verifyBtn">verify</button>
        </div>
    </div>
  </div>
}

export default Password;
