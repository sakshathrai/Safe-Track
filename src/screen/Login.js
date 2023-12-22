import React, { useState } from "react";
import "../css/login.css";
import logo from "../image/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
function Login() {
  const navigate = useNavigate();
  const [errorMsge, setErrorMsge] = useState("");
  const [userData, setUserData] = useState({
    userEmail: "",
    userPassword: "",
  });

  async function handleLogIn() {
    if (useState.userEmail === "" || useState.userPassword === "") {
      setErrorMsge("Pls Fill The Form");
      return;
    }
    const response = await fetch(`${FETCH_BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const responseJSON = await response.json();

    if (responseJSON.success) {
      localStorage.setItem("safeToken", responseJSON.authToken);
      localStorage.setItem("userName", responseJSON.userName);
      navigate("/verify");
    } else {
      setErrorMsge(responseJSON.fethError || responseJSON.serverError);
    }
  }

  function changeUserInfo(field, value) {
    setUserData({ ...userData, [field]: value });
  }
  return (
    <div className="form-wrapper">
      <div className="form-side">
        <div className="my-form">
          <div className="form-welcome-row">
            <div className="error">{errorMsge}</div>
            <h1>Log in to your account &#x1F44F;</h1>
          </div>
          <div className="socials-row"></div>
          <div className="text-field">
            <label for="email">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                autocomplete="off"
                placeholder="Your email"
                value={userData.userEmail}
                onChange={(e) => changeUserInfo("userEmail", e.target.value)}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-globe-americas"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
              </svg>
            </label>
          </div>

          <div className="text-field">
            <label for="password">
              Password:
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Your Password"
                value={userData.userPassword}
                onChange={(e) => changeUserInfo("userPassword", e.target.value)}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
              </svg>
            </label>
          </div>
          <button className="my-form__button" onClick={handleLogIn}>
            Login
          </button>
          <div className="my-form__actions">
            <Link to="/signup" title="Create Account">
              new User?
            </Link>
          </div>
        </div>
      </div>
      <div className="l2">
        <img src={logo} className="big-logo" alt="Ofin" />
      </div>
    </div>
  );
}

export default Login;
