import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserData } from "../context/userContext";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
function UpdateProfile() {
  const navigate = useNavigate();
  const { updateProfile, user, profile } = UserData();
  const [btnLoading, setBtnLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    college: user.college,
    dept: user.dept,
    year: user.year,
    mobile: user.mobile,
    //accomodation: user.accomodation,
  });

  useEffect(() => {
    profile();
    //console.log("updateprofile:", user);
  }, []);

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
    console.log(name, value);
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
      navigate
    );
  };
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mt-20 lg:mt-28 flex justify-center items-center py-10 sm:px-0 px-4 bg-[#1d1d1d] gap-5 ">
      <div className="querybox flex flex-col gap-7 w-full sm:w-2/5 border border-[#c53939] text-white p-5 sm:p-10 bg-[#1d1d1d]">
        <div className="text-2xl text-center">
          <span className="text-[#c53939]">&#60;</span>
          &nbsp;Update Info&nbsp;
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

          {/* <select
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
            required
          >
            <option value="" disabled>
              Accommodation status
            </option>
            <option key="Yes" value={true}>
              Yes
            </option>
            <option key="No" value={false}>
              No
            </option>
          </select> */}

          <div className="self-center">
            <button
              type="submit"
              className="py-2 px-4 text-white border border-[#c53939] hover:bg-[#c5393936] duration-150"
              disabled={btnLoading}
            >
              {btnLoading ? "Updating..." : "Update Info"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
