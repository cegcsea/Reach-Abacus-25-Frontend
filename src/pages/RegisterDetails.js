import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { UserData } from "../context/userContext";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import "../styles/RegisterDetails.css";

// This is to note that I need to commit something 
function RegisterDetails() {
  const { email, token } = useParams();
  const navigate = useNavigate();
  const { register } = UserData();
  const [btnLoading, setBtnLoading] = useState(false);
  const [isPassword, setIsPassword] = useState("password");
  const [isConfirmPassword, setIsConfirmPassword] = useState("password");
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    //hostCollege: "",
    accomodation: false,
    dept: "",
    year: "",
    mobile: "",
    referralCode: "",
    password: "",
    confirmPassword: "",
  });
  //const hostCollege = "J.J. College of Engineering and Technology,Tiruchirappalli";
  // const optionsHostCollege = [
  //   {
  //     label: "J.J. College of Engineering and Technology,Tiruchirappalli",
  //     value: "J.J. College of Engineering and Technology,Tiruchirappalli",
  //   },
  //   // {
  //   //   label: "Anna University",
  //   //   value: "Anna University",
  //   // },
  //   // {
  //   //   label: "IIT Madras",
  //   //   value: "IIT Madras",
  //   // },
  // ];

  const optionsYear = [
    { label: "First year", value: "1" },
    { label: "Second year", value: "2" },
    { label: "Third year", value: "3" },
    { label: "Fourth year", value: "4" },
    { label: "Fifth year", value: "5" },
  ];

  const handleMobileChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        mobile: e.target.value,
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Form Data before submit:", formData);
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    // console.log({
    //   name: formData.name,
    //   email: email,
    //   token: token,
    //   college: formData.college,
    //   hostCollege: formData.hostCollege,
    //   accomodation: formData.accomodation,
    //   dept: formData.dept,
    //   year: parseInt(formData.year),
    //   mobile: formData.mobile,
    //   password: formData.password,
    // });

    register(
      {
        name: formData.name,
        email: email,
        token: token,
        college: formData.college,
        //hostCollege: hostCollege,
        accomodation: formData.accomodation,
        dept: formData.dept,
        year: parseInt(formData.year),
        mobile: formData.mobile,
        referralCode: formData.referralCode,
        password: formData.password,
      },
      navigate
    );
  };
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div
      className="register-details-container"
      style={{
        minHeight: "calc(100vh - 80px)",
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
    >
      <div className="register-details-card">
        <div className="register-details-title">
          <span>&#60;</span> Sign up <span>&#62;</span>
        </div>
        <form className="register-details-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="register-details-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="college"
            placeholder="College"
            className="register-details-input"
            value={formData.college}
            onChange={handleChange}
            required
          />
          <select
            className="register-details-select"
            value={
              formData.accomodation !== undefined &&
              formData.accomodation !== null
                ? formData.accomodation.toString()
                : ""
            }
            onChange={(e) =>
              handleSelectChange(
                "accomodation",
                e.target.value === "true"
                  ? true
                  : e.target.value === "false"
                  ? false
                  : null
              )
            }
            required
          >
            <option value="" disabled>
              Accommodation required?
            </option>
            <option key="Yes" value={true}>
              Yes
            </option>
            <option key="No" value={false}>
              No
            </option>
          </select>
          <input
            type="text"
            name="dept"
            placeholder="Department"
            className="register-details-input"
            value={formData.dept}
            onChange={handleChange}
            required
          />
          <select
            className="register-details-select"
            value={formData.year}
            onChange={(e) => handleSelectChange("year", e.target.value)}
            required
          >
            <option value="" disabled>
              Select Year of Study
            </option>
            {optionsYear.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            className="register-details-input"
            value={formData.mobile}
            onChange={handleMobileChange}
            required
          />
          <input
            type="text"
            name="referralCode"
            placeholder="Referral Code (optional)"
            className="register-details-input"
            value={formData.referralCode}
            onChange={handleChange}
          />
          <div className="register-details-password-wrap">
            <input
              type={isPassword}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              required
            />
            <span
              className="register-details-password-icon"
              onClick={() =>
                setIsPassword((prev) =>
                  prev === "password" ? "text" : "password"
                )
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                setIsPassword((prev) =>
                  prev === "password" ? "text" : "password"
                )
              }
            >
              {isPassword === "password" ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="register-details-password-wrap">
            <input
              type={isConfirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={formData.confirmPassword}
              required
            />
            <span
              className="register-details-password-icon"
              onClick={() =>
                setIsConfirmPassword((prev) =>
                  prev === "password" ? "text" : "password"
                )
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                setIsConfirmPassword((prev) =>
                  prev === "password" ? "text" : "password"
                )
              }
            >
              {isConfirmPassword === "password" ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <button
            type="submit"
            className="register-details-submit"
            disabled={btnLoading}
          >
            {btnLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterDetails;
