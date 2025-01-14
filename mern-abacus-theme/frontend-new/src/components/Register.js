import React,{useState} from "react";
import "../styles/Register.css";
import { UserData } from "../context/userContext";

const Register = ({ setIsLogin }) => {
    const { getRegistrationLink } = UserData();
    const [email, setEmail] = useState("");
  
    const handleEmailChange = (e) => setEmail(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      getRegistrationLink({ email });
    }
  
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
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="register-input"
            onChange={handleEmailChange}
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
