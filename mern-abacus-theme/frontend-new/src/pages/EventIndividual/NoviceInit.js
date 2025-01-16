import React, { useState } from "react";
import "../../styles/Intern.css";
import img1 from "../../assets/images/events pic/noviceint.jpg";
import img2 from "../../assets/images/events pic/internship.png";
import { events } from "../../constants/events.js";
import { useNavigate, useParams } from "react-router-dom";
import { UserData } from "../../context/userContext.js";

const NoviceInit = () => {
  const navigate = useNavigate();
  //const { id } = useParams();
  const id=""
  const [activeTab, setActiveTab] = useState("description"); // description, internship, or rounds
  const { userEvents, isAuth, eventRegister } = UserData();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const selectedEvent = events.find((event) => event.to === id);
  const isRegistered = userEvents.some(
    (event) => event.eventName === selectedEvent.title
  );

  const handleRegister = () => {
    eventRegister({ eventId: selectedEvent.code });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#fff" }} className="heading">
        /Novice-Init
      </h1>
      <div className="middle-section">
        <div className="content-container">
          <img
            src={activeTab === "internship" ? img1 : img1}
            alt="Event"
            className="event-image"
          />
          <div className="content" style={{ color: "#fff" }}>
            <div className="tabs mx-auto text-sm lg:text-md lg:p-auto">
              <button
                onClick={() => handleTabClick("description")}
                className={activeTab === "description" ? "active" : ""}
              >
                Description &lt;~&gt;
              </button>
              <button
                onClick={() => handleTabClick("internship")}
                className={activeTab === "internship" ? "active" : ""}
              >
                Internship &lt;~&gt;
              </button>
              <button
                onClick={() => handleTabClick("rounds")}
                className={activeTab === "rounds" ? "active" : ""}
              >
                Rounds &lt;~&gt;
              </button>
            </div>

            {activeTab === "description" && (
              <div className="par !mx-8 text-justify">
                <p>
                  An all-night Coding Extravaganza featuring diverse challenges
                  in DSA, fostering teamwork and endurance. Participants
                  collaborate across different CS domains, tackling various
                  tracks in this tech marathon.
                </p>
                <p>
                  <strong>Team members:</strong> Two to three members
                </p>
                <p>
                  <strong>Winners:</strong> Top 3 + Best Women's team + Best
                  First year's team
                </p>
              </div>
            )}

            {activeTab === "internship" && (
              <div className="internship-content !mx-4">
                <p>
                  <strong>
                    Top 3 of the event will get internship opportunities!
                  </strong>
                </p>
                <div className="logo-container">
                  <img src={img2} alt="RootQuotient" className="logo" />
                  <p className="logo-text">ROOTQUOTIENT</p>
                </div>
              </div>
            )}

            {activeTab === "rounds" && (
              <div className="rounds-content para">
                <div className="round-card">
                  <h3>Round 1</h3>
                  <p>
                    <strong>Rolling Event (30 minutes)</strong>
                  </p>
                  <p>
                    <strong>What to expect?</strong> Exciting coding scenarios.
                  </p>
                  <p>
                    <strong>Location:</strong> Second Floor Lab, DCSE
                  </p>
                  <p>
                    <strong>Date:</strong> 22 March 2024
                  </p>
                  <p>
                    <strong>Duration:</strong> 9:00 AM to 1:30 PM
                  </p>
                </div>
                <div className="round-card">
                  <h3>Round 2</h3>
                  <p>
                    <strong>Coding Challenges</strong>
                  </p>
                  <p>
                    <strong>What to expect?</strong> Advanced problem-solving
                    tasks.
                  </p>
                  <p>
                    <strong>Location:</strong> Ground Floor Lab, DCSE
                  </p>
                  <p>
                    <strong>Date:</strong> 22 to 23 March 2024
                  </p>
                  <p>
                    <strong>Duration:</strong> 9:00 PM to 6:00 AM
                  </p>
                </div>
              </div>
            )}
            {/* <div className="but">
              <button className="register-button">Registrations Closed &lt;~&gt;</button>
            </div> */}
            {isAuth && !isRegistered && (
              <button
                className="m-3 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]"
                onClick={handleRegister}
              >
                Register{"<"}~{">"}
              </button>
            )}
            {!isAuth && (
              <button
                className="m-3 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]"
                onClick={() => navigate("/login")}
              >
                Login to Register{"<"}~{">"}
              </button>
            )}
            {isRegistered && (
              <p className="p-2 w-full sm:w-fit flex justify-center items-center text-white text-lg font-semibold text-gray border rounded-lg border-gray-700 bg-slate-800">
                <span className="text-lime-400">/*</span>
                &nbsp;Already registered for this event!&nbsp;
                <span className="text-lime-400">*/</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoviceInit;
