import React from "react";
import "../styles/Register.css";

const Register = ({ setIsLogin }) => {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-toggle">
          <button
            onClick={() => setIsLogin(true)} 
          >
            Login
          </button>
          <button className="active-tab">Register</button>
        </div>
        <h2 className="register-title">REGISTER</h2>
        <p className="text-center text-gray-400 mb-4">
          After registering, a verification link will be sent to your email.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="register-input"
          />
          <button
            type="submit"
            className="register-button"
          >
            Register
          </button>
        </form>
        <p className="forgot-password">
          Didn't receive the link?{" "}
          <a href="#" className="forgot-link">
            Check your email.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
