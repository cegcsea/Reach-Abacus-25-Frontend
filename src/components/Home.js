import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = ({ scrollY, scrollToContact }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Zoom in / blur as scroll
  const scale = 1 + scrollY * 0.001;
  const opacity = Math.max(1 - scrollY * 0.0015, 0);
  const blur = Math.min(scrollY * 0.05, 20);

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

      {/* Animated Gold Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              border: `1px solid rgba(212, 175, 55, ${0.3 - i * 0.08})`,
              boxShadow: `0 0 ${
                20 + i * 10
              }px rgba(212, 175, 55, ${0.2 - i * 0.05})`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content with 3D transform */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
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
            className="mb-6 text-5xl md:text-7xl font-bold tracking-[0.2em]"
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
            ABACUS &apos;25
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-4 tracking-wide"
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
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Abacus&apos;25 is the conglomeration of the brightest minds
            enhancing the participant’s knowledge and creative potentials.
            The 3-day annual symposium showcases 15+ events and flagship
            contests of crystal gazing technology. Abacus&apos;s coverage and
            deliberations of earlier symposia have been a grand success with
            insatiable thirst for technological development rejuvenating the
            technology with innovation. This year, Abacus is back offline on a
            grander scale with an innovative edge to all the events.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <button
              className="group relative px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, #b8956a 0%, #c0a068 100%)",
                boxShadow:
                  "0 0 30px rgba(212, 175, 55, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
              }}
              onClick={() => {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative z-10 text-black font-semibold">
                Register Now
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
              className="px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                border: "2px solid #c0a068",
                color: "#c0a068",
                boxShadow:
                  "0 0 20px rgba(212, 175, 55, 0.3), inset 0 0 10px rgba(212, 175, 55, 0.1)",
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
              View Schedule
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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

      {/* Decorative Gold Lines */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #c0a068 50%, transparent 100%)",
          boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #c0a068 50%, transparent 100%)",
          boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
        }}
      />
    </section>
  );
};

export default Home;
