// src/components/About.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import { MdCalendarToday, MdPeople } from "react-icons/md";

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

const About = ({ scrollY }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const sectionTop = 1000;
  const distanceFromTop = scrollY - sectionTop;
  const scale = inView
    ? 1 - Math.min(Math.max(distanceFromTop * 0.0003, 0), 0.3)
    : 0.8;
  const opacity = inView
    ? 1 - Math.min(Math.max(distanceFromTop * 0.0005, 0), 0.5)
    : 0;

  const features = [
    {
      icon: <MdCalendarToday className="text-xl" />,
      title: "February 12-14, 2026",
      description: "Three days of immersive experiences",
    },
    {
      icon: <HiLocationMarker className="text-xl" />,
      title: "College of Engineering Guindy",
      description: "CEG - Anna University, Chennai",
    },
    {
      icon: <MdPeople className="text-xl" />,
      title: "1500+ Attendees",
      description: "Industry experts, leaders & innovators",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center"
      style={{
        transform: `scale(${scale}) translateZ(${inView ? 0 : -100}px)`,
        opacity,
        transformStyle: "preserve-3d",
        transition: "all 0.6s ease-out",
      }}
    >
      <div className="max-w-6xl mx-auto w-full" ref={ref}>
        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className={`mb-4 ${isMobile ? "text-2xl" : "text-3xl md:text-4xl"} font-semibold`}
            style={{
              background:
                "linear-gradient(135deg, #b8956a 0%, #c0a068 50%, #9d7f52 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.4))",
            }}
          >
            ABOUT ABACUS&apos;26
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-4"
            style={{
              background:
                "linear-gradient(90deg, #c0a068 0%, #b8956a 50%, #c0a068 100%)",
              boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
            }}
          />
          <p className="text-gray-400 text-md md:text-lg max-w-2xl mx-auto">
            The premier technical symposium celebrating innovation and excellence
          </p>
        </motion.div>

        {/* Free-flowing Paragraph - No box, full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full mb-12 px-4 md:px-0"
        >
          <p 
            className={`text-gray-300 leading-relaxed mx-auto ${isMobile ? "text-md md:text-lg" : "text-lg md:text-xl"} max-w-4xl text-justify`}
          >
            Abacus&apos;26 is the conglomeration of the brightest minds enhancing the 
            participant&apos;s knowledge and creative potentials. The 3-day annual 
            symposium showcases 15+ events and flagship contests of crystal gazing 
            technology. Abacus&apos;s coverage and deliberations of earlier symposia 
            have been a grand success with insatiable thirst for technological 
            development rejuvenating the technology with innovation. This year, 
            Abacus is back offline on a grander scale with an innovative edge to 
            all the events.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;