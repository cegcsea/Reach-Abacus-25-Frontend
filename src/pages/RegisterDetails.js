import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { UserData } from "../context/userContext";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
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
    hostCollege: "",
    accomodation:false,
    dept: "",
    year: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const hostCollege = "J.J. College of Engineering and Technology,Tiruchirappalli";
  const optionsHostCollege = [
    {
      label: "J.J. College of Engineering and Technology,Tiruchirappalli",
      value: "J.J. College of Engineering and Technology,Tiruchirappalli",
    },
    // {
    //   label: "Anna University",
    //   value: "Anna University",
    // },
    // {
    //   label: "IIT Madras",
    //   value: "IIT Madras",
    // },
  ];

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
        hostCollege: hostCollege,
        accomodation:formData.accomodation,
        dept: formData.dept,
        year: parseInt(formData.year),
        mobile: formData.mobile,
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
  <div className="register-container m-20">
    <div className="register-box">
      <div className="register-title">
        &lt; Sign up &gt;
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="register-input"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="college"
          placeholder="College"
          className="register-input"
          value={formData.college}
          onChange={handleChange}
          required
        />

        <select
          className="register-input"
          value={formData.hostCollege}
          disabled
        >
          {optionsHostCollege.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          className="register-input"
          value={formData.accomodation?.toString()}
          disabled
        >
          <option value="false">No</option>
        </select>

        <input
          type="text"
          name="dept"
          placeholder="Department"
          className="register-input"
          value={formData.dept}
          onChange={handleChange}
          required
        />

        <select
          className="register-input"
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
          className="register-input"
          value={formData.mobile}
          onChange={handleMobileChange}
          required
        />

        {/* Password */}
        <div className="flex items-center register-input">
          <input
            type={isPassword}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            className="bg-transparent outline-none w-full"
            required
          />
          <span
            className="cursor-pointer text-[#c0a068]"
            onClick={() =>
              setIsPassword((prev) =>
                prev === "password" ? "text" : "password"
              )
            }
          >
            {isPassword === "password" ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="flex items-center register-input">
          <input
            type={isConfirmPassword}
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirmPassword}
            className="bg-transparent outline-none w-full"
            required
          />
          <span
            className="cursor-pointer text-[#c0a068]"
            onClick={() =>
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
          className="register-button"
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
