import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import { UserData } from "../context/userContext";

const Profile = () => {
  const { profile, user } = UserData(); // Get the profile method and user data from context

  useEffect(() => {
     profile(); // Fetch the profile when the component mounts
    console.log("profile:",user); // Debugging: Check the user data fetched
  }, []);

  const navigate = useNavigate();

  const navigateTo = (page) => {
    if (page === "events") {
      navigate("/events");
    } else if (page === "workshops") {
      navigate("/workshops");
    }
  };

  // Fallback data if the user is undefined
  const fallbackUser = {
    id: "",
    name: "",
    email: "",
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
        </div>

        <div className="user-content flex flex-col lg:flex-row">
          {/* Registered Events Section */}
          <div className="user-section events">
            <h3>Registered Events</h3>
            {userData.events?.length > 0 ? (
              <ul>
                {userData.events.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            ) : (
              <p>
                <button onClick={() => navigateTo("events")}>
                  Click here to Register for Events
                </button>
              </p>
            )}
          </div>

          {/* Registered Workshops Section */}
          <div className="user-section workshops">
            <h3>Registered Workshops</h3>
            {userData.workshops?.length > 0 ? (
              <ul>
                {userData.workshops.map((workshop, index) => (
                  <li key={index}>{workshop}</li>
                ))}
              </ul>
            ) : (
              <p>
                <button onClick={() => navigateTo("workshops")}>
                  Click here to Register for Workshops
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
