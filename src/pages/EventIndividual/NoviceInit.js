import React, { useEffect, useState } from "react";
import "../../styles/Intern.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Contact from "../../components/Contact.js";
import { events, REGISTRATIONS_CLOSED } from "../../constants/events.js";
import { UserData } from "../../context/userContext.js";
import { LoaderData } from "../../context/loaderContext.js";
import Loader from "../../components/Loader/Loader.jsx";
import { checkCA20Events } from "../../utils/register_ambassador.js";
import toast from "react-hot-toast";
const NoviceInit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Ensure the route has a dynamic :id parameter
  const { user, userEvents, isAuth, eventRegister, getEvents } = UserData();
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
  const [activeRound, setActiveRound] = useState(0);

  if (!selectedEvent) {
    return (
      <h1 style={{ textAlign: "center", color: "#fff" }} className="my-32">
        Event Not Found {typeof id}
      </h1>
    );
  }

  // Check if the user is already registered for this event
  const isRegistered = (userEvents || []).some(
    (event) => event.eventName === selectedEvent.title,
  );

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Handle event registration
  const handleRegister = async (e) => {
    e.preventDefault();

    // If the event has a formLink (pre-events), open it in a new tab
    if (selectedEvent.formLink) {
      window.open(selectedEvent.formLink, "_blank");
      toast.success("Opening registration form in new tab!");
      return;
    }

    // Otherwise, use the regular event registration
    try {
      await eventRegister({ eventId: Number(selectedEvent.id) });
      // Check CA milestone - uses authenticated user from token
      await checkCA20Events();
      // Success toast already handled in eventRegister
      // Refresh events to update UI
      await getEvents();
    } catch (error) {
      // Error already handled in context
    }
  };
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="heading-container">
        <h1 className="heading-title">{selectedEvent.title}</h1>
        {selectedEvent.subtitle && (
          <h2 className="heading-subtitle">{selectedEvent.subtitle}</h2>
        )}
      </div>
      <div className="middle-section">
        <div className="content-container">
          <img src={selectedEvent.image} alt="Event" className="event-image" />
          <div className="content" style={{ color: "#fff" }}>
            <div className="tabs mx-auto text-sm lg:text-md lg:p-auto">
              <button
                onClick={() => handleTabClick("description")}
                className={activeTab === "description" ? "active" : ""}
              >
                Description
              </button>
              {selectedEvent.highlights?.length > 0 && (
                <button
                  onClick={() => handleTabClick("highlights")}
                  className={activeTab === "highlights" ? "active" : ""}
                >
                  Highlights
                </button>
              )}
              {selectedEvent.whyShouldYouParticipate?.length > 0 && (
                <button
                  onClick={() => handleTabClick("why")}
                  className={activeTab === "why" ? "active" : ""}
                >
                  Why Participate
                </button>
              )}
              {selectedEvent.aboutCongruent && (
                <button
                  onClick={() => handleTabClick("about")}
                  className={activeTab === "about" ? "active" : ""}
                >
                  About Partner
                </button>
              )}
              {selectedEvent.intern?.length > 0 && (
                <button
                  onClick={() => handleTabClick("internship")}
                  className={activeTab === "internship" ? "active" : ""}
                >
                  Internship
                </button>
              )}
              {selectedEvent.rounds?.length > 0 && (
                <button
                  onClick={() => handleTabClick("rounds")}
                  className={activeTab === "rounds" ? "active" : ""}
                >
                  Rounds
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
                {selectedEvent.mode && (
                  <p>
                    <strong>Mode:</strong> {selectedEvent.mode}
                  </p>
                )}
                {selectedEvent.registrationDeadline && (
                  <p>
                    <strong>Registration Deadline:</strong>{" "}
                    {selectedEvent.registrationDeadline}
                  </p>
                )}
                {selectedEvent.recruitmentPartner && (
                  <p>
                    <strong>Recruitment Partner:</strong>{" "}
                    {selectedEvent.recruitmentPartner}
                  </p>
                )}
                <p>
                  <strong>Prize:</strong> {selectedEvent.prize || "N/A"}
                </p>
              </div>
            )}

            {/* Highlights Tab */}
            {activeTab === "highlights" &&
              selectedEvent.highlights?.length > 0 && (
                <div className="par !mx-8 text-justify">
                  <h3 className="text-2xl font-bold mb-4 text-[#c0a068]">
                    Event Highlights
                  </h3>
                  <ul className="space-y-3">
                    {selectedEvent.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-white"
                      >
                        <span className="text-[#c0a068] text-xl">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Why Participate Tab */}
            {activeTab === "why" &&
              selectedEvent.whyShouldYouParticipate?.length > 0 && (
                <div className="par !mx-8 text-justify">
                  <h3 className="text-2xl font-bold mb-4 text-[#c0a068]">
                    Why Should You Participate?
                  </h3>
                  <ul className="space-y-3">
                    {selectedEvent.whyShouldYouParticipate.map(
                      (reason, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-white"
                        >
                          <span className="text-[#c0a068] text-xl">→</span>
                          <span>{reason}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}

            {/* About Partner Tab */}
            {activeTab === "about" && selectedEvent.aboutCongruent && (
              <div className="par !mx-8 text-justify">
                <h3 className="text-2xl font-bold mb-4 text-[#c0a068]">
                  About {selectedEvent.recruitmentPartner || "Our Partner"}
                </h3>
                <p className="text-white leading-relaxed">
                  {selectedEvent.aboutCongruent}
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
                {/* Round Sub-Tabs */}
                {selectedEvent.rounds.length > 1 && (
                  <div className="flex justify-center gap-3 mb-6 flex-wrap">
                    {selectedEvent.rounds.map((round, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveRound(index)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-[#c0a068] ${
                          activeRound === index
                            ? "bg-[#c0a068] text-white shadow-[0_0_10px_rgba(192,160,104,0.4)] transform scale-105"
                            : "bg-transparent text-[#c0a068] hover:bg-[#c0a06820]"
                        }`}
                      >
                        {round.title.split("–")[0].trim() ||
                          `Round ${index + 1}`}
                      </button>
                    ))}
                  </div>
                )}

                {/* Active Round Content */}
                {(() => {
                  const round =
                    selectedEvent.rounds[activeRound] ||
                    selectedEvent.rounds[0];
                  return (
                    <div className="round-card text-justify" key={activeRound}>
                      <h3 className="text-xl font-bold text-[#c0a068] mb-4">
                        {round.title}
                      </h3>
                      <p className="mb-3">
                        <strong className="text-white">Details:</strong>{" "}
                        {round.content}
                      </p>
                      {round.duration && (
                        <p className="mb-2">
                          <strong className="text-white">Duration:</strong>{" "}
                          {round.duration}
                        </p>
                      )}
                      <p className="mb-2">
                        <strong className="text-white">Time:</strong>{" "}
                        {round.time}
                      </p>
                      <p className="mb-2">
                        <strong className="text-white">Venue:</strong>{" "}
                        {round.venue}
                      </p>
                      {round.eligibility && (
                        <p className="mb-2">
                          <strong className="text-white">Eligibility:</strong>{" "}
                          {round.eligibility}
                        </p>
                      )}
                      {round.whatToExpect && (
                        <p className="mb-2">
                          <strong className="text-white">
                            What to Expect:
                          </strong>{" "}
                          {round.whatToExpect}
                        </p>
                      )}
                      {round.note && (
                        <p className="mt-4 p-3 bg-[#c0a06815] border-l-2 border-[#c0a068] rounded text-sm text-gray-200">
                          <strong className="text-[#c0a068]">📌 Note:</strong>{" "}
                          {round.note}
                        </p>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}
            <div className="flex justify-center">
              {REGISTRATIONS_CLOSED ? (
                <div className="p-3 w-full sm:w-fit flex justify-center items-center text-red-400 text-lg font-semibold border-2 rounded-lg border-red-500 bg-red-500/20 mx-auto">
                  Registration Closed
                </div>
              ) : (
                <>
                  {isAuth && (!isRegistered || selectedEvent.formLink) && (
                    <button
                      className="m-3 w-fit border border-[#c0a068] px-4 py-2 text-white duration-150 hover:bg-[#c0a068] "
                      onClick={handleRegister}
                    >
                      {selectedEvent.formLink
                        ? "Register via Form"
                        : "Register"}
                    </button>
                  )}
                  {isAuth && isRegistered && !selectedEvent.formLink && (
                    <p className="p-2 w-full sm:w-fit flex justify-center items-center text-white text-lg font-semibold text-gray border rounded-lg border-[#c0a068] bg-[#1a1a1a] mx-auto">
                      <span className="text-[#c0a068]">/*</span>
                      &nbsp;Already registered for this event!&nbsp;
                      <span className="text-[#c0a068]">*/</span>
                    </p>
                  )}
                </>
              )}
            </div>
            <div className="flex justify-center">
              {!REGISTRATIONS_CLOSED && !isAuth && !selectedEvent.formLink && (
                <button
                  className="m-3 w-fit border border-[#c0a068] px-4 py-2 text-white duration-150 hover:bg-[#c0a068]"
                  onClick={() => navigate("/auth")}
                >
                  Login to Register
                </button>
              )}
              {!REGISTRATIONS_CLOSED && !isAuth && selectedEvent.formLink && (
                <button
                  className="m-3 w-fit border border-[#c0a068] px-4 py-2 text-white duration-150 hover:bg-[#c0a068]"
                  onClick={() => window.open(selectedEvent.formLink, "_blank")}
                >
                  Register via Form
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedEvent.contact?.length > 0 && (
        <Contact contacts={selectedEvent.contact} />
      )}
    </div>
  );
};

export default NoviceInit;
