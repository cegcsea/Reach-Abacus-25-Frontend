import { UserData } from "../../../context/userContext";
import { workshopsReach, sessions } from "../../../constants/workshops.js";
import { Link, useNavigate } from "react-router-dom";

const Workshops = () => {
  const navigate = useNavigate();
  const { user, session } = UserData();

  const eventNames = (user?.WorkshopPayment || []).map(
    (event) => event.workshopId
  );

  const filteredEvents = (workshopsReach || []).filter((event) =>
    eventNames.includes(event.code)
  );

  const notIncludedEvents = (workshopsReach || []).filter(
    (event) => !eventNames.includes(event.code)
  );

  const registeredSession = (session || []).some(
    (event) => event.workshopId === 3
  );

  return (
    <div className="flex flex-col gap-5">
      {/* Registered Workshops */}
      {filteredEvents.map((event, index) => {
        const { title, content, image, to } = event;
        return (
          <div
            key={index}
            className="card w-full flex md:flex-row flex-col border border-[#2F2F2F]"
          >
            <div className="w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0 flex justify-center items-center">
              <img src={image} alt="Event" className="w-full object-cover" />
            </div>

            <div className="w-full md:w-3/5 flex justify-center items-center">
              <div>
                <h2 className="text-white font-medium text-2xl border border-b border-x-0 border-t-0 p-3">
                  <span className="text-[#c0a068]">&#60;</span>
                  &nbsp;{title}&nbsp;
                  <span className="text-[#c0a068]">&#62;</span>
                </h2>

                <p className="text-white p-3 text-justify">
                  {content.slice(0, 150)}...&nbsp;
                  <span className="text-[#c0a068]/80">
                    <Link to={`/workshops/${to}`}>Read More</Link>
                  </span>
                </p>

                <p className="p-2 m-3 text-center mx-auto w-fit text-white text-sm md:text-lg font-semibold border rounded-lg border-gray-700 bg-black">
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

      {/* Not Registered Workshops */}
      {notIncludedEvents.map((event, index) => {
        const { title, content, image, to } = event;
        return (
          <div
            key={index}
            className="card w-full flex md:flex-row flex-col border border-[#2F2F2F]"
          >
            <div className="w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0 flex justify-center items-center">
              <img src={image} alt="Event" className="w-full object-cover" />
            </div>

            <div className="w-full md:w-3/5 flex justify-center items-center">
              <div>
                <h2 className="text-white font-medium text-2xl border border-b border-x-0 border-t-0 p-3">
                  <span className="text-[#c0a068]">&#60;</span>
                  &nbsp;{title}&nbsp;
                  <span className="text-[#c0a068]">&#62;</span>
                </h2>

                <p className="text-white p-3 text-justify">
                  {content.slice(0, 150)}...&nbsp;
                  <span className="text-[#c0a068]/80">
                    <Link to={`/workshops/${to}`}>Read More</Link>
                  </span>
                </p>

                <p className="p-2 m-3 text-center mx-auto w-fit text-white text-sm md:text-lg font-semibold border rounded-lg border-gray-700 bg-black">
                  <span className="text-[#c0a068]">/*</span>
                  &nbsp;Not Registered for this workshop!&nbsp;
                  <span className="text-[#c0a068]">*/</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Session Card */}
      <div className="card w-full flex md:flex-row flex-col border border-[#2F2F2F]">
        <div className="w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0 flex justify-center items-center">
          <img
            src={sessions[0].image}
            alt="Session"
            className="w-full object-cover"
          />
        </div>

        <div className="w-full md:w-3/5 flex justify-center items-center">
          <div>
            <h2 className="text-white font-medium text-2xl border border-b border-x-0 border-t-0 p-3">
              <span className="text-[#c0a068]">&#60;</span>
              &nbsp;{sessions[0].title}&nbsp;
              <span className="text-[#c0a068]">&#62;</span>
            </h2>

            <p className="text-white p-3 text-justify">
              {sessions[0].content.slice(0, 150)}...&nbsp;
              <span className="text-[#c0a068]/80">
                <Link to="/workshops">Read More</Link>
              </span>
            </p>

            <p className="p-2 m-3 text-center mx-auto w-fit text-white text-sm md:text-lg font-semibold border rounded-lg border-gray-700 bg-black">
              {registeredSession ? (
                <>
                  <span className="text-green-400">/*</span>
                  &nbsp;Registered for this session!&nbsp;
                  <span className="text-green-400">*/</span>
                </>
              ) : (
                <>
                  <span className="text-[#c0a068]">/*</span>
                  &nbsp;Not Registered for this session!&nbsp;
                  <span className="text-[#c0a068]">*/</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Explore Button */}
      <div className="w-full mt-5 mx-auto">
        <button
          onClick={() => navigate("/workshops")}
          className="py-3 px-4 w-fit md:text-base text-xs text-white border border-[#c0a068]
                     hover:bg-[#c0a068]/40 duration-150"
        >
          Explore Workshops {"<"}~{">"}
        </button>
      </div>
    </div>
  );
};

export default Workshops;
