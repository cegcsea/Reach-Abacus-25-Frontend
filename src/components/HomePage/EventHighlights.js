// src/components/HomePage/EventHighlights.jsx

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import { MdCalendarToday, MdPeople } from "react-icons/md";

const features = [
  {
    icon: <MdCalendarToday className="text-2xl sm:text-3xl" />,
    title: "February 19-21, 2026",
    description: "Three days of immersive experiences",
  },
  {
    icon: <HiLocationMarker className="text-2xl sm:text-3xl" />,
    title: "CEG, Anna University",
    description: "Guindy - Chennai, Tamil Nadu",
  },
  {
    icon: <MdPeople className="text-2xl sm:text-3xl" />,
    title: "2000+ Attendees",
    description: "Industry experts, leaders & innovators",
  },
];

const EventHighlights = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="highlights"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2
            className="text-2xl sm:text-4xl font-semibold uppercase"
            style={{
              background:
                "linear-gradient(135deg, #b8956a 0%, #c0a068 50%, #9d7f52 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 25px rgba(212,175,55,0.45))",
            }}
          >
            EVENT HIGHLIGHTS
          </h2>

          <div
            className="w-16 sm:w-20 h-1 mx-auto mt-4"
            style={{
              background:
                "linear-gradient(90deg,#c0a068,#b8956a,#c0a068)",
              boxShadow: "0 0 12px rgba(212,175,55,0.6)",
            }}
          />
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 place-items-center">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="w-full max-w-sm md:max-w-none rounded-2xl flex flex-col items-center text-center
                         px-6 py-7 sm:px-8 sm:py-10"
              style={{
                background: "rgba(0,0,0,0.55)",
                border: "2px solid rgba(212,175,55,0.16)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0 0 25px rgba(0,0,0,0.55), 0 0 20px rgba(212,175,55,0.08)",
              }}
            >
              <div
                className="mb-5 p-4 rounded-full"
                style={{
                  background: "rgba(192,160,104,0.12)",
                  color: "#c0a068",
                }}
              >
                {f.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {f.title}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
