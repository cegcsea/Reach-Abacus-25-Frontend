import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
      icon: "📅",
      title: "December 15-17, 2025",
      description: "Three days of immersive experiences",
    },
    {
      icon: "📍",
      title: "College of Engineering Guindy",
      description: "CEG - Anna University, Chennai 600028",
    },
    {
      icon: "👥",
      title: "2000+ Attendees",
      description: "Industry leaders and innovators",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      style={{
        transform: `scale(${scale}) translateZ(${inView ? 0 : -100}px)`,
        opacity,
        transformStyle: "preserve-3d",
        transition: "all 0.6s ease-out",
      }}
    >
      {/* Background Decoration */}
      <div
        className="absolute top-20 right-0 w-64 h-64 rounded-full"
        style={{
          border: "1px solid rgba(212, 175, 55, 0.1)",
          boxShadow: "0 0 40px rgba(212, 175, 55, 0.2)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4 text-3xl md:text-4xl font-semibold tracking-wide"
            style={{
              background:
                "linear-gradient(135deg, #b8956a 0%, #c0a068 50%, #9d7f52 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.4))",
            }}
          >
            About Abacus&apos;25
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{
              background:
                "linear-gradient(90deg, #c0a068 0%, #b8956a 50%, #c0a068 100%)",
              boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
            }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            style={{
              transform: `translateZ(${inView ? 30 : 0}px)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              style={{
                border: "2px solid rgba(212, 175, 55, 0.3)",
                boxShadow: "0 0 40px rgba(212, 175, 55, 0.2)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1760413452340-51917ef5fd9c?auto=format&fit=crop&w=1080&q=80"
                alt="Luxury Tech Event"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 -z-10"
              style={{
                border: "2px solid rgba(212, 175, 55, 0.3)",
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)",
              }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              transform: `translateZ(${inView ? 30 : 0}px)`,
              transformStyle: "preserve-3d",
            }}
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              Abacus&apos;25 is the conglomeration of the brightest minds
              enhancing the participant's knowledge and creative potentials. The
              3-day annual symposium showcases 15+ events and flagship contests
              of crystal gazing technology. Abacus&apos;s coverage and
              deliberations of earlier symposia have been a grand success with
              insatiable thirst for technological development rejuvenating the
              technology with innovation. This year, Abacus is back offline on
              a grander scale with an innovative edge to all the events.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Join us for competitions, workshops, and panel discussions that
              bridge academia and industry. Expect hands-on sessions, live
              demonstrations, and networking opportunities designed to expand
              horizons and spark new collaborations.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="p-3 rounded-lg transition-all text-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(184, 134, 11, 0.2) 100%)",
                      border: "1px solid rgba(212, 175, 55, 0.3)",
                      boxShadow: "0 0 20px rgba(212, 175, 55, 0.1)",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3
                      className="mb-1 text-lg"
                      style={{
                        color: "#c0a068",
                        textShadow:
                          "0 0 10px rgba(212, 175, 55, 0.3)",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
