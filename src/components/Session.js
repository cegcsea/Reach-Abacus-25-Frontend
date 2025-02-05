import React from "react";
import image from "../assets/Reach/placement.svg";
import { UserData } from "../context/userContext.js";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import Contact from "../components/Contact";

function Session() {
  const { freeWorkshopRegister, isAuth, user, session } = UserData();
  const navigate = useNavigate();

  const handleRegister = (code) => {
    freeWorkshopRegister({ workshopId: code });
  };
  //console.log(session);
  const contacts = [
    {
      id: 1,
      name: "Sunil Kumar",
      phone: "+91 6383123505",
    },
    { id: 2, name: "Smrithi", phone: "+91 8072869255" },
  ];
  const isRegistered =
    Array.isArray(session) &&
    session.some((workshop) => workshop.workshopId === 3);
  const contact = [
    {
      id: 1,
      name: "Sunil Kumar",
      phone: "+91 6383123505",
    },
    { id: 2, name: "Smrithi", phone: "+91 8072869255" },
  ];
  return (
    <div className="border-[2px] rounded-xl border-[#FF5555] border-shadow border-shadow-lg bg-[#1d1d1d] my-5">
      <div className="p-5 sm:py-8 sm:px-10 flex gap-3 flex-col ">
        <h1 className="text-4xl lg:text-5xl md:text-4xl sm:text-3xl text-white overflow-hidden">
          <span className="[text-shadow:6px_2px_4px_#c03e3e] text-5xl font-bold text-[#fcfcfc] text-center ">
            Session
          </span>
        </h1>
      </div>
      <div className="px-2 sm:px-0 !p-0 !m-0 ">
        <div className=" flex sm:flex-row !p-0 !m-0 flex-col bg-[#1d1d1d] overflow-hidden ">
          <div className="w-full sm:w-2/5 p-5 border !border-r-0 border-b sm:border-r sm:border-y-0 border-l-0 flex justify-center items-center ">
            <img
              src={image}
              alt="Event Image"
              className="w-2/4 object-cover "
            />
          </div>
          <div className="w-full sm:w-3/5 flex flex-col justify-between mb-10 pb-5">
            <div className="text-justify xl:!mt-20 ">
              <h2 className="text-[#c9c9c9] font-semibold text-2xl border border-b border-x-0 border-t-0 p-3">
                #Placement_Session
              </h2>
              <p className="text-[#c9c9c9]  p-3 text-base">
                <span className="font-bold text-lg">Skill Refinement: </span>
                <br />
                Participate in focused sessions on interview techniques,
                enhancing your confidence and readiness for placement scenarios.
              </p>
              <p className="text-[#c9c9c9] p-3 text-base">
                <span className="font-bold text-lg">Industry Insights: </span>
                <br />
                Stay informed about current hiring trends and industry
                expectations, positioning yourself effectively during placement
                processes.
              </p>
              <p className="text-[#c9c9c9] p-3 text-base">
                <span className="font-bold text-lg">Mock Interviews: </span>
                <br />
                Engage in simulated interview experiences, receiving valuable
                feedback to optimize your performance in real-world placements.
              </p>
              {isAuth &&
                user.hostCollege ===
                  "Government College of Technology, Coimbatore" && (
                  <p className="text-[#F0F0F0] p-3 text-base flex gap-2 items-center">
                    <span className="text-2xl text-[#FF8888]">
                      <FaLocationDot />
                    </span>
                    Seminar hall CSE department, GCT
                  </p>
                )}
            </div>
            {!isAuth && (
              <button
                className="m-3 mb-7 w-fit border border-[#FF5555] px-4 py-2 text-white duration-150 hover:bg-[#FF555522] sm:self-start self-center"
                onClick={() => navigate("/login")}
              >
                Login to Register {"<"}~{">"}
              </button>
            )}
            {isAuth && !isRegistered && (
              <button
                className="m-3 mb-7 w-fit border border-[#FF5555] px-4 py-2 text-white duration-150 hover:bg-[#FF555522] sm:self-start self-center"
                onClick={() => handleRegister(3)}
              >
                Register {"<"}~{">"}
              </button>
            )}
            {isAuth && isRegistered && (
              <p className="p-2 m-3 w-full sm:w-fit flex justify-center items-center text-white text-lg font-semibold text-gray border rounded-lg border-gray-700 bg-[#3A3A3A]">
                <span className="text-[#88FF88]">/*</span>
                &nbsp;Already registered for this session!&nbsp;
                <span className="text-[#88FF88]">*/</span>
              </p>
            )}
          </div>
        </div>

        <div className="">
          <Contact contacts={contact} />
        </div>
      </div>
      <div className="mt-10">
        <Contact contacts={contacts} />
      </div>
    </div>
  );
}

export default Session;
