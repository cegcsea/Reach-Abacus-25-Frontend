import { UserData } from "../../../context/userContext";
import { workshopsReach, sessions } from "../../../constants/workshops.js";
import { Link, useNavigate } from "react-router-dom";

const Workshops = () => {
  const navigate = useNavigate();
  const { user, session } = UserData();

  const eventNames = (user?.WorkshopPayment || []).map(
    (event) => event.workshopId,
  );
  const filteredEvents = (workshopsReach || []).filter((event) =>
    eventNames.includes(event.code),
  );
  const notIncludedEvents = (workshopsReach || []).filter(
    (event) => !eventNames.includes(event.code),
  );

  const registeredSession = (session || []).some(
    (event) => event.workshopId === 3,
  );

  return (
    <div className="flex flex-col gap-5">
      {/* ---------------- REGISTERED / PAYMENT PENDING WORKSHOPS ---------------- */}
      {filteredEvents.map((event, index) => {
        let { title, content, image, to } = event;
        return (
          <div
            className="card w-full flex md:flex-row flex-col border border-[#c0a068] bg-white/5 backdrop-blur-md"
            key={index}
          >
            <div className="w-full md:w-2/5 p-5 border-[#c0a068] border-b md:border-b-0 md:border-r flex justify-center items-center">
              <img
                src={image}
                alt="Event Image"
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
              <div>
                <h2 className="text-[#ffffffe6] font-medium text-2xl border-b border-[#c0a068] p-3">
                  <span className="text-[#c0a068]">&#60;</span>
                  &nbsp;{title}&nbsp;
                  <span className="text-[#c0a068]">&#62;</span>
                </h2>
                <p className="text-[#ffffffe6] p-3 text-justify">
                  {content.slice(0, 150)}...&nbsp;
                  <span className="text-[#c0a068] hover:underline">
                    <Link to={`/workshops/${to}`}>Read More</Link>
                  </span>
                </p>
                {/* Status Badge: Check Payment */}
                <p className="p-2 m-3 text-center mx-auto w-fit text-[#ffffffe6] text-sm md:text-lg font-semibold border rounded-lg border-[#c0a068] bg-[#c0a068]/10">
                  <Link to={`/workshops/${to}`}>
                    <span className="text-[#c0a068]">/*</span>
                    &nbsp;Check your payment status!&nbsp;
                    <span className="text-[#c0a068]">*/</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* ---------------- UNREGISTERED WORKSHOPS ---------------- */}
      {notIncludedEvents.map((event, index) => {
        let { title, content, image, to } = event;
        return (
          <div
            className="card w-full flex md:flex-row flex-col border border-[#c0a068] bg-white/5 backdrop-blur-md"
            key={index}
          >
            <div className="w-full md:w-2/5 p-5 border-[#c0a068] border-b md:border-b-0 md:border-r flex justify-center items-center">
              <img
                src={image}
                alt="Event Image"
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
              <div>
                <h2 className="text-[#ffffffe6] font-medium text-2xl border-b border-[#c0a068] p-3">
                  <span className="text-[#c0a068]">&#60;</span>
                  &nbsp;{title}&nbsp;
                  <span className="text-[#c0a068]">&#62;</span>
                </h2>
                <p className="text-[#ffffffe6] p-3 text-justify">
                  {content.slice(0, 150)}...&nbsp;
                  <span className="text-[#c0a068] hover:underline">
                    <Link to={`/workshops/${to}`}>Read More</Link>
                  </span>
                </p>
                {/* Status Badge: Not Registered */}
                <p className="p-2 m-3 text-center mx-auto w-fit text-[#ffffffe6] text-sm md:text-lg font-semibold border rounded-lg border-[#c0a068] bg-[#c0a068]/10">
                  <span className="text-[#aa8c2c]">/*</span>
                  &nbsp;Not Registered for this workshop!&nbsp;
                  <span className="text-[#aa8c2c]">*/</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* ---------------- SESSIONS CARD ---------------- */}
      <div className="card w-full flex md:flex-row flex-col border border-[#c0a068] bg-white/5 backdrop-blur-md">
        <div className="w-full md:w-2/5 p-5 border-[#c0a068] border-b md:border-b-0 md:border-r flex justify-center items-center">
          <img
            src={sessions[0].image}
            alt="Event Image"
            className="w-full object-cover"
          />
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
          <div>
            <h2 className="text-[#ffffffe6] font-medium text-2xl border-b border-[#c0a068] p-3">
              <span className="text-[#c0a068]">&#60;</span>
              &nbsp;{sessions[0].title}&nbsp;
              <span className="text-[#c0a068]">&#62;</span>
            </h2>
            <p className="text-[#ffffffe6] p-3 text-justify">
              {sessions[0].content.slice(0, 150)}...&nbsp;
              <span className="text-[#c0a068] hover:underline">
                <Link to={`/workshops`}>Read More</Link>
              </span>
            </p>
            {/* Status Badge: Session Registration */}
            <p className="p-2 m-3 text-center w-fit mx-auto text-[#ffffffe6] text-sm md:text-lg font-semibold border rounded-lg border-[#c0a068] bg-[#c0a068]/10">
              {registeredSession ? (
                <>
                  <span className="text-[#c0a068]">/*</span>
                  &nbsp;Registered for this session!&nbsp;
                  <span className="text-[#c0a068]">*/</span>
                </>
              ) : (
                <>
                  <span className="text-[#aa8c2c]">/*</span>
                  &nbsp;Not Registered for this session!&nbsp;
                  <span className="text-[#aa8c2c]">*/</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- EXPLORE BUTTON ---------------- */}
      <div className="w-full mt-5 mx-auto flex justify-end">
        <button
          className="py-3 px-4 w-fit md:text-base text-xs text-[#ffffffe6] border border-[#c0a068] hover:bg-[#c0a068]/20 duration-150"
          onClick={() => navigate("/workshops")}
        >
          Explore Workshops {"<"}~{">"}
        </button>
      </div>
    </div>
  );
};

export default Workshops;
