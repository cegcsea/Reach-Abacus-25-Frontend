import React from "react";
import spon1 from "../assets/Sponsors/spon11.jpg";
import spon3 from "../assets/Sponsors/tmb.png";
import e2w from "../assets/Reach/e2w.png";
//import "../styles/Navbar.css";

const Sponsors = () => {
  const sponsors = [
    { image: spon1, name: "Motorq", desc: "Title Sponsor" },
    { image: e2w, name: "E2W STUDY", desc: "Educational Sponsor" },
    { image: spon3, name: "TMB", desc: "REACH'24 Sponsor" },
  ];

  return (
    <div className="bg-[#181720] font-serif p-6" id="sponsors">
      <h1 className="text-4xl font-bold text-[#fcfcfc] text-center mb-8 overflow-hidden ">
        Sponsors
      </h1>
      <div className="flex flex-col justify-between lg:flex-row mx-auto overflow-clip bg-[#181720] w-[100%]">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className=" bg-[#181720] bg-gradient-to-br from-[#000000] via-[#180e3b] to-[#2e244b]  text-[#f0f0f0] shadow-lg rounded-lg py-4 px-1 flex flex-col items-center transition-transform transform hover:scale-95 hover:shadow-2xl overflow-hidden border border-transparent mx-auto lg:w-[32%] w-[90%]  animated-border-box ease-in-out transition border border-solid  border-2 shadow-md shadow-[#d2c4fdba] m-3"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#d2c4fdba] to-transparent animate-glow "></div>
            <p className="text-xl text-gray-300 text-center z-10 font-bold ">
              {sponsor.desc}
            </p>
            <div class="border-t-2 border-b-2 border-gray-400 h-1 w-[90%]"></div>

            <div className="rounded-lg ">
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-full h-32 object-cover mb-4 rounded-2xl z-10 p-2 m-2"
              />
            </div>
            <div class="border-t-2 border-b-2 border-gray-400 h-1 w-[90%]"></div>

            <h2 className="text-lg font-bold mb-2 z-10">{sponsor.name}</h2>
          </div>
        ))}
      </div>
      <div className=" w-[100%] flex justify-center mt-4">
        <button className="bg-[#6c4bd1] bg-gradient-to-b from-[#8157ff] via-[#7751eb] via-[#7251df] via-[#6b4fc7] to-[#b09ee6f1] font-semibold text-white rounded-3xl py-3 px-4 hover:font-bold border border-solid border-black transition delay-50 ease-linear">
          Read More{" "}
        </button>
      </div>
    </div>
  );
};

export default Sponsors;