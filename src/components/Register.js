import React, { useState } from "react";
import "../styles/Register.css";
import { UserData } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { USER_REGISTRATION_CLOSED } from "../constants/events";

const Register = ({ setIsLogin }) => {
  const { getRegistrationLink } = UserData();
  const [email, setEmail] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      await getRegistrationLink({ email }, navigate);
      setEmail(""); // Clear email on success
    } catch (err) {
      // Error handled in context
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-toggle">
          <button onClick={() => setIsLogin(true)}>Login</button>
          <button className="active-tab">Register</button>
        </div>
        <h2 className="register-title">REGISTER</h2>
        <p className="text-center text-gray-400 mb-4">
          After registering, a verification link will be sent to your email.
        </p>
        {USER_REGISTRATION_CLOSED ? (
          <div className="bg-red-500/20 border-2 border-red-500 text-red-400 font-bold py-4 px-6 rounded-lg text-center mb-4">
            User Registration Closed
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="register-input"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button
              type="submit"
              className="register-button"
              disabled={btnLoading}
            >
              {btnLoading ? "Sending link..." : "Register"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
