import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const UserProfile = () => {
    const user = {
        id: "",
        name: "",
        email: "",
        registeredEvents: [],
        registeredWorkshops: [],
    };

    const navigate = useNavigate();

    const navigateTo = (page) => {
        if (page === "events") {
            navigate("/events");
        } else if (page === "workshops") {
            navigate("/workshops");
        }
    };

    return (
        <div className="user-profile-container">
            <div className="user-card">
                <div className="user-header">
                    <h2>User Profile</h2>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>

                <div className="user-content">
                    {/* Registered Events Section */}
                    <div className="user-section events">
                        <h3>Registered Events</h3>
                        {user.registeredEvents.length > 0 ? (
                            <ul>
                                {user.registeredEvents.map((event, index) => (
                                    <li key={index}>{event}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>
                                <button onClick={() => navigateTo("events")}>
                                    Register for Events
                                </button>
                            </p>
                        )}
                    </div>

                    {/* Registered Workshops Section */}
                    <div className="user-section workshops">
                        <h3>Registered Workshops</h3>
                        {user.registeredWorkshops.length > 0 ? (
                            <ul>
                                {user.registeredWorkshops.map((workshop, index) => (
                                    <li key={index}>{workshop}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>
                                <button onClick={() => navigateTo("workshops")}>
                                    Register for Workshops
                                </button>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
