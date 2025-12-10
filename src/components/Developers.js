// src/components/Developers.js
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

import HariniImage from "../assets/images/testpic.jpg";
import img1 from "../assets/images/shevaani.jpg";
import img2 from "../assets/images/Pramod.jpg";
import img3 from "../assets/images/harini.jpg";
import ShinyText from "./ShinyText"; // adjust path if needed
import "./Developers.css"; // optional: add the CSS below to this file or your global css

const developers = [
  {
    name: "Shevaani",
    src: img1,
    linkedin: "https://linkedin.com/in/shevaani",
  },
  {
    name: "Sri Pramod",
    src: img2,
    linkedin: "https://linkedin.com/in/sripramod",
  },
  {
    name: "Harini",
    src: img3,
    linkedin: "https://linkedin.com/in/harini",
  },
  {
    name: "Lakshay",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/lakshay",
  },
];

const TiltedCard = ({
  imageSrc,
  altText,
  className = "",
  containerHeight = "500px",
  containerWidth = "320px",
  imageHeight = "400px",
  imageWidth = "320px",
  scaleOnHover = 1.05,
  rotateAmplitude = 8,
  onMouseEnter,
  onMouseLeave,
  children
}) => {
  const ref = useRef(null);

  // motion values and springs
  const rotateX = useSpring(0, { stiffness: 100, damping: 30, mass: 2 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 30, mass: 2 });
  const scale = useSpring(1, { stiffness: 100, damping: 30, mass: 2 });

  // store normalized pointer pos (0..1)
  const normRef = useRef({ x: 0.5, y: 0.5 });
  const isPointerInsideRef = useRef(false);

  // update rotation using normalized coordinates (keeps stable across scroll)
  const updateRotationFromNormalized = (nx, ny) => {
    // nx/ny in [0,1], center is 0.5
    const rx = (ny - 0.5) * -2 * rotateAmplitude; // invert Y for rotateX
    const ry = (nx - 0.5) * 2 * rotateAmplitude;
    rotateX.set(rx);
    rotateY.set(ry);
  };

  function handleMouse(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    // normalized coordinates relative to element (clamped 0..1)
    const nx = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    const ny = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);

    normRef.current = { x: nx, y: ny };
    updateRotationFromNormalized(nx, ny);
  }

  function handleMouseEnterLocal() {
    isPointerInsideRef.current = true;
    scale.set(scaleOnHover);
    if (onMouseEnter) onMouseEnter();
    // small initial rotation from center
    updateRotationFromNormalized(normRef.current.x, normRef.current.y);
  }

  function handleMouseLeaveLocal() {
    isPointerInsideRef.current = false;
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    if (onMouseLeave) onMouseLeave();
  }

  // When page scrolls while pointer inside, recompute rotation using normalized coords
  useEffect(() => {
    const onScroll = () => {
      if (!isPointerInsideRef.current || !ref.current) return;
      // recompute rotation from saved normalized coords
      updateRotationFromNormalized(normRef.current.x, normRef.current.y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <figure
      ref={ref}
      className={`tilted-card-figure relative ${className}`}
      style={{
        height: containerHeight,
        width: containerWidth,
        perspective: "1000px",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnterLocal}
      onMouseLeave={handleMouseLeaveLocal}
    >
      {/* animated outline (glowing border) */}
      <div
        className="tilted-card-outline pointer-events-none"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 16,
          zIndex: 5,
        }}
      />

      <motion.div
        className="w-full h-full relative rounded-2xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 w-full rounded-t-2xl"
          style={{
            height: imageHeight,
            width: imageWidth,
            objectFit: "cover",
            display: "block",
            zIndex: 1,
          }}
          draggable={false}
        />
        {children}
      </motion.div>
    </figure>
  );
};

const Developers = ({ scrollY = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate the gallery
  useEffect(() => {
    if (!isAutoPlaying || !inView) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % developers.length);
    }, 3000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, inView]);

  // Scroll effect (kept as you had it)
  const sectionTop = 3500;
  const distanceFromTop = scrollY - sectionTop;
  const scale = inView
    ? 1 - Math.min(Math.max(distanceFromTop * 0.0002, 0), 0.2)
    : 0.9;
  const opacity = inView
    ? 1 - Math.min(Math.max(distanceFromTop * 0.0003, 0), 0.4)
    : 0;

  return (
    <section
      id="developers"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center"
      style={{
        transform: `scale(${scale})`,
        opacity,
        transition: "all 0.8s ease-out",
      }}
    >
      {/* Cinematic golden background lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, #d4af37 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, #b8956a 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="mb-4 text-3xl md:text-4xl font-semibold"
            style={{
              background:
                "linear-gradient(135deg, #b8956a 0%, #c0a068 50%, #9d7f52 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(212, 175, 55, 0.6))",
            }}
          >
            THE DEVELOPERS
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-4"
            style={{
              background:
                "linear-gradient(90deg, #c0a068 0%, #b8956a 50%, #c0a068 100%)",
              boxShadow: "0 0 15px rgba(212, 175, 55, 0.7)",
            }}
          />
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Meet the talented team behind ABACUS&apos;25, crafting exceptional experiences with passion and precision.
          </p>
        </motion.div>

        {/* Main Gallery Container */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Previous Developer Card (left) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 0.4, x: -60 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            className="absolute left-2 md:left-8 w-40 md:w-56 h-52 md:h-64 rounded-xl overflow-hidden z-10"
            style={{
              transform: "perspective(1000px) rotateY(20deg)",
              filter: "brightness(0.4) blur(2px)",
            }}
          >
            <img
              src={developers[(currentIndex - 1 + developers.length) % developers.length].src}
              alt="Previous"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Next Developer Card (right) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 0.4, x: 60 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
            className="absolute right-2 md:right-8 w-40 md:w-56 h-52 md:h-64 rounded-xl overflow-hidden z-10"
            style={{
              transform: "perspective(1000px) rotateY(-20deg)",
              filter: "brightness(0.4) blur(2px)",
            }}
          >
            <img
              src={developers[(currentIndex + 1) % developers.length].src}
              alt="Next"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Current Developer Card (center) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" }
              }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
              className="relative z-20"
            >
              <TiltedCard
                imageSrc={developers[currentIndex].src}
                altText={developers[currentIndex].name}
                containerHeight="500px"
                containerWidth="320px"
                imageHeight="400px"
                imageWidth="320px"
                rotateAmplitude={10}
                scaleOnHover={1.05}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="rounded-2xl"
                // using inline style here is okay — preserves your previous effects
                style={{
                  boxShadow: isHovered
                    ? "0 0 60px rgba(212, 175, 55, 0.8), 0 0 100px rgba(212, 175, 55, 0.4), inset 0 0 40px rgba(255, 255, 255, 0.1)"
                    : "0 0 40px rgba(212, 175, 55, 0.5), 0 0 80px rgba(212, 175, 55, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05)",
                  border: "2px solid rgba(212, 175, 55, 0.4)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {/* Image gradient overlay */}
                <div
                  className="absolute top-0 left-0 w-full h-[400px] rounded-t-2xl bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  style={{ opacity: isHovered ? 0.7 : 0.4, zIndex: 2 }}
                />

                {/* Name Section (Below Image) */}
                <div
                  className="absolute top-[400px] left-0 w-full h-[100px] rounded-b-2xl p-6 flex flex-col items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(0, 0, 0, 0.9)",
                    borderTop: "2px solid rgba(212, 175, 55, 0.3)",
                    zIndex: 3,
                  }}
                >
                  {/* Shiny name text (preserves existing color & size) */}
                  <ShinyText
                    text={developers[currentIndex].name}
                    speed={4}
                    className="text-2xl md:text-3xl font-bold"
                    disabled={false}
                  />
                </div>

                {/* LinkedIn Button - Appears on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    pointerEvents: isHovered ? 'auto' : 'none',
                    transform: isHovered ? "translateY(200px)" : "translateY(0px)",
                    zIndex: 30,
                  }}
                >
                  <a
                    href={developers[currentIndex].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-30"
                  >
                    <button
                      className="px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 flex items-center gap-3 group"
                      style={{
                        background: "linear-gradient(135deg, #b8956a 0%, #c0a068 100%)",
                        color: "#000",
                        boxShadow: "0 0 30px rgba(212, 175, 55, 0.9), inset 0 0 20px rgba(255, 255, 255, 0.2)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 0 50px rgba(212, 175, 55, 1.2), inset 0 0 30px rgba(255, 255, 255, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 0 30px rgba(212, 175, 55, 0.9), inset 0 0 20px rgba(255, 255, 255, 0.2)";
                      }}
                    >
                      <span className="text-lg">LinkedIn Profile</span>
                      <span className="text-xl transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </button>
                  </a>
                </div>
              </TiltedCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator Dots - Replaces navigation buttons */}
        <div className="flex justify-center mt-10 space-x-4">
          {developers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? "scale-125" : "scale-100"
              }`}
              style={{
                background: index === currentIndex
                  ? "linear-gradient(135deg, #c0a068, #b8956a)"
                  : "rgba(192, 160, 104, 0.3)",
                boxShadow: index === currentIndex
                  ? "0 0 20px rgba(212, 175, 55, 0.8)"
                  : "0 0 8px rgba(212, 175, 55, 0.3)",
              }}
            />
          ))}
        </div>

        {/* Auto-play toggle */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-4 py-2 rounded-lg text-sm transition-all duration-300"
            style={{
              color: "#c0a068",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              background: "rgba(0, 0, 0, 0.5)",
              boxShadow: "0 0 10px rgba(212, 175, 55, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(212, 175, 55, 0.4)";
              e.currentTarget.style.background = "rgba(0, 0, 0, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 10px rgba(212, 175, 55, 0.2)";
              e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
            }}
          >
            {isAutoPlaying ? "⏸ Pause Rotation" : "▶ Resume Rotation"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Developers;
