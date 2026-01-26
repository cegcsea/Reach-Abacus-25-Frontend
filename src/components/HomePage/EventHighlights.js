// src/components/HomePage/EventHighlights.jsx
import React from "react";
import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import { MdCalendarToday, MdPeople } from "react-icons/md";

const features = [
  {
    icon: <MdCalendarToday className="text-3xl" />,
    title: "February 12-14, 2026",
    description: "Three days of immersive experiences",
  },
  {
    icon: <HiLocationMarker className="text-3xl" />,
    title: "CEG, Anna University",
    description: "Guindy - Chennai, Tamil Nadu",
  },
  {
    icon: <MdPeople className="text-3xl" />,
    title: "2000+ Attendees",
    description: "Industry experts, leaders & innovators",
  },
];

export default function EventHighlights() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-6 relative z-10">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center uppercase tracking-widest"
        style={{
          color: "#c0a068",
          textShadow: "0 0 25px rgba(192, 160, 104, 0.4)",
        }}
      >
        Event Highlights
      </motion.h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            className="p-8 rounded-2xl flex flex-col items-center text-center backdrop-blur-sm group hover:bg-white/5 transition-colors duration-300"
            style={{
              background: "rgba(10, 10, 10, 0.4)",
              border: "1px solid rgba(192, 160, 104, 0.15)",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            <div 
              className="text-[#c0a068] mb-6 p-4 rounded-full bg-[#c0a068]/10 group-hover:scale-110 transition-transform duration-300"
              style={{ boxShadow: "0 0 15px rgba(192, 160, 104, 0.1)" }}
            >
              {f.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
              {f.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {f.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}