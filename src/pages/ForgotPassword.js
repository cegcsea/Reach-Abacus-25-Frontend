import React, { useState } from "react";
import "../styles/Forgot.css";
import { UserData } from "../context/userContext";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
const ForgotPassword = ({ setIsLogin }) => {
  const { forgotPassword } = UserData();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    forgotPassword({ email });
  };
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2 className="forgot-heading">Forgot your password?</h2>

        <p className="forgot-subtitle">
          Enter your email address and we&apos;ll send you a secure link to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="forgot-input"
            onChange={handleEmailChange}
          />
          <button type="submit" className="forgot-button">
            Get password reset link
          </button>
        </form>

        <p className="forgot-helper">
          Make sure to check your <span className="forgot-helper-strong">spam</span> or{" "}
          <span className="forgot-helper-strong">promotions</span> folder if you don&apos;t see the email.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
