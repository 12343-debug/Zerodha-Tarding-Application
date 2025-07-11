import React, { useState } from "react";
import "./LoginPage.css";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSubmitError, setShowSubmitError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
    setShowSubmitError(false);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    setShowSubmitError(false);
  };

  const loginForm = async (event) => {
    event.preventDefault();

    try {
      const url = "https://api.escuelajs.co/api/v1/auth/login";
      const response = await axios.post(url, {
        email: username,
        password: password,
      });
      const jwtToken = await response.data.access_token;
      if (username === "john@mail.com" && password === "changeme") {
        localStorage.setItem("jwt_token", jwtToken);
        navigate("dashboard");
      } else {
        alert("invalid username or password");
      }
    } catch (error) {
      console.log(error);
      setShowSubmitError(true);
      setErrorMessage("invalid username or password");
    }
  };

  const accessToken = localStorage.getItem("jwt_token");
  if (accessToken != null) {
    Navigate("/");
  }

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={loginForm}>
          <header className="logo-container">
            <img
              src="https://kite.zerodha.com/static/images/kite-logo.svg"
              width={60}
              height={60}
              alt="logo"
            />
          </header>
          <h2 className="heading">Login To Kite</h2>
          <div className="input-container">
            <label htmlFor="user-id" className="input-label">
              Phone Number or User ID
            </label>
            <input
              type="text"
              className="input-field"
              id="user-id"
              onChange={onChangeUsername}
              value={username}
              required
              placeholder="Phone Number or User ID"
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              onChange={onChangePassword}
              value={password}
              required
              placeholder="Password"
            ></input>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">{errorMessage}</p>}
          <a href="#" className="forget-password">
            forget user ID or password
          </a>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
