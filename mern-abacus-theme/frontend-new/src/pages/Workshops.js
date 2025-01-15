import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { workshopsReach as workshops } from "../constants/workshops";
import Contact from "../components/Contact";
import Session from "../components/Session";
const Workshops = () => {
  const navigate = useNavigate();
  const burgundy = "#800020";
  const white = "#fff";

  const contacts = [
    {
      id: 1,
      name: "Gautham",
      phone: "+1 234 567 890",
    },
    {
      id: 2,
      name: "Ganesh",
      phone: "+1 234 567 890",
    },
  ];

  return (
    <div className="bg-black min-h-screen flex justify-center items-center pt-8 ">
      <div className="w-full max-w-7xl px-4 ">
        <h2
          style={{ color: white }}
          className="my-5 mt-20 text-5xl font-bold text-[#fcfcfc] text-center mb-8 overflow-hidden [text-shadow:6px_2px_4px_#c03e3e]"
        >
          Workshops
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className=" bg-[#1d1d1d] text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow "
            >
              <h3
                className="text-xl font-semibold mb-4 border-b-2 pb-4"
                // style={{ borderBottomColor: burgundy }}
              >
                # {workshop.title}
              </h3>
              <div className="">
                <img
                  src={workshop.image}
                  alt={`Workshop ${workshop.id}`}
                  className="w-full h-48 object-contain rounded-md hover:bg-[#303030]"
                  onClick={() => {
                    navigate(`${workshop.to}`);
                  }}
                />
              </div>
              <p className="text-lg font-medium pt-4">{workshop.description}</p>
              <button
                // className="border-solid bg-black rounded-lg p-2 hover:bg-[#a92d2d] flex justify-start mx-auto"
                // className="text-red-500 font-bold text-base no-underline transition-colors duration-300 ease-in-out hover:underline"
                className="my-3 px-4 py-2 bg-gradient-to-br from-red-300 via-red-500 to-red-800 text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-shadow focus:outline-none focus:shadow-[0_0_15px_rgba(255,223,47,0.8)]"
                onClick={() => {
                  navigate(`${workshop.to}`);
                }}
              >
                Read More {`<~>`}
              </button>
            </div>
          ))}
        </div>
            <Session/>
        <div className="mt-10">
          <Contact contacts={contacts} />
        </div>
      </div>
    </div>
  );
};

export default Workshops;
