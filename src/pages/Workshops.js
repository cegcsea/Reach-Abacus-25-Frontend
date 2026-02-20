import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { workshopsReach as workshops } from "../constants/workshops";
import { LoaderData } from "../context/loaderContext";
import { UserData } from "../context/userContext";
import Loader from "../components/Loader/Loader";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

const Workshops = () => {
  const navigate = useNavigate();
  const { isLoading } = LoaderData();
  const { user, isAuth, getAmbassadorStatus } = UserData();
  const [ambassadorStatus, setAmbassadorStatus] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(true);

  // Fetch ambassador status on mount
  useEffect(() => {
    const fetchAmbassadorStatus = async () => {
      if (isAuth) {
        try {
          const status = await getAmbassadorStatus();
          setAmbassadorStatus(status);
        } catch (error) {
          console.error("Error fetching ambassador status:", error);
        }
      }
      setLoadingStatus(false);
    };

    fetchAmbassadorStatus();
  }, [isAuth, getAmbassadorStatus]);

  // Check if user is eligible for free workshop
  const isFreeEligible =
    ambassadorStatus?.isAmbassador && ambassadorStatus?.isEligible;
  const workshopReferrals = ambassadorStatus?.workshopReferrals || 0;

  if (isLoading || loadingStatus) {
    return <Loader />;
  }

  // Check if user already registered for workshops
  const registeredWorkshops =
    user?.WorkshopPayment?.filter(
      (payment) => payment.status === "SUCCESS",
    ).map((payment) => payment.workshopId) || [];

  const handleBulkRegister = () => {
    if (!isAuth) {
      navigate("/auth");
      return;
    }
    // Check if any workshop has closed registration
    const isBulkClosed = workshops.some((w) => w.registrationClosed);
    if (isBulkClosed) {
      return; // Button will be disabled, so this shouldn't trigger
    }
    // Navigate to bulk workshop payment page
    navigate("/workshops/bulk/payment");
  };

  const handleReadMore = (workshopTo) => {
    navigate(`/workshops/${workshopTo}`);
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-7xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="my-5 mt-20 text-4xl sm:text-5xl font-bold text-[#fcfcfc] text-center mb-8"
          style={{ textShadow: "6px 2px 4px #c0a068" }}
        >
          Workshops
        </motion.h2>

        {/* Ambassador Badge */}
        {isFreeEligible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 p-4 bg-gradient-to-r from-[#c0a068]/20 to-[#c0a068]/10 border-2 border-[#c0a068] rounded-lg text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <FaStar className="text-[#c0a068] text-2xl" />
              <p className="text-[#c0a068] font-bold text-lg">
                🎉 Congratulations! You're eligible for ONE FREE workshop
                registration!
              </p>
              <FaStar className="text-[#c0a068] text-2xl" />
            </div>
            <p className="text-gray-300 text-sm mt-2">
              You've successfully referred {workshopReferrals} users. Choose any
              workshop below to register for free!
            </p>
          </motion.div>
        )}

        {/* Workshops Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {workshops.map((workshop, index) => {
            const isRegistered = registeredWorkshops.includes(workshop.code);

            return (
              <motion.div
                key={workshop.code}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col"
              >
                {/* Workshop Card */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="border-2 border-[#c0a068] bg-[#1a1a1a] text-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                  style={{
                    boxShadow: "0 0 20px rgba(192, 160, 104, 0.2)",
                  }}
                  onClick={() => handleReadMore(workshop.to)}
                >
                  {/* Workshop Image */}
                  <div className="relative h-64 overflow-hidden bg-black">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {/* Price Badge */}
                    {!workshop.registrationClosed && (
                      <div className="absolute top-4 right-4 bg-[#c0a068] text-black px-4 py-2 rounded-lg font-bold text-xl shadow-lg">
                        ₹{workshop.price}
                      </div>
                    )}
                    {workshop.registrationClosed && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                        CLOSED
                      </div>
                    )}
                    {isFreeEligible &&
                      !isRegistered &&
                      !workshop.registrationClosed && (
                        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-lg font-bold text-sm shadow-lg animate-pulse">
                          FREE FOR YOU!
                        </div>
                      )}
                  </div>

                  {/* Workshop Info */}
                  <div className="p-5">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#c0a068] leading-tight min-h-[60px]">
                      {workshop.title}
                    </h3>

                    <div className="space-y-2 text-gray-300 mb-4">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-[#c0a068] text-sm" />
                        <span className="text-sm">
                          {workshop.moreInfo.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-[#c0a068] text-sm" />
                        <span className="text-sm">
                          {workshop.moreInfo.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#c0a068] text-sm" />
                        <span className="text-sm">
                          {workshop.moreInfo.venue}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Action Button - Outside Card */}
                {workshop.registrationClosed ? (
                  <motion.div className="w-full mt-4 px-4 py-3 bg-red-500/20 border-2 border-red-500 text-red-400 font-semibold rounded-lg text-center">
                    Registration Closed
                  </motion.div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleReadMore(workshop.to)}
                    className="w-full mt-4 px-4 py-3 bg-transparent border-2 border-[#c0a068] text-[#c0a068] font-semibold rounded-lg hover:bg-[#c0a068] hover:text-black transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bulk Registration Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="border-2 border-[#c0a068] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white rounded-lg shadow-lg hover:shadow-2xl transition-all p-6"
          style={{
            boxShadow: "0 0 30px rgba(192, 160, 104, 0.3)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <FaLaptopCode className="text-4xl text-[#c0a068]" />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#c0a068]">
                  Bulk Registration
                </h3>
              </div>
              <p className="text-gray-300 mb-3">
                Register for{" "}
                <span className="font-bold text-[#c0a068]">
                  both workshops together
                </span>{" "}
                and save ₹100!
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Cloud Computing Essentials in the Era of AI
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Mastering MCP: Building Context-Aware AI Apps
                </li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <div className="mb-3">
                <div className="text-gray-400 line-through text-lg">₹600</div>
                <div className="text-4xl font-bold text-[#c0a068]">₹500</div>
                <div className="text-green-400 text-sm font-semibold">
                  Save ₹100!
                </div>
              </div>
              {workshops.some((w) => w.registrationClosed) ? (
                <div className="px-6 py-3 bg-red-500/20 border-2 border-red-500 text-red-400 font-bold rounded-lg text-center">
                  Registration Closed
                </div>
              ) : (
                <button
                  onClick={handleBulkRegister}
                  className="px-6 py-3 bg-gradient-to-r from-[#c0a068] to-[#aa8c2c] text-black font-bold rounded-lg hover:from-[#aa8c2c] hover:to-[#c0a068] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Register Both Workshops
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Workshops;
