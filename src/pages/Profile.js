import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/userContext";
import { FaLocationDot } from "react-icons/fa6";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import { sessions, workshopsReach } from "../constants/workshops";
import "../styles/profile.css";
import axios from "axios";

const Profile = () => {
  const { profile, user, userEvents, session } = UserData();
  const navigate = useNavigate();
  const { isLoading } = LoaderData();
  const [response,setResponse] = useState(null);
  const [referralCode, setReferralCode] = useState(null); // store referral code
  const [isRegistering, setIsRegistering] = useState(false);
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

  //Fallback data
  const fallbackUser = {
    id: "10001",
    name: "Guest",
    email: "guest@cse.com",
    mobile: "123456789",
    abacusId: "999",
    college: "College of Engineering Guindy, Anna University",
    year: "4",
    dept: "CSE",
    registeredEvents: [1, 2, 3],
    registeredWorkshops: [1, 2, 3],
  };

  const userData = user || fallbackUser;

  if (isLoading) {
    return <Loader />;
  }

  const handleRegisterCA = async () => {
    setIsRegistering(true); // disable button
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/admin/register-ca-from-user`,
        { abacusId: userData.abacusId },
        { withCredentials: true }
      );
      // Store referral code in state
      setReferralCode(res.data.campusAmbassador.referralCode);
    } catch (err) {
      alert(err.response?.data?.message || "Error registering CA");
    } finally {
      setIsRegistering(false); // optionally enable again if you want retry
    }
  };

  return (
    <div className="user-profile-container">
      <div className="user-card">
        <div className="user-header">
          <h2>Profile</h2>
          <p></p>
          <button
            className="action-btn m-5 ambassador"
            onClick={handleRegisterCA}
            disabled={!!referralCode || isRegistering} // disable after referral code or during API
          >
            {referralCode ? "Registered" : "Register as Student Ambassador"}
          </button>

          {/* Show referral code once received */}
          {referralCode && (
            <p className="referral-code">
              Your Referral Code: <strong>{referralCode}</strong>
            </p>
          )}
          

          <div className="user-details-grid">
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
        </div>

        {/* Content Section: Events & Workshops */}
        <div className="user-content">
          {/* Registered Events */}
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

          {/* Registered Workshops */}
          <div className="user-section workshops">
            <h3>Registered Workshops</h3>
            {user.WorkshopPayment?.length > 0 ? (
              <ul>
                {/* Successful Payments */}
                {user.WorkshopPayment.map((workshop, index) => {
                  const matchingWorkshop = workshopsReach.find(
                    (ws) =>
                      ws.code === workshop.workshopId &&
                      workshop.status === "SUCCESS",
                  );
                  return matchingWorkshop ? (
                    <li key={`success-${index}`} className="status-success">
                      {matchingWorkshop.title}
                    </li>
                  ) : null;
                })}

                {/* Pending Payments */}
                {user.WorkshopPayment.map((workshop, index) => {
                  const matchingWorkshop = workshopsReach.find(
                    (ws) =>
                      ws.code === workshop.workshopId &&
                      workshop.status === "PENDING",
                  );
                  return matchingWorkshop ? (
                    <li key={`pending-${index}`} className="status-pending">
                      {matchingWorkshop.title} (Pending)
                    </li>
                  ) : null;
                })}

                {/* Session Data */}
                {session.length > 0 &&
                  user.workshops.map((workshop, index) => {
                    const matchingWorkshop = sessions.find(
                      (ws) => ws.code === workshop.workshopId,
                    );
                    return matchingWorkshop ? (
                      <li key={`session-${index}`}>{matchingWorkshop.title}</li>
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

        {/* Info Bar / Location */}
        <div className="user-info-bar">
          <div className="info-text">
            <FaLocationDot className="icon-location" />
            <span>
              Studying in {userData.college}. <br />
              Striding through year {userData.year} in the {userData.dept}{" "}
              department!
            </span>
          </div>
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
              className: "btn-profile-password",
            },
          ].map(({ label, page, onClick, className }) => (
            <button
              key={label}
              className={`action-btn ${className}`}
              onClick={onClick || (() => navigateTo(page))}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;