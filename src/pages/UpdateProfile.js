import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserData } from "../context/userContext";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
function UpdateProfile() {
  const navigate = useNavigate();
  const { updateProfile, user, profile } = UserData();

  const { isLoading } = LoaderData();
  const [btnLoading, setBtnLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    college: user.college,
    dept: user.dept,
    year: user.year,
    mobile: user.mobile,
    //accomodation: user.accomodation,
  });

  //console.log(user);
  useEffect(() => {
    setFormData({
      name: user.name,
      college: user.college,
      dept: user.dept,
      year: user.year,
      mobile: user.mobile,
      //accomodation: user.accomodation,
    });
  }, [user]);
  // useEffect(() => {
  //   profile();
  //   //console.log("updateprofile:", user);
  // }, []);

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
    //console.log(name, formData.year);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    //console.log(name, value);
  };

  const handleSubmit = async (e) => {
    //console.log(formData.year);
    e.preventDefault();
    updateProfile(
      {
        name: formData.name,
        college: formData.college,
        dept: formData.dept,
        year: isNaN(formData.year) ? formData.year : parseInt(formData.year),
        mobile: formData.mobile,
        //accomodation: formData.accomodation,
      },
      navigate,
    );
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mt-20 lg:mt-28 flex justify-center items-center py-10 px-4 ">
      <div
        className="
        flex flex-col gap-7 w-full sm:w-2/5
        p-6 sm:p-10
        border border-[#c0a06833]
        text-[#ffffffe6]
        rounded-xl
        backdrop-blur-xl
        bg-[radial-gradient(circle_at_center,rgba(192,160,104,0.18)_0%,rgba(192,160,104,0.08)_35%,rgba(255,255,255,0.02)_65%,transparent_100%)]
        shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_0_30px_rgba(255,255,255,0.05)]
      "
      >
        <div className="text-2xl text-center tracking-wide">
          <span className="text-[#c0a068]">&#60;</span>
          &nbsp;Update Info&nbsp;
          <span className="text-[#c0a068]">&#62;</span>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {["name", "college", "dept"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="
              p-2 text-[18px]
              bg-transparent
              border border-[#aa8c2c66]
              outline-none
              rounded-md
              focus:border-[#c0a068]
              focus:shadow-[0_0_12px_rgba(192,160,104,0.35)]
              placeholder:text-[#ffffff99]
            "
              value={formData[field]}
              onChange={handleChange}
              required
            />
          ))}

          <select
            className="
            p-2 text-[18px]
            bg-transparent
            border border-[#aa8c2c66]
            outline-none
            rounded-md
            focus:border-[#c0a068]
            text-[#ffffffe6]
          "
            value={formData.year}
            onChange={(e) => handleSelectChange("year", e.target.value)}
            required
          >
            {optionsYear.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-[#050505]"
              >
                {option.label}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            className="
            p-2 text-[18px]
            bg-transparent
            border border-[#aa8c2c66]
            outline-none
            rounded-md
            focus:border-[#c0a068]
            focus:shadow-[0_0_12px_rgba(192,160,104,0.35)]
            placeholder:text-[#ffffff99]
          "
            value={formData.mobile}
            onChange={handleMobileChange}
            required
          />

          <div className="self-center pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              type="submit"
              className="
      px-6 py-2
      border border-[#c0a068]
      rounded-md
      text-[#ffffffe6]
      hover:bg-[#c0a06822]
      hover:shadow-[0_0_20px_rgba(192,160,104,0.4)]
      transition-all duration-200
    "
              disabled={btnLoading}
            >
              {btnLoading ? "Updating..." : "Update Info"}
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="
      px-6 py-2
      border border-[#c0a068]
      rounded-md
      text-[#ffffffe6]
      hover:bg-[#c0a06822]
      hover:shadow-[0_0_20px_rgba(192,160,104,0.4)]
      transition-all duration-200
    "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
