import React, { useState } from "react";
import { UserData } from "../context/userContext";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { forgotPasswordReset } = UserData();
  const { id, token } = useParams();
  const [formData, setFormData] = useState({
    confirmPassword: "",
    newPassword: "",
  });
  const [passwordError, setPasswordError] = useState([]);
  const navigate = useNavigate();

  // Toggles password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Password validation function
  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) errors.push("Must be at least 8 characters long.");
    if (!/[A-Z]/.test(password))
      errors.push("Must include an uppercase letter.");
    if (!/[a-z]/.test(password))
      errors.push("Must include a lowercase letter.");
    if (!/\d/.test(password)) errors.push("Must include a digit.");
    if (!/[@$!%*?&#]/.test(password))
      errors.push("Must include a special character (@, $, !, %, *, ?, &, #).");

    setPasswordError(errors);
    return errors.length === 0;
  };

  // Handles input changes for both fields
  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    // Validate new password as the user types
    if (name === "newPassword") {
      validatePassword(value);
    }
  };

  // Submits the form data to the reset function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validatePassword(formData.newPassword) &&
      formData.confirmPassword === formData.newPassword
    ) {
      forgotPasswordReset(
        id,
        token,
        formData.newPassword,
        formData.confirmPassword,
        navigate
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Reset Password</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {/* New Password Field */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="newPassword"
              placeholder="Enter your new Password"
              className="login-input"
              value={formData.newPassword}
              onChange={(e) => handleChange("newPassword", e.target.value)}
            />
            <span
              className={`fa fa-fw ${
                showPassword ? "fa-eye" : "fa-eye-slash"
              } field-icon toggle-password`}
              onClick={togglePasswordVisibility}
            ></span>
          </div>
          {/* confirm Password Field */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Re-enter new Password"
              className="login-input"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />
          </div>

          {/* Password Validation Messages */}
          <div className="password-error">
            {passwordError.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          </div>

          {/* Reset Password Button */}
          <button type="submit" className="login-button">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
