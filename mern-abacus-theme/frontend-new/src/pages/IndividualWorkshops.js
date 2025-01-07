import React from "react";
import { useParams } from "react-router-dom";
import { workshopsReach as workshops } from "../constants/workshops";

const IndividualWorkshops = () => {
  const { id } = useParams();
  const workshop = workshops.find((ws) => ws.to === id);
  console.log(workshop, id);
  if (!workshop) {
    return <div className="text-white">Workshop not found!</div>;
  }

  return (
    <div className="lg:mt-24 mt-20 py-8 sm:px-10 flex gap-3 flex-col m-6 lg:m-10 bg-[#1d1d1d]">
      <p className="lg:text-4xl text-lg text-white overflow-hidden lg:ml-0 mx-auto">
        <span className="text-[#c53939] overflow-hidden">/</span>
        <span className="text-white overflow-hidden font-bold my-5  text-center mb-8 [text-shadow:6px_2px_4px_#c03e3e]"> {workshop.title}</span>
      </p>

      <div className="flex flex-col lg:flex-row mt-8 ">
        <img
          src={workshop.image}
          alt={`workshop: ${workshop.title}`}
          className="w-[90%] lg:w-[35%] h-[20vh] lg:h-[60vh] object-contain rounded-md mx-[5%] justify-center items-center flex "
        />
        <div className="w-[90%] mx-auto lg:mx-0 lg:w-[55%]">
          <div className="flex mx-auto my-3 mb-8  text-md lg:text-2xl font-semibold">
            What to expect{" "}
            <div className="bg-[#c53939] h-[3px] w-[20%] mx-2 my-auto"></div>
          </div>
          <p className="flex justify-start text-justify  text-md lg:text-lg ">
            {workshop.content}
          </p>
          <div className="my-6">
            <div className="font-bold text-md lg:text-xl flex justify-start text-white">
              Pre-requisites
              <div className="bg-[#c53939] h-[3px] w-[20%] mx-2 my-auto"></div>
            </div>
            <ul className="list-disc list-inside mt-2 text-justify marker:text-red-500 marker:text-lg text-[#aaa]  text-md lg:text-lg">
              <li>Participants are required to bring laptops.</li>
              <li>{workshop.prerequistes}</li>
            </ul>
          </div>

          <button className="border-solid border-[#571717] border-[2px] p-2 hover:bg-[#a92d2d] flex justify-start lg:mx-0 mx-auto">
            login to Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualWorkshops;
