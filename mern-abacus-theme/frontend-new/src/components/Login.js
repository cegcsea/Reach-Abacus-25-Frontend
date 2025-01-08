import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/Login.css";

const Login = ({ setIsLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-toggle">
          <button className="active-tab">Login</button>
          <button onClick={() => setIsLogin(false)}>Register</button>
        </div>
        <h2 className="login-title">LOGIN</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" className="login-input" />
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="login-input"
              id="password-field"
            />
            <span
              toggle="#password-field"
              className={`fa fa-fw ${showPassword ? "fa-eye" : "fa-eye-slash"} field-icon toggle-password`}
              onClick={togglePasswordVisibility}
            ></span>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="forgot-password">
          Forgot Password?{" "}
          <a href="#" className="forgot-link">
            Click here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
