import React, { useState } from "react";
import { LoaderData } from "../../context/loaderContext.js";
import Events from "./components/Events";
import Workshops from "./components/Workshops";
import Loader from "../../components/Loader/Loader.jsx"
function Dashboard() {
  const { isLoading } = LoaderData();
  const [isEvents, setIsEvents] = useState(true);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-20 flex justify-center items-center py-10 sm:px-0 px-4 bg-black gap-5">
      <div className="querybox flex flex-col gap-7 w-full sm:w-3/5 border border-red-600 text-white p-5 sm:p-10 bg-[#111]">
        <div className="text-2xl text-center">
          <span className="text-red-400">&#60;</span>
          &nbsp;Dashboard&nbsp;
          <span className="text-red-400">&#62;</span>
          <p className="text-gray-400 mt-3 text-sm">
            Stay updated with all the latest events and workshops!
          </p>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div>
            <button
              type="submit"
              className={`py-2 px-6 sm:text-base text-xs text-white border border-red-600 hover:bg-red-700/40 duration-150
                            ${isEvents ? "bg-red-700/40" : "bg-transparent"}`}
              onClick={() => setIsEvents(true)}
            >
              Events {"<"}~{">"}
            </button>
          </div>
          <div>
            <button
              type="submit"
              className={`py-2 px-4 sm:text-base text-xs text-white border border-red-600 hover:bg-red-700/40 duration-150
                            ${!isEvents ? "bg-red-700/40" : "bg-transparent"}`}
              onClick={() => setIsEvents(false)}
            >
              Workshops {"<"}~{">"}
            </button>
          </div>
        </div>
        {isEvents && <Events />}
        {!isEvents && <Workshops />}
      </div>
    </div>
  );
}

export default Dashboard;
