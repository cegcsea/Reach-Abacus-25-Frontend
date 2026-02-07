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

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="register-container ">
      <div className="register-box !h-[325px] ">
        <div className="register-toggle">
          <button className="active-tab !text-2xl">Forgot Password</button>
        </div>
        {/* <h2 className="register-title">REGISTER</h2> */}
        <p className="text-center text-gray-400 mb-4">
          Enter your mail. A link to reset your password will be sent
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
