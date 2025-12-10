import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import spon1 from "../assets/Sponsors/spon11.jpg";
import spon3 from "../assets/Sponsors/tmb.png";
import e2w from "../assets/Reach/e2w.png"; // keep if you plan to use later

const Sponsors = ({ scrollY = 0 }) => {
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

  const sponsors = [
    { image: spon1, name: "Motorq", desc: "ABACUS'25 Title Sponsor" },
    // { image: e2w, name: "E2W STUDY", desc: "Educational Sponsor" },
    { image: spon3, name: "TMB", desc: "REACH'25 Sponsor" },
  ];

  const sectionTop = 2500; // approximate; adjust if needed
  const distanceFromTop = scrollY - sectionTop;
  const scale = inView
    ? 1 - Math.min(Math.max(distanceFromTop * 0.0003, 0), 0.3)
    : 0.9;
  const opacity = inView
    ? 1 - Math.min(Math.max(distanceFromTop * 0.0005, 0), 0.5)
    : 0;

  return (
    <section
      id="sponsors"
      ref={ref}
      className="relative min-h-screen flex items-center"
      style={{
        transform: `scale(${scale}) translateZ(${inView ? 0 : -100}px)`,
        opacity,
        transformStyle: "preserve-3d",
        transition: "all 0.6s ease-out",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-x-0 top-0 h-30 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at top, rgba(192,160,104,0.15), transparent 70%)",
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
          <h1
            className="mb-4 text-3xl md:text-4xl font-semibold tracking-[0.25em] uppercase"
            style={{
              background:
                "linear-gradient(135deg, #b8956a 0%, #c0a068 50%, #9d7f52 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 20px rgba(212, 175, 55, 0.5)",
            }}
          >
            Sponsors
          </h1>
          <div
            className="w-24 h-1 mx-auto mb-4"
            style={{
              background:
                "linear-gradient(90deg, #c0a068 0%, #b8956a 50%, #c0a068 100%)",
              boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
            }}
          />
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            We proudly collaborate with our esteemed sponsors who help elevate
            ABACUS&apos;25 to a grander scale.
          </p>
        </motion.div>

        {/* Sponsor cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 40, scale: 0.95 }
              }
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.15,
              }}
              className="relative overflow-hidden rounded-2xl"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(192,160,104,0.2), rgba(0,0,0,0.95))",
                border: "1px solid rgba(192,160,104,0.35)",
                boxShadow:
                  "0 0 28px rgba(212, 175, 55, 0.3)",
              }}
            >
              {/* Glow overlay */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(192,160,104,0.25), transparent)",
                  mixBlendMode: "screen",
                }}
              />

              <div className="relative flex flex-col items-center px-6 py-8">
                <p className="text-lg md:text-xl text-gray-200 text-center font-semibold mb-4">
                  {sponsor.desc}
                </p>

                <div
                  className="w-3/4 h-px mb-4"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(200,200,200,0.6), transparent)",
                  }}
                />

                <div className="w-full max-w-md rounded-2xl overflow-hidden mb-4 bg-black/60">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-32 object-contain md:h-40 p-4"
                  />
                </div>

                <div
                  className="w-3/4 h-px mt-2"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(200,200,200,0.6), transparent)",
                  }}
                />

                <h2
                  className="mt-4 text-lg md:text-xl font-bold text-center"
                  style={{
                    color: "#F5F5F5",
                    textShadow:
                      "0 0 10px rgba(0,0,0,0.6)",
                  }}
                >
                  {sponsor.name}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
