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
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-black text-center mb-8">Our Sponsors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-black text-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-600"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-32 h-32 object-contain mb-4 rounded-md border border-gray-500"
            />
            <h2 className="text-lg font-bold mb-2">{sponsor.name}</h2>
            <p className="text-sm text-gray-300 text-center">{sponsor.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
