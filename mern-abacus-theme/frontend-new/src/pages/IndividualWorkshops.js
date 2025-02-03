import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { workshopsReach as workshops } from "../constants/workshops";
import { Link } from "react-router-dom";
import { UserData } from "../context/userContext";
import { FaInfo } from "react-icons/fa";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
const IndividualWorkshops = () => {
  const { id } = useParams();
  const { userWorkshops, isAuth, paymentType, setPaymentType } = UserData();
  const workshop = workshops.find((ws) => ws.to === id);
  const [activeTab, setActiveTab] = useState("description");
  const isPaidWorkshop = (userWorkshops || []).filter(
    (ws) => ws.workshopId === workshop.code
  );
  isPaidWorkshop.sort((a, b) => b.id - a.id);
  //console.log(isPaidWorkshop);
  const isRegistered = (userWorkshops || []).some(
    (ws) => ws.workshopId === workshop.code
  );
  //console.log(workshop, id);

  const colorFinder = (status) => {
    if (status === "PENDING") return "text-yellow-500";
    if (status === "SUCCESS") return "text-green-500";
    if (status === "FAILURE") return "text-red-400";
  };
  const { isLoading } = LoaderData();

  // useEffect(() => {
  //   console.log(userWorkshops);
  //   console.log(workshop);
  //   console.log(isPaidWorkshop[0].paymentStatus);
  //   console.log(isRegistered);
  //   //console.log(userWorkshops[3].paymentStatus);
  // });
  if (isLoading) {
    return <Loader />;
  }
  if (!workshop) {
    return <div className="text-white">Workshop not found!</div>;
  }
  const renderContent = () => {
    if (activeTab === "description") {
      return (
        <div>
          <div>
            {/* Workshop Content */}
            <p className="flex justify-start text-justify mx-2 text-md lg:text-lg">
              {workshop.content}
            </p>
          </div>

          {/* Prerequisites Section */}
          {workshop.prerequisites && (
            <div className="mt-4 mx-2">
              <div className="flex mx-auto my-3 mb-8 text-md sm: text-xl lg:text-2xl font-semibold">
                Prerequisites{" "}
                <div className="bg-[#c53939] h-[3px] w-[20%] mx-2 my-auto"></div>
              </div>
              <ul className="list-disc list-inside text-md lg:text-lg text-justify text-[#aaa]">
                {workshop.prerequisites
                  .split(".")
                  .map(
                    (point, index) =>
                      point.trim() && <li key={index}>{point.trim()}</li>
                  )}
              </ul>
            </div>
          )}
        </div>
      );
    } else if (activeTab === "speakers") {
      return (
        <div className="flex flex-col items-center justify-center text-center text-md lg:text-lg">
          <p className="font-semibold mb-4">
            We welcome the following esteemed person as our workshop's speaker!
          </p>

          <div className="border border-gray-300 rounded-lg p-3">
            <div className="flex flex-col items-center justify-center pb-4 mb-4">
              <img
                src="path_to_image" // Replace this with your speaker's image URL
                alt="Thiyagarajan Balasubramaniam"
                className="w-[150px] h-[150px] mb-4 object-cover"
              />
              <div className="w-full border-b border-gray-300 mb-4"></div>
              <p className="font-bold text-xl mb-2">
                Thiyagarajan Balasubramaniam
              </p>
              <p className="text-lg mb-1">Senior Engineering Manager</p>
              <p className="text-lg">Walmart Global Tech India</p>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "more-info") {
      const info = workshop.moreInfo;
      return (
        <div className="mt-6 text-lg">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 py-2 px-4 text-white bg-[#1d1d1d] font-medium">
                  Details
                </th>
                <th className="border-b-2 py-2 px-4 text-white bg-[#1d1d1d] font-medium">
                  Information
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#2e2e2e]">
                <td className="border-b py-2 px-4 text-[#aaa]">Takeaways</td>
                <td className="border-b py-2 px-4 text-[#aaa]">
                  {info.certificate}
                </td>
              </tr>
              <tr className="bg-[#1d1d1d]">
                <td className="border-b py-2 px-4 text-[#aaa]">Time</td>
                <td className="border-b py-2 px-4 text-[#aaa]">{info.time}</td>
              </tr>
              <tr className="bg-[#2e2e2e]">
                <td className="border-b py-2 px-4 text-[#aaa]">Date</td>
                <td className="border-b py-2 px-4 text-[#aaa]">{info.date}</td>
              </tr>
              <tr className="bg-[#1d1d1d]">
                <td className="border-b py-2 px-4 text-[#aaa]">Venue</td>
                <td className="border-b py-2 px-4 text-[#aaa]">{info.venue}</td>
              </tr>
              <tr className="bg-[#2e2e2e]">
                <td className="border-b py-2 px-4 text-[#aaa]">Entry Fee</td>
                <td className="border-b py-2 px-4 text-[#aaa]">
                  {info.entryFee}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <div className="mt-20 py-8 sm:px-10 flex gap-3 flex-col m-6 lg:m-10 bg-[#1d1d1d]">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-white overflow-hidden mx-auto text-center mt-6">
        <span className="text-[#c53939] overflow-hidden">/</span>
        <span className="text-white overflow-hidden font-bold my-5 [text-shadow:6px_2px_4px_#c03e3e]">
          {workshop.title}
        </span>
      </p>

      <div className="flex flex-col lg:flex-row mt-8 gap-8">
        <img
          src={workshop.image}
          alt={`workshop: ${workshop.title}`}
          className="w-full lg:w-[35%] h-auto lg:h-[60vh] object-contain rounded-md mx-auto"
        />
        <div className="w-full lg:w-[55%] mx-auto lg:mx-0">
          <div className="flex mx-auto my-3 mb-8 text-md sm: text-xl lg:text-2xl font-semibold">
            What to expect
            <div className="bg-[#c53939] h-[3px] w-[30%] sm:w-[50%] lg:w-[20%] mx-2 my-auto"></div>
          </div>

          {/* Tab buttons */}
          <div className="flex justify-center lg:justify-start gap-4 my-4">
            <button
              className={`border px-1 py-2 text-white duration-150 ${
                activeTab === "description"
                  ? "bg-[#660000]"
                  : "border-[#8B0000] hover:bg-[#66000033]"
              } mx-1 text-sm sm:text-base lg:text-lg`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`border px-2 py-2 text-white duration-150 ${
                activeTab === "speakers"
                  ? "bg-[#660000]"
                  : "border-[#8B0000] hover:bg-[#66000033]"
              } mx-2 text-sm sm:text-base lg:text-lg`}
              onClick={() => setActiveTab("speakers")}
            >
              Speakers
            </button>
            <button
              className={`border px-2 py-2 text-white duration-150 ${
                activeTab === "more-info"
                  ? "bg-[#660000]"
                  : "border-[#8B0000] hover:bg-[#66000033]"
              } mx-2 text-sm sm:text-base lg:text-lg`}
              onClick={() => setActiveTab("more-info")}
            >
              More Info
            </button>
          </div>

          {/* Render content based on activeTab */}
          {renderContent()}

          <div className="flex justify-center gap-3">
            {isAuth && !isRegistered && (
              <Link to={`/workshops/${workshop.code}/payment`}>
                <button className="m-3 w-fit border-[#b72222] border-[1.7px] px-4 py-2 text-white duration-150 hover:bg-[#9f232363]">
                  Register {"<"}~{">"}
                </button>
              </Link>
            )}
            {workshop.bulkBooking && (
              <Link
                to={`/workshops/${workshop.code}/payment`}
              >
                <button
                  className="m-3 w-fit border border-lime-400 px-4 py-2 text-white duration-150 hover:bg-[#93dd7833]"
                  onClick={() => setPaymentType("bulk")}
                >
                  Bulk Register {"<"}~{">"}
                </button>
              </Link>
            )}
          </div>

          {/* Payment status sections */}
          {isAuth &&
            isRegistered &&
            isPaidWorkshop[0].paymentStatus === "PENDING" && (
              <>
                <button className="m-3 w-fit border border-[#ddb878] px-4 py-2 text-white duration-150 hover:bg-[#ddc27833]">
                  Paid for the workshop {"<"}~{">"}
                </button>
                <p className="text-xl font-semibold text-white">
                  Status:&nbsp;
                  <span
                    className={colorFinder(isPaidWorkshop[0].paymentStatus)}
                  >
                    {isPaidWorkshop[0].paymentStatus}
                  </span>
                </p>
                <p className="flex justify-center items-center gap-2 text-white bg-gray-500 py-3 px-1 rounded-3xl">
                  <span className="text-white bg-red-400 p-1 rounded-full">
                    <FaInfo />
                  </span>
                  Your payment will be reflected within 2 business days!
                </p>
              </>
            )}

          {isAuth &&
            isRegistered &&
            isPaidWorkshop[0].paymentStatus === "SUCCESS" && (
              <>
                <button className="m-3 w-fit border border-lime-400 px-4 py-2 text-white duration-150 hover:bg-lime-400/40">
                  Payment Verified! {"<"}~{">"}
                </button>
                <p className="text-xl font-semibold text-white">
                  Status:&nbsp;
                  <span
                    className={colorFinder(isPaidWorkshop[0].paymentStatus)}
                  >
                    {isPaidWorkshop[0].paymentStatus}
                  </span>
                </p>
              </>
            )}

          {isAuth &&
            isRegistered &&
            isPaidWorkshop[0].paymentStatus === "FAILURE" && (
              <>
                <Link to={`/workshops/${workshop.code}/payment`}>
                  <button className="m-3 w-fit border border-red-400 px-4 py-2 text-white duration-150 hover:bg-red-400/40">
                    Pay Again! {"<"}~{">"}
                  </button>
                </Link>
                <p className="text-xl font-semibold text-white">
                  Status:&nbsp;
                  <span
                    className={colorFinder(isPaidWorkshop[0].paymentStatus)}
                  >
                    {isPaidWorkshop[0].paymentStatus}
                  </span>
                </p>
                <p className="flex justify-center items-center gap-2 text-white bg-gray-500 py-3 px-1 rounded-3xl">
                  <span className="text-white bg-red-400 p-1 rounded-full">
                    <FaInfo />
                  </span>
                  There seems to be some error during your payment. Please
                  initiate payment again!
                </p>
              </>
            )}

          {!isAuth && (
            <Link to="/auth">
              <button className="m-3 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]">
                Login to Register {"<"}~{">"}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualWorkshops;
