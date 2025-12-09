import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import HariniImage from "../assets/images/testpic.jpg";
import img1 from "../assets/images/sivani.jpg";
import img2 from "../assets/images/visvess.jpg";
import img3 from "../assets/images/harini.jpg";
import "../styles/developer.css";

const developers = [
  {
    name: "Harini",
    role: "// Frontend Developer",
    src: img3,
    linkedin: "https://linkedin.com/in/harini",
  },
  {
    name: "Sivanipriya",
    role: "// Frontend Developer",
    src: img1,
    linkedin: "https://linkedin.com/in/sivanipriya",
  },
  {
    name: "Visvesswar",
    role: "// Backend Developer",
    src: img2,
    linkedin: "https://linkedin.com/in/visvesswaram",
  },
  {
    name: "Lakshay",
    role: "// Backend Developer",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/lakshay",
  },
];

const Developers = ({ scrollY = 0 }) => {
  const [visibleDevelopers, setVisibleDevelopers] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 3D zoom / fade based on scroll
  const sectionTop = 3500; // approximate; tweak if needed
  const distanceFromTop = scrollY - sectionTop;
  const scale = inView
    ? 1 - Math.min(Math.max(distanceFromTop * 0.0003, 0), 0.3)
    : 0.85;
  const opacity = inView
    ? 1 - Math.min(Math.max(distanceFromTop * 0.0005, 0), 0.5)
    : 0;

  // Responsive carousel logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1200) {
        setVisibleDevelopers(4);
        setShowCarousel(false);
      } else if (width > 768) {
        setVisibleDevelopers(3);
        setShowCarousel(true);
      } else if (width > 480) {
        setVisibleDevelopers(2);
        setShowCarousel(true);
      } else {
        setVisibleDevelopers(1);
        setShowCarousel(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // initial

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentDevelopers = [];
  for (let i = 0; i < visibleDevelopers; i++) {
    currentDevelopers.push(
      developers[(currentIndex + i) % developers.length]
    );
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + developers.length) % developers.length
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % developers.length
    );
  };

  return (
    <section
      id="developers"
      ref={ref}
      className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      style={{
        transform: `scale(${scale}) translateZ(${inView ? 0 : -100}px)`,
        opacity,
        transformStyle: "preserve-3d",
        transition: "all 0.6s ease-out",
      }}
    >
      {/* Subtle background ring */}
      <div
        className="absolute -top-10 left-0 w-72 h-72 rounded-full"
        style={{
          border: "1px solid rgba(212, 175, 55, 0.1)",
          boxShadow: "0 0 35px rgba(212, 175, 55, 0.2)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4 text-3xl md:text-4xl font-semibold tracking-[0.2em] uppercase"
            style={{
              background:
                "linear-gradient(135deg, #b8956a 0%, #c0a068 50%, #9d7f52 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.4))",
            }}
          >
            Developers
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{
              background:
                "linear-gradient(90deg, #c0a068 0%, #b8956a 50%, #c0a068 100%)",
              boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
            }}
          />
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            The team behind ABACUS&apos;25, crafting the experience with passion
            and precision.
          </p>
        </motion.div>

        {/* Carousel controls (overlay) */}
        {showCarousel && (
          <>
            <button
              onClick={handlePrev}
              className="hidden sm:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 border border-[rgba(192,160,104,0.5)] hover:scale-110 transition"
              style={{
                boxShadow:
                  "0 0 15px rgba(212, 175, 55, 0.4)",
              }}
            >
              <span className="text-[#c0a068] text-lg">&lt;</span>
            </button>
            <button
              onClick={handleNext}
              className="hidden sm:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 border border-[rgba(192,160,104,0.5)] hover:scale-110 transition"
              style={{
                boxShadow:
                  "0 0 15px rgba(212, 175, 55, 0.4)",
              }}
            >
              <span className="text-[#c0a068] text-lg">&gt;</span>
            </button>
          </>
        )}

        {/* Developer Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentDevelopers.map((developer, index) => (
              <motion.div
                key={`${developer.name}-${index}`}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 40, scale: 0.9 }
                }
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.1,
                }}
                className="relative rounded-2xl overflow-hidden group"
                style={{
                  background:
                    "radial-gradient(circle at top, rgba(192,160,104,0.18), rgba(0,0,0,0.9))",
                  border: "1px solid rgba(192,160,104,0.3)",
                  boxShadow:
                    "0 0 25px rgba(212, 175, 55, 0.25)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Glow border on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(192,160,104,0.3), transparent)",
                    mixBlendMode: "screen",
                  }}
                />

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={developer.src}
                    alt={developer.name}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="relative px-5 py-6">
                  <h3
                    className="text-xl font-semibold mb-1"
                    style={{
                      color: "#c0a068",
                      textShadow:
                        "0 0 12px rgba(212, 175, 55, 0.5)",
                    }}
                  >
                    {developer.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {developer.role}
                  </p>

                  <a
                    href={developer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group/button flex items-center gap-2"
                      style={{
                        background:
                          "linear-gradient(135deg, #b8956a 0%, #c0a068 100%)",
                        color: "#000",
                        boxShadow:
                          "0 0 18px rgba(212, 175, 55, 0.6)",
                      }}
                    >
                      <span>LinkedIn</span>
                      <span className="transform group-hover/button:translate-x-0.5 transition-transform">
                        ↗
                      </span>
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile carousel controls (below grid) */}
          {showCarousel && (
            <div className="flex sm:hidden justify-center gap-6 mt-8">
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-full text-sm border border-[rgba(192,160,104,0.7)]"
                style={{
                  color: "#c0a068",
                  boxShadow:
                    "0 0 12px rgba(212, 175, 55, 0.4)",
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-full text-sm border border-[rgba(192,160,104,0.7)]"
                style={{
                  color: "#c0a068",
                  boxShadow:
                    "0 0 12px rgba(212, 175, 55, 0.4)",
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Developers;
