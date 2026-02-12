import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaTools,
  FaBed,
  FaHandshake,
  FaUser,
} from "react-icons/fa";
import LightRays from "../LightRays/LightRays";

const FloatingNav = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    {
      id: 1,
      icon: FaCalendarAlt,
      label: "Events",
      path: "/events",
      color: "#c0a068",
      gradient:
        "linear-gradient(135deg, #b8956a 0%, #c0a068 50%, #9d7f52 100%)",
      delay: 0,
    },
    {
      id: 2,
      icon: FaTools,
      label: "Workshops",
      path: "/workshops",
      color: "#c0a068",
      gradient:
        "linear-gradient(135deg, #9d7f52 0%, #c0a068 50%, #b8956a 100%)",
      delay: 0.1,
    },
    {
      id: 3,
      icon: FaBed,
      label: "Accommodation",
      path: "/accommodation",
      color: "#c0a068",
      gradient:
        "linear-gradient(135deg, #b8956a 0%, #c0a068 50%, #9d7f52 100%)",
      delay: 0.2,
    },
    {
      id: 4,
      icon: FaHandshake,
      label: "Sponsors",
      path: "/sponsors",
      color: "#c0a068",
      gradient:
        "linear-gradient(135deg, #c0a068 0%, #b8956a 50%, #c0a068 100%)",
      delay: 0.3,
    },
    {
      id: 5,
      icon: FaUser,
      label: "Profile",
      path: "/profile",
      color: "#c0a068",
      gradient:
        "linear-gradient(135deg, #b8956a 0%, #c0a068 50%, #9d7f52 100%)",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Light Rays Background */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-50">
        <LightRays
          raysOrigin="top-center"
          raysColor="#c0a068"
          raysSpeed={0.8}
          lightSpread={1.5}
          rayLength={2.5}
          pulsating
        />
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-10 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[140px] opacity-20"
        style={{ background: "#c0a068" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[160px] opacity-15"
        style={{ background: "#c0a068" }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{
              background:
                "linear-gradient(135deg, #b8956a 0%, #c0a068 50%, #9d7f52 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 25px rgba(212, 175, 55, 0.5))",
            }}
          >
            EXPLORE ABACUS'26
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{
              background: "linear-gradient(90deg, #c0a068, #b8956a, #c0a068)",
              boxShadow: "0 0 15px rgba(212, 175, 55, 0.7)",
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base md:text-lg text-center max-w-2xl mb-16 md:mb-20"
        >
          Navigate through the cosmic journey of innovation, learning, and
          collaboration
        </motion.p>

        {/* Floating Icons Grid */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 place-items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                transition={{
                  duration: 1,
                  delay: item.delay,
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                }}
                className={`relative group cursor-pointer w-full max-w-[160px] ${index === navItems.length - 1 ? "col-span-2 md:col-auto mx-auto" : ""}`}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => navigate(item.path)}
              >
                {/* Connecting Line Animation */}
                {index < navItems.length - 1 && index % 5 !== 4 && (
                  <motion.div
                    className="absolute hidden lg:block left-full top-1/2 -translate-y-1/2 w-10 h-[2px] pointer-events-none origin-left"
                    style={{
                      background: `linear-gradient(90deg, ${item.color}60, transparent)`,
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.4 }}
                    transition={{ duration: 0.8, delay: item.delay + 0.6 }}
                  />
                )}

                {/* Card Container */}
                <motion.div
                  className="relative rounded-2xl p-6 sm:p-8 flex flex-col items-center"
                  style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    border: `2px solid rgba(212, 175, 55, ${
                      hoveredItem === item.id ? 0.4 : 0.15
                    })`,
                    backdropFilter: "blur(12px)",
                    boxShadow:
                      hoveredItem === item.id
                        ? `0 0 40px rgba(212, 175, 55, 0.25), 0 0 60px ${item.color}30`
                        : "0 0 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(212, 175, 55, 0.08)",
                  }}
                  animate={{
                    y: hoveredItem === item.id ? -10 : [0, -8, 0],
                    scale: hoveredItem === item.id ? 1.08 : 1,
                  }}
                  transition={{
                    y: {
                      duration: hoveredItem === item.id ? 0.3 : 4 + index * 0.5,
                      repeat: hoveredItem === item.id ? 0 : Infinity,
                      ease: "easeInOut",
                    },
                    scale: { duration: 0.3 },
                  }}
                >
                  {/* Glow Effect Behind */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 pointer-events-none"
                    style={{ background: item.gradient }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-4 p-4 sm:p-5 rounded-full"
                    style={{
                      background: item.gradient,
                      boxShadow: `0 0 30px ${item.color}60, inset 0 0 20px rgba(0,0,0,0.3)`,
                    }}
                    animate={{
                      rotate: hoveredItem === item.id ? 360 : 0,
                    }}
                    transition={{
                      rotate: { duration: 0.8, ease: "easeOut" },
                    }}
                  >
                    {/* Rotating Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-dashed opacity-50"
                      style={{ borderColor: "#ffffff" }}
                      animate={{
                        rotate: 360,
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 25,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    />

                    {/* Icon */}
                    <item.icon
                      className="relative z-10 text-3xl sm:text-4xl md:text-5xl"
                      style={{
                        color: "#000000",
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                      }}
                    />

                    {/* Pulse Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${item.color}80, transparent 70%)`,
                      }}
                      animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>

                  {/* Label */}
                  <motion.p
                    className="text-center text-sm sm:text-base font-semibold tracking-wide"
                    style={{
                      background: item.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter:
                        hoveredItem === item.id
                          ? `drop-shadow(0 0 8px ${item.color})`
                          : "none",
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.delay + 0.4 }}
                  >
                    {item.label}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Stars/Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: "#c0a068",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default FloatingNav;
