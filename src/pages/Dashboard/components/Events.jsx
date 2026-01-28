import { UserData } from "../../../context/userContext";
import { events } from "../../../constants/events.js";
import { Link, useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  const { userEvents } = UserData();

  const eventNames = (userEvents || []).map((event) => event.eventName);

  const allEvents = events.flatMap((category) => category.event);
  const filteredEvents = allEvents.filter((event) =>
    eventNames.includes(event.title)
  );
  const notIncludedEvents = allEvents.filter(
    (event) => !eventNames.includes(event.title)
  );

  return (
    <div className="flex flex-col gap-5">
      {/* ---------------- REGISTERED EVENTS ---------------- */}
      {(filteredEvents || []).map((event, index) => {
        let { title, description, image, to } = event;
        return (
          <div
            className="card w-full flex md:flex-row flex-col border border-[#c0a068] bg-white/5 backdrop-blur-md"
            key={index}
          >
            {/* Image Section */}
            <div className="w-full md:w-2/5 p-5 border-[#c0a068] border-b md:border-b-0 md:border-r">
              <img
                src={image}
                alt="Event Img"
                className="w-full object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-3/5 flex flex-col justify-center mt-10 items-center">
              <div>
                {/* Title */}
                <h2 className="text-[#ffffffe6] font-medium text-2xl border-b border-[#c0a068] p-3">
                  <span className="text-[#c0a068]">&#60;</span>
                  &nbsp;{title}&nbsp;
                  <span className="text-[#c0a068]">&#62;</span>
                </h2>
                
                {/* Description */}
                <p className="text-[#ffffffe6] p-3 text-justify">
                  {(description || []).slice(0, 150)}...&nbsp;
                  <span className="text-[#c0a068] hover:underline cursor-pointer">
                    <Link to={`/events/${to}`}>Read More</Link>
                  </span>
                </p>
                
                {/* Status Badge: Registered */}
                <p className="p-2 m-3 text-center mx-auto w-fit text-[#ffffffe6] text-sm md:text-lg font-semibold border rounded-lg border-[#c0a068] bg-[#c0a068]/10">
                  <span className="text-[#c0a068]">/*</span>
                  &nbsp;Registered for this event!&nbsp;
                  <span className="text-[#c0a068]">*/</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* ---------------- UNREGISTERED EVENTS ---------------- */}
      {notIncludedEvents.map((event) => {
        let { title, description, image, to } = event;
        return (
          <div
            className="card w-full flex md:flex-row flex-col border border-[#c0a068] bg-white/5 backdrop-blur-md"
            key={event.id || title}
          >
            {/* Image Section */}
            <div className="w-full md:w-2/5 p-5 border-[#c0a068] border-b md:border-b-0 md:border-r">
              <img
                src={image}
                alt="Event Img"
                className="w-full object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-3/5 flex flex-col justify-center mt-10 items-center">
              <div>
                {/* Title */}
                <h2 className="text-[#ffffffe6] font-medium text-2xl border-b border-[#c0a068] p-3">
                  <span className="text-[#c0a068]">&#60;</span>
                  &nbsp;{title}&nbsp;
                  <span className="text-[#c0a068]">&#62;</span>
                </h2>
                
                {/* Description */}
                <p className="text-[#ffffffe6] p-3 text-justify">
                  {(description || []).slice(0, 150)}...&nbsp;
                  <span className="text-[#c0a068] hover:underline cursor-pointer">
                    <Link to={`/events/${to}`}>Read More</Link>
                  </span>
                </p>
                
                {/* Status Badge: Not Registered */}
                <p className="p-2 m-3 mx-auto text-center w-fit text-[#ffffffe6] text-sm md:text-lg font-semibold border rounded-lg border-[#c0a068] bg-[#c0a068]/10">
                  <span className="text-[#aa8c2c]">/*</span>
                  &nbsp;Not Registered for this event!&nbsp;
                  <span className="text-[#aa8c2c]">*/</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* ---------------- EXPLORE BUTTON ---------------- */}
      <div className="w-full flex justify-end mt-5">
        <button
          className="py-3 px-4 w-fit md:text-base mx-auto text-xs text-[#ffffffe6] border border-[#c0a068] hover:bg-[#c0a068]/20 duration-150"
          onClick={() => navigate("/events")}
        >
          Explore Events {"<"}~{">"}
        </button>
      </div>
    </div>
  );
};

export default Events;