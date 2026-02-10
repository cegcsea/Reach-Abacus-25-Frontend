import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { workshopsReach as workshops } from "../constants/workshops";
import { Link } from "react-router-dom";
import { UserData } from "../context/userContext";
import { FaInfo } from "react-icons/fa";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import Contact from "../components/Contact";
import { motion, AnimatePresence } from "framer-motion";
const IndividualWorkshops = () => {
  const { id } = useParams();
  const { user, isAuth, refreshauth } = UserData();
  const workshop = workshops.find((ws) => ws.to === id);
  const [activeTab, setActiveTab] = useState("description");
  const [bestPayment, setBestPayment] = useState(null);
  const isRegistered = (user?.WorkshopPayment || []).some(
    (ws) => ws.workshopId === workshop.code,
  );

  const { isLoading } = LoaderData();
  const getbestPayment = () => {
    if (!user?.WorkshopPayment || !Array.isArray(user.WorkshopPayment)) {
      return null;
    }
    const workshopPayments = user.WorkshopPayment.filter(
      (payment) => payment.workshopId === workshop.code,
    );

    let bestPayment = null;

    for (const payment of workshopPayments) {
      if (payment.status === "SUCCESS") {
        return payment;
      } else if (
        payment.status === "PENDING" &&
        (bestPayment?.status === "FAILURE" || !bestPayment)
      ) {
        bestPayment = payment;
      } else if (!bestPayment) {
        bestPayment = payment;
      }
    }

    return bestPayment;
  };

  useEffect(() => {
    setBestPayment(getbestPayment());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.WorkshopPayment]);

  useEffect(() => {
    refreshauth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.WorkshopPayment?.length]);

  if (isLoading) {
    return <Loader />;
  }
  if (!workshop) {
    return <div className="text-white">Workshop not found!</div>;
  }
  const renderContent = () => {
    if (activeTab === "description") {
      return (
        <div className="space-y-6">
          {/* Workshop Content */}
          <div>
            <p className="text-gray-300 leading-relaxed text-base">
              {workshop.content}
            </p>
          </div>

          {/* Prerequisites Section */}
          {workshop.prerequisites && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Prerequisites
                </h3>
                <div className="h-[2px] bg-gradient-to-r from-[#c0a068] to-transparent mb-4"></div>
              </div>
              <ul className="space-y-3 text-gray-300">
                {workshop.prerequisites.split(".").map(
                  (point, index) =>
                    point.trim() && (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#c0a068] mt-1.5">•</span>
                        <span className="text-base leading-relaxed">
                          {point.trim()}
                        </span>
                      </li>
                    ),
                )}
              </ul>
            </div>
          )}
        </div>
      );
    } else if (activeTab === "more-info") {
      const info = workshop.moreInfo;
      return (
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b border-[#c0a068]/20">
              <div className="w-32 text-[#c0a068] font-semibold">
                Certificate:
              </div>
              <div className="flex-1 text-gray-300">{info.certificate}</div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-[#c0a068]/20">
              <div className="w-32 text-[#c0a068] font-semibold">
                Takeaways:
              </div>
              <div className="flex-1 text-gray-300">{info.takeaways}</div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-[#c0a068]/20">
              <div className="w-32 text-[#c0a068] font-semibold">Date:</div>
              <div className="flex-1 text-gray-300">{info.date}</div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-[#c0a068]/20">
              <div className="w-32 text-[#c0a068] font-semibold">Time:</div>
              <div className="flex-1 text-gray-300">{info.time}</div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-[#c0a068]/20">
              <div className="w-32 text-[#c0a068] font-semibold">Venue:</div>
              <div className="flex-1 text-gray-300">{info.venue}</div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-32 text-[#c0a068] font-semibold">
                Entry Fee:
              </div>
              <div className="flex-1 text-gray-300 font-bold text-lg">
                {info.entryFee}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-12 bg-[#0a0a0a]">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto mb-10"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center">
          <span className="text-[#c0a068]">/</span>
          <span className="ml-2">{workshop.title}</span>
        </h1>
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Workshop Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start justify-center lg:justify-end"
          >
            <img
              src={workshop.image}
              alt={workshop.title}
              className="w-full max-w-md rounded-xl shadow-2xl border-2 border-[#c0a068]/30 hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Workshop Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col"
          >
            {/* Section Header */}
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                What to expect
              </h2>
              <div className="h-[2px] bg-gradient-to-r from-[#c0a068] to-transparent"></div>
            </div>

            {/* Tab buttons */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
              <button
                className={`px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-200 ${
                  activeTab === "description"
                    ? "bg-[#c0a068] text-black shadow-lg"
                    : "bg-transparent border-2 border-[#c0a068] text-[#c0a068] hover:bg-[#c0a068]/10"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>

              <button
                className={`px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-200 ${
                  activeTab === "more-info"
                    ? "bg-[#c0a068] text-black shadow-lg"
                    : "bg-transparent border-2 border-[#c0a068] text-[#c0a068] hover:bg-[#c0a068]/10"
                }`}
                onClick={() => setActiveTab("more-info")}
              >
                More Info
              </button>
            </div>

            {/* Content Area */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#c0a068]/20 flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              {isAuth && !isRegistered && (
                <>
                  <Link to={`/workshops/${workshop.to}/payment`}>
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-[#c0a068] to-[#aa8c2c] text-black text-lg font-bold rounded-lg hover:from-[#aa8c2c] hover:to-[#c0a068] transition-all duration-300 shadow-xl">
                      Register for ₹{workshop.price}
                    </button>
                  </Link>
                  {workshop.bulkBooking && (
                    <Link to={`/workshops/${workshop.to}/bulkpayment`}>
                      <button className="w-full px-6 py-4 border-2 border-[#c0a068] text-[#c0a068] text-lg font-bold rounded-lg hover:bg-[#c0a068] hover:text-black transition-all duration-300">
                        Bulk Register - Save ₹100
                      </button>
                    </Link>
                  )}
                </>
              )}
              {isAuth &&
                isRegistered &&
                workshop.bulkBooking &&
                bestPayment?.status === "FAILURE" && (
                  <Link to={`/workshops/${workshop.to}/bulkpayment`}>
                    <button className="w-full px-6 py-4 border-2 border-[#c0a068] text-[#c0a068] text-lg font-bold rounded-lg hover:bg-[#c0a068] hover:text-black transition-all duration-300">
                      Bulk Register - Save ₹100
                    </button>
                  </Link>
                )}
              {!isAuth && (
                <Link to="/auth">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-[#c0a068] to-[#aa8c2c] text-black text-lg font-bold rounded-lg hover:from-[#aa8c2c] hover:to-[#c0a068] transition-all duration-300 shadow-xl">
                    Login to Register
                  </button>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Payment Status Section */}
      {isAuth && isRegistered && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-7xl mx-auto mt-12 p-6 bg-[#1a1a1a] rounded-xl border border-[#c0a068]/20"
        >
          {bestPayment?.status === "PENDING" && (
            <div className="space-y-4 text-center">
              <div className="inline-block px-8 py-3 bg-[#ddb878]/20 border-2 border-[#ddb878] text-[#ddb878] rounded-lg font-semibold">
                Payment Under Review
              </div>
              <p className="text-xl font-bold text-white">
                Status:{" "}
                <span className="text-yellow-400">{bestPayment?.status}</span>
              </p>
              <div className="flex items-start gap-4 bg-[#2a2a2a] p-5 rounded-lg max-w-xl mx-auto">
                <span className="text-white bg-blue-500 p-2.5 rounded-full flex-shrink-0">
                  <FaInfo />
                </span>
                <p className="text-gray-300 text-left">
                  Your payment will be reflected within 2 business days!
                </p>
              </div>
            </div>
          )}

          {bestPayment?.status === "SUCCESS" && (
            <div className="space-y-4 text-center">
              <div className="inline-block px-8 py-3 bg-green-500/20 border-2 border-green-500 text-green-400 rounded-lg font-semibold">
                Registration Confirmed!
              </div>
              <p className="text-xl font-bold text-white">
                Status:{" "}
                <span className="text-green-400">{bestPayment?.status}</span>
              </p>
            </div>
          )}

          {bestPayment?.status === "FAILURE" && (
            <div className="space-y-4 text-center">
              <Link to={`/workshops/${workshop.to}/payment`}>
                <button className="px-8 py-3 bg-red-500/20 border-2 border-red-500 text-red-400 rounded-lg hover:bg-red-500/30 transition-all font-semibold">
                  Retry Payment
                </button>
              </Link>
              <p className="text-xl font-bold text-white">
                Status:{" "}
                <span className="text-red-400">{bestPayment?.status}</span>
              </p>
              <div className="flex items-start gap-4 bg-[#2a2a2a] p-5 rounded-lg max-w-xl mx-auto">
                <span className="text-white bg-red-500 p-2.5 rounded-full flex-shrink-0">
                  <FaInfo />
                </span>
                <p className="text-gray-300 text-left">
                  There was an error processing your payment. Please try again!
                </p>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Contact Section */}
      {workshop.contact?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <Contact contacts={workshop.contact} />
        </motion.div>
      )}
    </div>
  );
};

export default IndividualWorkshops;
