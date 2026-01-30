import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import { UserData } from "../context/userContext";
import { FaLocationDot } from "react-icons/fa6";
import { TbHanger } from "react-icons/tb";
//import devrloper from "../assets/Hero/profile.png";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import { sessions, workshopsReach } from "../constants/workshops";
const Profile = () => {
  const { user, userEvents, session } = UserData(); // Get the profile method and user data from context

  // useEffect(() => {
  //   profile(); // Fetch the profile when the component mounts
  //   console.log("profile:", userData.events,userData.workshops); // Debugging: Check the user data fetched
  // }, [user]);
  //console.log(user.WorkshopPayment);
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
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }

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
            {user.events?.length > 0 ? (
              <ul>
                {userEvents.map((event, index) => (
                  <li key={index}>{event.eventName}</li>
                ))}
              </ul>
            ) : (
              <p>
                <button
                  onClick={() => navigateTo("events")}
                  className="hover:text-slate-100"
                >
                  Click here to Register for Events
                </button>
              </p>
            )}
          </div>

          {/* Registered Workshops Section */}
          <div className="user-section workshops">
            <h3>Registered Workshops</h3>

            {user.WorkshopPayment?.length > 0 ? (
              <ul>
                {user.WorkshopPayment.map((workshop, index) => {
                  const matchingWorkshop = workshopsReach.find(
                    (ws) =>
                      ws.code === workshop.workshopId &&
                      workshop.status === "SUCCESS"
                  );
                  return matchingWorkshop ? (
                    <li key={index} className="!text-green-600">
                      {matchingWorkshop.title}
                    </li>
                  ) : null;
                })}
                {user.WorkshopPayment.map((workshop, index) => {
                  const matchingWorkshop = workshopsReach.find(
                    (ws) =>
                      ws.code === workshop.workshopId &&
                      workshop.status === "PENDING"
                  );
                  return matchingWorkshop ? (
                    <li key={index} className="!text-red-500">
                      {matchingWorkshop.title} - Pending
                    </li>
                  ) : null;
                })}
                {session.length > 0 &&
                  user.workshops.map((workshop, index) => {
                    //console.log(workshop);
                    const matchingWorkshop = sessions.find(
                      (ws) => ws.code === workshop.workshopId
                    );
                    return matchingWorkshop ? (
                      <li key={index}>{matchingWorkshop.title}</li>
                    ) : null;
                  })}
              </ul>
            ) : (
              <p>
                <button
                  onClick={() => navigateTo("workshops")}
                  className="hover:text-slate-100"
                >
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
              You are currently in JJCET , attending our
              marvellous REACH'26!
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
