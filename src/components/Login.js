import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Login.css";
import { UserData } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { login ,forgotPassword,user} = UserData(); // Ensure `UserData` is properly set up and provides the `login` function
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Toggles password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Handles input changes for both email and password fields
  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Submits the form data to the login function
  const handleSubmit = (e) => {
    e.preventDefault();
    login(
      {
        email: formData.email,
        password: formData.password,
      },
      navigate
    );
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Toggle between Login and Register */}
        <div className="login-toggle">
          <button className="active-tab">Login</button>
          <button onClick={() => setIsLogin(false)}>Register</button>
        </div>
        <h2 className="login-title">LOGIN</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="login-input"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {/* Password Input with Toggle Visibility */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="login-input"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <span
              className={`fa fa-fw ${
                showPassword ? "fa-eye" : "fa-eye-slash"
              } field-icon toggle-password`}
              onClick={togglePasswordVisibility}
            ></span>
          </div>
          {/* Login Button */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {/* Forgot Password */}
        <p className="forgot-password" >
          Forgot Password?{" "}
          <a href="/forgot-password" className="forgot-link">
            Click here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
