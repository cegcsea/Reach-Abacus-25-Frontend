import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import { MdCalendarToday, MdPeople } from "react-icons/md";
import logo from "../assets/images/logo.png";

const About = ({ scrollY }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

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
      title: "December 15-17, 2025",
      description: "Three days of immersive experiences",
    },
    {
      icon: <HiLocationMarker className="text-xl" />,
      title: "College of Engineering Guindy",
      description: "CEG - Anna University, Chennai 600028",
    },
    {
      icon: <MdPeople className="text-xl" />,
      title: "2000+ Attendees",
      description: "Industry leaders and innovators",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center"
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
            className="mb-4 text-3xl md:text-4xl font-semibold"
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
            className="w-24 h-1 mx-auto mb-4"
            style={{
              background:
                "linear-gradient(90deg, #c0a068 0%, #b8956a 50%, #c0a068 100%)",
              boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
            }}
          />
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            The premier technical symposium celebrating innovation and excellence
          </p>
        </motion.div>

        {/* Image and Paragraph - Straight Parallel */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div
              className="relative overflow-hidden rounded-2xl w-full max-w-md"
              style={{
                border: "2px solid rgba(212, 175, 55, 0.3)",
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.2)",
              }}
            >
              <img
                src={logo}
                alt="Abacus'25 Logo"
                className="w-full h-auto p-4"
              />
            </div>
          </motion.div>

          {/* Right: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Abacus&apos;26 is the conglomeration of the brightest minds
                enhancing the participant's knowledge and creative potentials. The
                3-day annual symposium showcases 15+ events and flagship contests
                of crystal gazing technology. Abacus&apos;s coverage and
                deliberations of earlier symposia have been a grand success with
                insatiable thirst for technological development rejuvenating the
                technology with innovation. This year, Abacus is back offline on
                a grander scale with an innovative edge to all the events.
              </p>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Join us for competitions, workshops, and panel discussions that
                bridge academia and industry. Expect hands-on sessions, live
                demonstrations, and networking opportunities designed to expand
                horizons and spark new collaborations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Event Highlights - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3
            className="mb-8 text-xl md:text-2xl font-semibold"
            style={{
              color: "#c0a068",
              textShadow: "0 0 10px rgba(212, 175, 55, 0.3)",
            }}
          >
            Event Highlights
          </h3>
          
          {/* Three Boxes in Horizontal Line */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex-1 p-6 rounded-xl text-center min-h-[180px] flex flex-col"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  boxShadow: "0 0 15px rgba(212, 175, 55, 0.1)",
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(184, 134, 11, 0.2) 100%)",
                      border: "1px solid rgba(212, 175, 55, 0.3)",
                      color: "#c0a068",
                    }}
                  >
                    {feature.icon}
                  </div>
                </div>
                <h4
                  className="mb-2 font-semibold flex-1"
                  style={{
                    color: "#c0a068",
                    textShadow: "0 0 10px rgba(212, 175, 55, 0.3)",
                  }}
                >
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;