import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import { UserData } from "../context/userContext";
import { FaLocationDot } from "react-icons/fa6";
import { TbHanger } from "react-icons/tb";
//import devrloper from "../assets/Hero/profile.png";

const Profile = () => {
  const { profile, user } = UserData(); // Get the profile method and user data from context

  useEffect(() => {
    profile(); // Fetch the profile when the component mounts
    console.log("profile:", user); // Debugging: Check the user data fetched
  }, []);

  const navigate = useNavigate();

  const navigateTo = (page) => {
    const routes = {
      events: "/events",
      workshops: "/workshops",
      update: "/profile/update",
      dashboard: "/dashboard",
      "change-password": "/profile/change-password",
    };

    navigate(routes[page]);
  };

  
  // Fallback data if the user is undefined
  const fallbackUser = {
    id: "",
    name: "",
    email: "",
    mobile: "",
    abacusId: "",
    college: "",
    year: "",
    dept: "",
    hostCollege: "",
    registeredEvents: [],
    registeredWorkshops: [],
  };

  const userData = user || fallbackUser;

  return (
    <div className="user-profile-container">
      <div className="user-card">
        <div className="user-header">
          <h2>Profile</h2>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>ID:</strong> {userData.id}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Mobile:</strong> {userData.mobile}
          </p>
        </div>

        <div className="user-content flex flex-col lg:flex-row">
          {/* Registered Events Section */}
          <div className="user-section events">
            <h3>Registered Events</h3>
            {userData.registeredEvents?.length > 0 ? (
              <ul>
                {userData.registeredEvents.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            ) : (
              <p>
                <button onClick={() => navigateTo("events")} className="hover:text-slate-100">
                  Click here to Register for Events
                </button>
              </p>
            )}
          </div>

          {/* Registered Workshops Section */}
          <div className="user-section workshops">
            <h3>Registered Workshops</h3>
            {userData.registeredWorkshops?.length > 0 ? (
              <ul>
                {userData.registeredWorkshops.map((workshop, index) => (
                  <li key={index}>{workshop}</li>
                ))}
              </ul>
            ) : (
              <p>
                <button onClick={() => navigateTo("workshops")} className="hover:text-slate-100">
                  Click here to Register for Workshops
                </button>
              </p>
            )}
          </div>
        </div>

        {/* Additional Profile Details */}
        <div className="flex items-center flex-col my-2 ">
          <p className="flex flex-row !text-white">
            <div className="pr-4 pt-5 lg:pt-1">
              <FaLocationDot className="icon text-center self-center my-auto" />{" "}
            </div>
            <div className="overflow-x-clip ">
              Studying in {userData.college}. Striding through year{" "}
              {userData.year} in the {userData.dept} department!
            </div>
          </p>
          <p className="flex flex-row !text-white">
            <div className="pr-4 pt-5 lg:pt-1 ">
              <TbHanger className="icon" />
            </div>
            <div>
              You are currently in College of Engineering Guindy, attending our
              marvellous REACH'25!
            </div>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="user-actions">
          {[
            {
              label: "Update Profile",
              page: "update",
              className: "btn-update",
            },
            {
              label: "Dashboard",
              page: "dashboard",
              className: "btn-dashboard",
            },
            {
              label: "Change Password",
              page: "change-password",
              className: "btn-password",
            },
            
          ].map(({ label, page, onClick, className }) => (
            <button
              key={label}
              className="p-2  mx-2 text-white border border-[#c53939] hover:bg-[#c5393936] duration-150"
              onClick={onClick || (() => navigateTo(page))}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Profile Image and Details */}
        
      </div>
    </div>
  );
};

export default Profile;
