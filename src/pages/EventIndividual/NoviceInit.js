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
  const { id } = useParams(); 
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
              {selectedEvent.rounds?.length > 0 && (
                <button
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
                {selectedEvent.time ? (
                  <p>
                    <strong>Time:</strong> {selectedEvent.time}
                  </p>
                ) : (
                  ""
                )}
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
                    <p>
                      <strong>Details:</strong> {round.content}
                    </p>
                    <p>
                      <strong>Duration:</strong> {round.duration}
                    </p>

                    <p>
                      <strong>Time:</strong> {round.time}
                    </p>
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
                  className="m-3 w-fit border border-[#c72727] px-4 py-2 text-white duration-150 hover:bg-[#fb525233] "
                  //onClick={handleRegister}
                  onClick={() => {
                    navigate("/events/ml-conquer/payment");
                  }}
                >
                  Register{"<"}~{">"}
                </button>
              )}
            </div>
            <div className="flex justify-center">
              {!isAuth && (
                <button
                  className="m-3 w-fit border border-[#c72727] px-4 py-2 text-white duration-150 hover:bg-[#ff4d4d]"
                  onClick={() => navigate("/login")}
                >
                  Login to Register{"<"}~{">"}
                </button>
              )}
            </div>

            {isRegistered && (
              <p className="p-2 w-full sm:w-fit flex justify-center items-center text-white text-lg font-semibold text-gray border rounded-lg border-[#c72727] bg-slate-800 mx-auto">
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
