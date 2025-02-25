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
    referralCode:"",
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
        referralCode:formData.referralCode,
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
    <div className="mt-16 flex justify-center items-center py-10 sm:px-0 px-4 bg-[#1d1d1d] gap-5">
      <div className="querybox flex flex-col gap-7 w-full sm:w-2/5 border border-[#c53939] text-white p-5 sm:p-10 bg-[#1d1d1d]">
        <div className="text-2xl text-center">
          <span className="text-[#c53939]">&#60;</span>
          &nbsp;Sign up&nbsp;
          <span className="text-[#c53939]">&#62;</span>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 outline-none border border-[#c53939] text-[18px] bg-[#1d1d1d]"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="college"
            placeholder="College"
            className="p-2 outline-none border border-[#c53939] text-[18px] bg-[#1d1d1d]"
            value={formData.college}
            onChange={handleChange}
            required
          />

           <select
            className="p-2 outline-none border border-[#c53939] text-[18px] bg-[#1d1d1d]"
            value={formData.hostCollege}
            onChange={(e) => handleSelectChange("hostCollege", e.target.value)}
            disabled
            required
          >
            {/* <option value="" disabled>
              Select Host College
            </option> */}
            {optionsHostCollege.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> 
          <select
            className="p-2 outline-none border border-[#c53939] text-[18px] bg-[#1d1d1d]"
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
            //disabled
            required
          >
            {/* <option value="" disabled>
              Accommodation required?
            </option> */}
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
            className="p-2 outline-none border border-[#c53939] text-[18px] bg-[#1d1d1d]"
            value={formData.dept}
            onChange={handleChange}
            required
          />

          <select
            className="p-2 outline-none border border-[#c53939] text-[18px] bg-[#1d1d1d]"
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
            className="p-2 outline-none border border-[#c53939] text-[18px] bg-[#1d1d1d]"
            value={formData.mobile}
            onChange={handleMobileChange}
            required
          />
          <input
            type="text"
            name="referralCode"
            placeholder="referralCode"
            className="p-2 outline-none border border-[#c53939] text-[18px] bg-[#1d1d1d]"
            value={formData.referralCode}
            onChange={handleChange}
            required
          />

          <div className="flex items-center border border-[#c53939]">
            <input
              type={isPassword}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              className="p-2 outline-none text-[18px] bg-[#1d1d1d] w-full"
              required
            />
            <span
              className="p-3 text-2xl bg-[#1d1d1d] cursor-pointer"
              onClick={() =>
                setIsPassword((prev) =>
                  prev === "password" ? "text" : "password"
                )
              }
            >
              {isPassword === "password" ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div className="flex items-center border border-[#c53939]">
            <input
              type={isConfirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={formData.confirmPassword}
              className="p-2 outline-none text-[18px] bg-[#1d1d1d] w-full"
              required
            />
            <span
              className="p-3 text-2xl bg-[#1d1d1d] cursor-pointer"
              onClick={() =>
                setIsConfirmPassword((prev) =>
                  prev === "password" ? "text" : "password"
                )
              }
            >
              {isConfirmPassword === "password" ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div className="self-center">
            <button
              type="submit"
              className="py-2 px-4 text-white border border-[#c53939] hover:bg-[#c5393936] duration-150"
              disabled={btnLoading}
            >
              {btnLoading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterDetails;
