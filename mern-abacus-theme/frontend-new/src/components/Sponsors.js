import React from "react";
import spon1 from "../assets/Sponsors/spon11.jpg";
import spon3 from "../assets/Sponsors/tmb.png";
import e2w from "../assets/Reach/e2w.png";

const Sponsors = () => {
  const sponsors = [
    { image: spon1, name: "Motorq", desc: "Title Sponsor" },
    { image: e2w, name: "E2W STUDY", desc: "Educational Sponsor" },
    { image: spon3, name: "TMB", desc: "REACH'24 Sponsor" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6" >
      <h1 className="text-3xl font-bold text-center mb-8">Our Sponsors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="text-lg font-bold">{sponsor.name}</h2>
            <p className="text-gray-400">{sponsor.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
