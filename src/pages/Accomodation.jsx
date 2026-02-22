import React from "react";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import { motion } from "framer-motion";
import {
  FaHotel,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { ACCOMMODATION_CLOSED } from "../constants/events";

function Accommodation() {
  const { isLoading } = LoaderData();

  const GOOGLE_FORM_URL = "https://forms.gle/ae8G5gc2f6avwgfh7";

  const eventDates = [
    {
      date: "February 19, 2026",
      day: "Day 1",
      icon: <FaCalendarAlt className="text-[#c0a068]" />,
    },
    {
      date: "February 20, 2026",
      day: "Day 2",
      icon: <FaCalendarAlt className="text-[#c0a068]" />,
    },
    {
      date: "February 21, 2026",
      day: "Day 3",
      icon: <FaCalendarAlt className="text-[#c0a068]" />,
    },
  ];

  if (isLoading) return <Loader />;

  return (
    <div className="flex justify-center items-center py-6 sm:py-10 sm:px-4 min-h-screen px-3 mt-16 sm:mt-10 gap-5 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="querybox flex flex-col gap-4 sm:gap-6 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 bg-[#1a1a1a] border-2 border-[#c0a068] rounded-lg shadow-lg p-4 sm:p-8 md:p-10 text-[#ffffffe6]"
        style={{
          boxShadow: "0 0 30px rgba(192, 160, 104, 0.3)",
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center border-b-2 border-[#c0a068] pb-3 sm:pb-4"
        >
          <motion.span
            className="text-[#c0a068]"
            animate={{ rotate: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            {"<"}
          </motion.span>
          &nbsp;Accommodation&nbsp;
          <motion.span
            className="text-[#c0a068]"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            {">"}
          </motion.span>
        </motion.div>

        {/* Icon and Welcome Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            type: "spring",
            stiffness: 200,
          }}
          className="flex flex-col items-center gap-3 sm:gap-4"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              filter: "drop-shadow(0 0 10px rgba(192, 160, 104, 0.6))",
            }}
          >
            <FaHotel className="text-4xl sm:text-5xl md:text-6xl text-[#c0a068]" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center text-gray-300 text-sm sm:text-base md:text-lg px-2"
          >
            Book your accommodation for ABACUS '26
          </motion.p>
        </motion.div>

        {/* Event Dates Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col gap-3 sm:gap-4"
        >
          <motion.h3
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl font-semibold text-[#c0a068] text-center flex items-center justify-center gap-2"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              <FaMapMarkerAlt className="text-sm sm:text-base" />
            </motion.div>
            Event Dates
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {eventDates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 0 20px rgba(192, 160, 104, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="bg-[#050505] border border-[#c0a068] rounded-lg p-3 sm:p-4 text-center hover:bg-[#c0a068]/10 transition-all duration-300 cursor-pointer"
                style={{
                  boxShadow: "0 0 10px rgba(192, 160, 104, 0.2)",
                }}
              >
                <motion.div
                  className="flex justify-center mb-2 text-sm sm:text-base"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 2,
                    delay: index * 0.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                  }}
                >
                  {item.icon}
                </motion.div>
                <p className="text-[#c0a068] font-bold text-base sm:text-lg">
                  {item.day}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  {item.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Information */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-[#050505] border border-[#c0a068] rounded-lg p-4 sm:p-5 relative overflow-hidden"
        >
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(192, 160, 104, 0.1), transparent)",
                "radial-gradient(circle at 50% 50%, rgba(192, 160, 104, 0.2), transparent)",
                "radial-gradient(circle at 50% 50%, rgba(192, 160, 104, 0.1), transparent)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 pointer-events-none"
          />
          <div className="text-center relative z-10">
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c0a068] mb-2 sm:mb-3"
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 5px rgba(192, 160, 104, 0.5)",
                  "0 0 15px rgba(192, 160, 104, 0.8)",
                  "0 0 5px rgba(192, 160, 104, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ₹300 per day
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-gray-300 text-xs sm:text-sm"
            >
              Includes food and comfortable stay
            </motion.p>
          </div>
        </motion.div>

        {/* Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-[#050505] border border-[#c0a068] rounded-lg p-4 sm:p-5"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-gray-300 text-center leading-relaxed text-xs sm:text-sm md:text-base"
          >
            We provide comfortable accommodation facilities for all three days
            of the event. Fill out the form below to reserve your spot and
            ensure a hassle-free experience during ABACUS '26.
          </motion.p>
        </motion.div>

        {/* Google Form Button */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 1.1,
            duration: 0.6,
            type: "spring",
            stiffness: 150,
          }}
          className="self-center w-full"
        >
          {ACCOMMODATION_CLOSED ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-500/20 border-2 border-red-500 text-red-400 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg w-full text-center"
            >
              <span className="text-base sm:text-lg">
                Accommodation Registration Closed
              </span>
            </motion.div>
          ) : (
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(192, 160, 104, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 4px 15px rgba(192, 160, 104, 0.4)",
                    "0 6px 20px rgba(192, 160, 104, 0.6)",
                    "0 4px 15px rgba(192, 160, 104, 0.4)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
                className="bg-[#c0a068] hover:bg-[#aa8c2c] duration-300 text-black font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg w-full border-2 border-[#c0a068] relative overflow-hidden"
              >
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
                <span className="text-base sm:text-lg relative z-10">
                  Register via Form
                </span>
                <motion.span
                  className="ml-2 relative z-10"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                >
                  {"<~>"}
                </motion.span>
              </motion.button>
            </a>
          )}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="border-t-2 border-[#c0a068]/30 pt-4 sm:pt-6"
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.1,
              duration: 0.5,
              type: "spring",
              stiffness: 150,
            }}
            className="text-base sm:text-lg md:text-xl font-semibold text-center text-[#c0a068] mb-3 sm:mb-4"
          >
            For Further Details, Contact:
          </motion.h3>
          <div className="grid grid-cols-1 gap-2 sm:gap-3">
            {[
              { name: "Dharani", phone: "+91 86680 44172" },
              { name: "Shivaranjani", phone: "+91 93631 67941" },
              { name: "Vishaal", phone: "+91 80723 71293" },
            ].map((contact, index) => (
              <motion.a
                key={contact.name}
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 4px 15px rgba(192, 160, 104, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-[#252525] hover:bg-[#2a2a2a] border border-[#c0a068]/20 hover:border-[#c0a068]/50 rounded-lg p-3 sm:p-4 transition-colors duration-300 cursor-pointer"
                style={{
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="flex items-center gap-2 flex-1">
                  <FaUser className="text-[#c0a068] text-sm sm:text-base" />
                  <span className="text-gray-300 font-medium text-sm sm:text-base">
                    {contact.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-[#c0a068] text-xs sm:text-sm" />
                  <span className="text-gray-400 text-xs sm:text-sm font-mono">
                    {contact.phone}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-center text-xs sm:text-sm text-gray-500 italic px-2"
        >
          <motion.p
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            * Limited slots available. Book early to secure your accommodation!
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Accommodation;
