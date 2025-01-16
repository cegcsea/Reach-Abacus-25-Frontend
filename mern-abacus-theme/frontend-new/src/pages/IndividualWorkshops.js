import React from "react";
import { useParams } from "react-router-dom";
import { workshopsReach as workshops } from "../constants/workshops";
import { Link } from "react-router-dom";
import { UserData } from "../context/userContext";
import { FaInfo } from "react-icons/fa";
const IndividualWorkshops = () => {
  const { id } = useParams();
  const { userWorkshops, isAuth, workshopRegister } = UserData();
  const workshop = workshops.find((ws) => ws.to === id);
  const isPaidWorkshop = (userWorkshops || []).filter(
    (event) => event.workshopId === workshop.code
  );
  isPaidWorkshop.sort((a, b) => b.id - a.id);
  console.log(isPaidWorkshop);
  const isRegistered = (userWorkshops || []).some(
    (event) => event.workshopId === workshop.code
  );
  console.log(workshop, id);
  if (!workshop) {
    return <div className="text-white">Workshop not found!</div>;
  }

  const colorFinder = (status) => {
    if (status === "PENDING") return "text-yellow-500";
    if (status === "SUCCESS") return "text-green-500";
    if (status === "FAILURE") return "text-red-400";
  };

  return (
    <div className="lg:mt-24 mt-20 py-8 sm:px-10 flex gap-3 flex-col m-6 lg:m-10 bg-[#1d1d1d]">
      <p className="lg:text-4xl text-lg text-white overflow-hidden lg:ml-0 mx-auto">
        <span className="text-[#c53939] overflow-hidden">/</span>
        <span className="text-white overflow-hidden font-bold my-5  text-center mb-8 [text-shadow:6px_2px_4px_#c03e3e]">
          {" "}
          {workshop.title}
        </span>
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

          {/* <button className="border-solid border-[#571717] border-[2px] p-2 hover:bg-[#a92d2d] flex justify-start lg:mx-0 mx-auto">
            login to Register
          </button> */}
          {
            <div className="flex gap-3">
              <Link to={`/workshops/${workshop.code}/payment`}>
                <button className="m-3 w-fit border-[#b72222] border-[1.7px] px-4 py-2 text-white duration-150 hover:bg-[#9f232363]">
                  Register {"<"}~{">"}
                </button>
              </Link>
              {workshop.bulkBooking && (
                <Link to={workshop.bulkBooking.link} target="_blank">
                  <button className="m-3 w-fit border border-lime-400 px-4 py-2 text-white duration-150 hover:bg-[#93dd7833]">
                    Bulk Register {"<"}~{">"}
                  </button>
                </Link>
              )}
            </div>
          }
          {isAuth && isRegistered && isPaidWorkshop.status === "PENDING" && (
            <>
              <button className="m-3 w-fit border border-[#ddb878] px-4 py-2 text-white duration-150 hover:bg-[#ddc27833]">
                Paid for the workshop {"<"}~{">"}
              </button>
              <p className="text-xl font-semibold text-white">
                Status:&nbsp;
                <span className={colorFinder(isPaidWorkshop.status)}>
                  {isPaidWorkshop.status}
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
          {isAuth && isRegistered && isPaidWorkshop.status === "SUCCESS" && (
            <>
              <button className="m-3 w-fit border border-lime-400 px-4 py-2 text-white duration-150 hover:bg-lime-400/40">
                Payment Verified! {"<"}~{">"}
              </button>
              <p className="text-xl font-semibold text-white">
                Status:&nbsp;
                <span className={colorFinder(isPaidWorkshop.status)}>
                  {isPaidWorkshop.status}
                </span>
              </p>
            </>
          )}
          {isAuth && isRegistered && isPaidWorkshop.status === "FAILURE" && (
            <>
              <Link to={`/workshops/${workshop.code}/payment`}>
                <button className="m-3 w-fit border border-red-400 px-4 py-2 text-white duration-150 hover:bg-red-400/40">
                  Pay Again! {"<"}~{">"}
                </button>
              </Link>
              <p className="text-xl font-semibold text-white">
                Status:&nbsp;
                <span className={colorFinder(isPaidWorkshop.status)}>
                  {isPaidWorkshop.status}
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
            <Link to="/login">
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
