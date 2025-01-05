import React from "react";
import { workshops } from "../constants/workshops";
import { useNavigate } from "react-router-dom";

const Workshops = () => {
    const navigate=useNavigate();
  return (
    <div className="text-white font-semibold text-3xl mt-40">
      <h1 className="text-5xl overflow-hidden items-start  lg:mx-0 w-[100%] ">
        Workshops
      </h1>
      <div className="flex flex-col xl:flex-row flex-wrap mt-10">
        {workshops.map((workshop, index) => (
          <div
            key={index}
            className="border border-solid border-red-900 w-[70%] lg:w-[45%]  xl:h-auto my-3 mx-auto bg-gradient-to-br from-[#421919] via-[#7d1a1a] to-[#460d0d] p-5 rounded-xl overflow-hidden flex flex-col "
          >
            <img
              src={workshop.image}
              alt={`${workshop.title}`}
              className="object-contain border-solid border-[#b5b1b1] border-[3px] my-2 rounded-lg h-[150px] md:h-[250px] lg:h-[70%]"
            />

            <h1 className="flex items-center justify-center text-xl font-bold text-center mt-3 overflow-hidden">
              {workshop.title}
            </h1>
            <button className="bg-white rounded-xl text-sm md:text-xl text-red-600 w-[70%] mt-4 xl:w-[30%] mx-auto overflow-hidden xl:p-3 py-auto " onClick={()=>{navigate(`${workshop.to}`)}}>
              Read More {`<~>`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;
