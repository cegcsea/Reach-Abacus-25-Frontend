// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Mobile-only adjustments:
 * - reduce ring sizes and heading sizes
 * - stack buttons vertically with spacing
 * - adjust max widths/paddings
 *
 * Desktop values are exactly the same as your original file; mobile branch uses smaller values.
 */

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
};

const Home = ({ scrollY, scrollToContact }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (e) => {
      // keep original mouse motion formula (desktop). On mobile we keep tiny subtle motion using touch/move if needed.
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Zoom in / blur as scroll (kept same as your code)
  const scale = 1 + scrollY * 0.001;
  const opacity = Math.max(1 - scrollY * 0.0015, 0);
  const blur = Math.min(scrollY * 0.05, 20);

  // desktop values preserved verbatim; mobile overrides below where necessary
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        transform: `scale(${scale}) translateZ(0)`,
        opacity,
        filter: `blur(${blur}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      />

      {/* Animated Gold Rings – shining one after another */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              // desktop sizes preserved; mobile scaled down if isMobile
              width: `${(300 + i * 200) * (isMobile ? 0.6 : 1)}px`,
              height: `${(300 + i * 200) * (isMobile ? 0.6 : 1)}px`,
              border: `1px solid rgba(212, 175, 55, ${0.3 - i * 0.08})`,
              boxShadow: `0 0 ${
                20 + i * 10
              }px rgba(212, 175, 55, ${0.2 - i * 0.05})`,
            }}
            animate={{
              // mild pulse + rotation
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.9, 0.4],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 4.5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7, // one after another shine
            }}
          />
        ))}
      </div>

      {/* Content with 3D transform */}
      <div
        className="relative z-10 mx-auto text-center"
        style={{
          maxWidth: isMobile ? "92%" : "80%",
          padding: isMobile ? "16px" : "0 1rem",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translateZ(50px)`,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className={`mb-6 font-bold tracking-[0.2em] ${
              isMobile ? "text-3xl p-2 my-3" : "text-5xl md:text-7xl"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{
              background:
                "linear-gradient(135deg, #b8956a 0%, #8b6e3d 25%, #c0a068 50%, #b8956a 75%, #9d7f52 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 80px rgba(212, 175, 55, 0.8)",
              filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.6))",
            }}
          >
            REACH &apos;26
          </motion.h1>

          <motion.p
            className={`${isMobile ? "text-base" : "text-2xl md:text-3xl"} text-gray-300 mb-2 tracking-wide`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              textShadow: "0 0 20px rgba(212, 175, 55, 0.3)",
            }}
          >
            &quot;Ideas Converge and Possibilities Unfold&quot;
          </motion.p>

          <motion.p
            className={`${isMobile ? "text-sm" : "text-lg"} text-gray-400 mb-3 max-w-3xl mx-auto p-4`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Every year, as a component of REACH, we organize outreach initiatives
            in renowned colleges across Tamil Nadu, aiming to enhance student
            engagement and amplify awareness for our symposium. Our specialized
            workshops under the REACH umbrella introduce students to emerging
            technologies, ensuring they remain at the forefront of innovation and
            industry relevance. REACH goes beyond academics by offering tailored
            events that prepare students for competitive landscapes, equipping
            them with essential skills and confidence for future placements and
            interviews.
          </motion.p>

          <motion.div
            className={`flex gap-4 justify-center ${
              isMobile ? "flex-col items-center" : "flex-row"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <button
              className="group relative px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, #b8956a 0%, #c0a068 100%)",
                boxShadow:
                  "0 0 30px rgba(212, 175, 55, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
                width: isMobile ? "85%" : "auto",
                textAlign: "center",
              }}
              onClick={() => {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative z-10 text-black font-semibold">
                About Us
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, #8b6e3d 0%, #b8956a 100%)",
                }}
              />
            </button>

            <button
              className="px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                border: "2px solid #c0a068",
                color: "#c0a068",
                boxShadow:
                  "0 0 20px rgba(212, 175, 55, 0.3), inset 0 0 10px rgba(212, 175, 55, 0.1)",
                width: isMobile ? "85%" : "auto",
                textAlign: "center",
              }}
              onClick={scrollToContact}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(212, 175, 55, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator (kept as your empty animated container) */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
      </motion.div>
    </section>
  );
};

export default Home;
