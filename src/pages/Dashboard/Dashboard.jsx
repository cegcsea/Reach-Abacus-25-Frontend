import React, { useState } from "react";
import { LoaderData } from "../../context/loaderContext.js";
import Events from "./components/Events";
import Workshops from "./components/Workshops";
import Loader from "../../components/Loader/Loader.jsx";

function Dashboard() {
  const { isLoading } = LoaderData();
  const [isEvents, setIsEvents] = useState(true);

  if (isLoading) {
    return <Loader />;
  }

  return (
    // Outer container: Changed bg-black to bg-transparent
    <div className="mt-20 flex justify-center items-center py-10 sm:px-0 px-4 bg-transparent gap-5">
      <div className="querybox flex flex-col gap-7 w-full sm:w-3/5 border border-[#c0a068] text-[#ffffffe6] p-5 sm:p-10">
        {/* Header Section */}
        <div className="text-2xl text-center">
          <span className="text-[#c0a068]"></span>
          Dashboard
          <span className="text-[#c0a068]"></span>
          <p className="text-gray-400 mt-3 text-sm">
            Stay updated with all the latest events and workshops!
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center items-center gap-6">
          <div>
            <button
              type="submit"
              // Button Styles: Border Gold, Text Theme Color, Hover Gold with opacity
              className={`py-2 px-6 sm:text-base text-xs text-[#ffffffe6] border border-[#c0a068] hover:bg-[#c0a068]/20 duration-150
                            ${isEvents ? "bg-[#c0a068]/20" : "bg-transparent"}`}
              onClick={() => setIsEvents(true)}
            >
              Events
            </button>
          </div>
        </div>

        {/* Content Section */}
        {isEvents && <Events />}
        {!isEvents && <Workshops />}
      </div>
    </div>
  );
}

export default Dashboard;
