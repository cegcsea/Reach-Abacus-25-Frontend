import React, { use, useEffect, useState } from "react";
import "../../styles/Intern.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Contact from "../../components/Contact.js";
import img4 from "../../assets/images/internship.png";
import { events } from "../../constants/events.js";
import { UserData } from "../../context/userContext.js";
import { LoaderData } from "../../context/loaderContext.js";
import Loader from "../../components/Loader/Loader.jsx";
const NoviceInit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams(); // Ensure the route has a dynamic :id parameter
  const { userEvents, isAuth, eventRegister, getEvents } = UserData();
  //const selectedEvent = events.find((event) => event.to === id);
  const allEvents = events.flatMap((category) => category.event);

  const selectedEvent = allEvents.find((event) => {
    //console.log(`Checking event:`, event.to, "Expected:", id,event.to === id);
    return event.to === id;
  });

  useEffect(() => {
    getEvents();
  }, [userEvents]);

  const [activeTab, setActiveTab] = useState("description");
  if (!selectedEvent) {
    return (
      <h1 style={{ textAlign: "center", color: "#fff" }} className="my-32">
        Event Not Found {typeof id}
      </h1>
    );
  }

  // Check if the user is already registered for this event
  const isRegistered = (userEvents || []).some(
    (event) => event.eventName === selectedEvent.title
  );

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Handle event registration
  const handleRegister = async (e) => {
    e.preventDefault();
    //console.log(typeof selectedEvent.id);
    eventRegister({ eventId: Number(selectedEvent.id) });
  };
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#fff" }} className="heading">
        {selectedEvent.title}
      </h1>
      <div className="middle-section">
        <div className="content-container">
          <img src={selectedEvent.image} alt="Event" className="event-image" />
          <div className="content" style={{ color: "#fff" }}>
            <div className="tabs mx-auto text-sm lg:text-md lg:p-auto">
              <button
                onClick={() => handleTabClick("description")}
                className={activeTab === "description" ? "active" : ""}
              >
                Description &lt;~&gt;
              </button>
              {selectedEvent.intern?.length > 0 && (
                <button
                  onClick={() => handleTabClick("internship")}
                  className={activeTab === "internship" ? "active" : ""}
                >
                  Internship &lt;~&gt;
                </button>
              )}
              {selectedEvent.rounds?.length>0  &&( <button 
                onClick={() => handleTabClick("rounds")}
                className={activeTab === "rounds" ? "active" : ""}
              >
                Rounds &lt;~&gt;
              </button>
  )}
            </div>

            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="par !mx-8 text-justify">
                <p>{selectedEvent.description}</p>
                <p>
                  <strong>Team members:</strong> {selectedEvent.team || "N/A"}
                </p>
                <p>
                      <strong>Date:</strong> {selectedEvent.Date}
                    </p>
                    {selectedEvent.time ?<p><strong>Time:</strong> {selectedEvent.time}</p>:""}
                <p>
                  <strong>Prize:</strong> {selectedEvent.prize || "N/A"}
                </p>
              </div>
            )}

            {/* Internship Tab */}
            {activeTab === "internship" && selectedEvent.intern?.length > 0 && (
              <div className="internship-content !mx-4">
                <p>
                  <strong>{selectedEvent.intern.no_of_team}</strong>
                </p>
                {selectedEvent.intern.map((intern, index) => (
                  <div key={index} className="intern-container">
                    <img
                      src={intern.image}
                      alt={intern.name}
                      className="intern-image"
                    />
                    <p className="intern-name">{intern.name}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Rounds Tab */}
            {activeTab === "rounds" && selectedEvent.rounds?.length > 0 && (
              <div className="rounds-content para">
                {selectedEvent.rounds.map((round, index) => (
                  <div className="round-card" key={index}>
                    <h3>{round.title}</h3>
                    {round.content && (
                      <p>
                        <strong>Details:</strong> {round.content}
                      </p>
                    )}
                    {round.duration && (
                      <p>
                        <strong>Duration:</strong> {round.duration}
                      </p>
                    )}
                    {round.time && (
                      <p>
                        <strong>Time:</strong> {round.time}
                      </p>
                    )}
                    {/* Display sections if they exist */}
                    {round.sections && round.sections.length > 0 && (
                      <div style={{ marginTop: "20px" }}>
                        <h4 style={{ marginBottom: "15px", color: "#c0a068", fontSize: "1.2rem" }}>
                          Sections:
                        </h4>
                        {round.sections.map((section, sectionIndex) => (
                          <div 
                            key={sectionIndex} 
                            style={{ 
                              marginBottom: "20px", 
                              padding: "15px", 
                              backgroundColor: "#1a1a1a", 
                              borderRadius: "8px",
                              border: "1px solid #c0a068"
                            }}
                          >
                            <h5 style={{ color: "#c0a068", marginBottom: "10px", fontSize: "1.1rem" }}>
                              {sectionIndex + 1}. {section.title}
                            </h5>
                            {section.description && (
                              <p style={{ marginBottom: "8px" }}>
                                <strong>Description:</strong> {section.description}
                              </p>
                            )}
                            {section.points && (
                              <p style={{ marginBottom: "0" }}>
                                <strong>Points:</strong> {section.points}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* <p>
                      <strong>Venue:</strong> {round.venue}
                    </p> */}
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center">
            {isAuth && !isRegistered && (
              <button
                className="m-3 w-fit border px-4 py-2 text-white duration-150"
                style={{ borderColor: '#c0a068', color: '#c0a068' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(192, 160, 104, 0.2)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={handleRegister}
              >
                Register{"<"}~{">"}
              </button>
            )}
            </div>
          <div className="flex justify-center">
  {!isAuth && (
    <button
      className="m-3 w-fit border px-4 py-2 text-white duration-150"
      style={{ borderColor: '#c0a068', color: '#c0a068' }}
      onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(192, 160, 104, 0.2)'}
      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      onClick={() => navigate("/auth")}
    >
      Login to Register{"<"}~{">"}
    </button>
  )}
</div>

            {isRegistered && (
              <p className="p-2 w-full sm:w-fit flex justify-center items-center text-white text-lg font-semibold text-gray border rounded-lg bg-slate-800 mx-auto" style={{ borderColor: '#c0a068' }}>
                <span className="text-lime-400">/*</span>
                &nbsp;Already registered for this event!&nbsp;
                <span className="text-lime-400">*/</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* {selectedEvent.contact?.length > 0 && (
        <Contact contacts={selectedEvent.contact} />
      )} */}
    </div>
  );
};

export default NoviceInit;
