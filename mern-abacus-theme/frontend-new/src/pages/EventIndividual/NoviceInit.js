import React, { useState, useEffect } from "react";
import "../../styles/Intern.css";
import { useNavigate, useLocation } from "react-router-dom";
import Contact from "../../components/Contact.js";
import img4 from "../../assets/images/internship.png";


const NoviceInit = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the location object to extract the state
  const { event } = location.state || {}; // Get the event from location.state

  const [activeTab, setActiveTab] = useState("description"); // Active tab for description, internship, or rounds

  // Ensure that selectedEvent is found
  if (!event) {
    return (
      <h1 style={{ textAlign: "center", color: "#fff" }}>Event Not Found</h1>
    );
  }

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#fff" }} className="heading">
        {event.title}
      </h1>
      <div className="middle-section">
        <div className="content-container">
          <img src={event.image } alt="Event" className="event-image" />
          <div className="content" style={{ color: "#fff" }}>
            <div className="tabs mx-auto text-sm lg:text-md lg:p-auto">
              <button
                onClick={() => handleTabClick("description")}
                className={activeTab === "description" ? "active" : ""}
              >
                Description &lt;~&gt;
              </button>
              {event.intern && event.intern.length > 0 && (
                <button
                  onClick={() => handleTabClick("internship")}
                  className={activeTab === "internship" ? "active" : ""}
                >
                  Internship &lt;~&gt;
                </button>
              )}

              <button
                onClick={() => handleTabClick("rounds")}
                className={activeTab === "rounds" ? "active" : ""}
              >
                Rounds &lt;~&gt;
              </button>
            </div>

            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="par !mx-8 text-justify">
                <p>{event.description}</p>
                <p>
                  <strong>Team members:</strong> {event.team || "N/A"}
                </p>
                <p>
                  <strong>Prize:</strong> {event.prize || "N/A"}
                </p>
              </div>
            )}

            {/* Internship Tab */}
            {activeTab === "internship" && event.intern?.length > 0 && (
              <div className="internship-content !mx-4">
                <p>
                  <strong>{event.intern.no_of_team}</strong>
                </p>
                {event.intern.map((intern, index) => (
                  <div key={index} className="intern-container">
                    <img
                      src={img4}
                      alt={intern.name}
                      className="intern-image"
                    />
                    <p className="intern-name">{intern.name}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Rounds Tab - Dynamically display rounds */}
            {activeTab === "rounds" && event.rounds?.length > 0 && (
              <div className="rounds-content para">
                {event.rounds.map((round, index) => (
                  <div className="round-card" key={index}>
                    <h3>{round.title}</h3>
                    <p>
                      <strong>Details:</strong> {round.content}
                    </p>
                    <p>
                      <strong>Duration:</strong> {round.duration}
                    </p>
                    <p>
                      <strong>Time:</strong> {round.time}
                    </p>
                    <p>
                      <strong>Venue:</strong> {round.venue}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Registration Button */}
            <button
              className="reg-button "
              onClick={() => navigate("/login")} // Example route, adjust to your app's registration route
            >
              Register{"<"}~{">"}
            </button>
          </div>
        </div>
      </div>
      {/* Ensure that contacts is an array before passing to Contact component */}
      {event.contact && event.contact.length > 0 && (
        <Contact contacts={event.contact} />
      )}
    </div>
  );
};

export default NoviceInit;
