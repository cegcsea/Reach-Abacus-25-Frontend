import { UserData } from "../../../context/userContext";
import { events } from "../../../constants/events.js";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Events = () => {
  const navigate = useNavigate();
  const { userEvents } = UserData();
  //const { userEvents, getEvents } = useContext(UserContext);

  const eventNames = (userEvents || []).map((event) => event.eventName);

  const allEvents = events.flatMap((category) => category.event);
  const filteredEvents = allEvents.filter((event) =>
    eventNames.includes(event.title)
  );
  const notIncludedEvents = allEvents.filter(
    (event) => !eventNames.includes(event.title)
  );

  // useEffect(() => {
  //   console.log(userEvents);
  //   console.log(eventNames);
  //   console.log(filteredEvents);
  //   console.log(notIncludedEvents);
  // }, [userEvents]);

  //console.log(userEvents);

  return (
    <div className="flex flex-col gap-5">
      {(filteredEvents || []).map((event, index) => {
        let { title, description, image, to } = event;
        return (
          <div
            className="card w-full flex md:flex-row flex-col border border-[#2F1B1B] bg-black"
            key={index}
          >
            <div className="w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0">
              <img
                src={image}
                alt="Event Img"
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center mt-10 items-center">
              <div>
                <h2 className="text-white font-medium text-2xl  border border-b border-x-0 border-t-0 p-3">
                  <span className="text-red-500">&#60;</span>
                  &nbsp;{title}&nbsp;
                  <span className="text-red-500">&#62;</span>
                </h2>
                <p className="text-[#e2e3e4] p-3 text-justify">
                  {(description||[]).slice(0, 150)}...&nbsp;
                  <span className="text-[#ABB2BF]">
                    <Link to={`/events/${to}`}>Read More</Link>
                  </span>
                </p>
                <p className="p-2 m-3 text-center mx-auto w-fit text-white text-sm md:text-lg font-semibold text-gray border rounded-lg border-gray-700 bg-slate-800/50">
                  <span className="text-lime-400 ">/*</span>
                  &nbsp;Registered for this event!&nbsp;
                  <span className="text-lime-400">*/</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
      {notIncludedEvents.map((event) => {
        let { title, description, image, to } = event;
        return (
          <div
            className="card w-full flex md:flex-row flex-col border border-[#2F1B1B] bg-black"
            key={event.id}
          >
            <div className="w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0">
              <img
                src={image}
                alt="Event Img"
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center mt-10 items-center">
              <div>
                <h2 className="text-white font-medium text-2xl border border-b border-x-0 border-t-0 p-3">
                  <span className="text-red-500">&#60;</span>
                  &nbsp;{title}&nbsp;
                  <span className="text-red-500">&#62;</span>
                </h2>
                <p className="text-[#e2e3e4] p-3 text-justify">
                  {(description || []).slice(0, 150)}...&nbsp;
                  <span className="text-[#ABB2BF]">
                    <Link to={`/events/${to}`}>Read More</Link>
                  </span>
                </p>
                <p className="p-2 m-3 mx-auto text-center w-fit text-white text-sm md:text-lg font-semibold text-gray border rounded-lg border-gray-700 bg-slate-800/50">
                  <span className="text-red-400">/*</span>
                  &nbsp;Not Registered for this event!&nbsp;
                  <span className="text-red-400">*/</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-full flex justify-end mt-5 ">
        <button
          className={`py-3 px-4 w-fit md:text-base mx-auto text-xs text-white border border-red-600 hover:bg-red-700/40 duration-150`}
          onClick={() => navigate("/events")}
        >
          Explore Events {"<"}~{">"}
        </button>
      </div>
    </div>
  );
};

export default Events;
