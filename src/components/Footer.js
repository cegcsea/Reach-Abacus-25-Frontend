// src/components/Footer.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
const server = process.env.REACT_APP_API_BASE_URL;

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

const Footer = ({ scrollY }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const isMobile = useIsMobile();

  // State for focused inputs
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const sectionTop = 5500;
  const distanceFromTop = scrollY - sectionTop;
  const scale = inView
    ? 1 - Math.min(Math.max(distanceFromTop * 0.0003, 0), 0.3)
    : 0.9;
  const opacity = inView
    ? 1 - Math.min(Math.max(distanceFromTop * 0.0005, 0), 0.5)
    : 0;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${server}/user/post-query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        title: formData.message,   // 👈 satisfies Joi
        message: formData.message // 👈 satisfies Joi
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Thank you for your message!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("Server error");
  }
};



  const handleFocus = (fieldName) => {
    setFocusedInput(fieldName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <section
      id="contact"
      className="relative py-8 px-4 sm:px-6 lg:px-8"
      style={{
        transform: `scale(${scale}) translateZ(${inView ? 0 : -100}px)`,
        opacity,
        transformStyle: "preserve-3d",
        transition: "all 0.6s ease-out",
      }}
    >
      {/* Spotlight Effect */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-36 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative w-full" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2
            className={`mb-4 ${isMobile ? "text-2xl" : "text-3xl md:text-4xl"} font-semibold tracking-[0.2em] uppercase`}
            style={{
              background:
                "linear-gradient(135deg, #b8956a 0%, #c0a068 50%, #9d7f52 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.4))",
            }}
          >
            CONTACT US
          </h2>
          <div
            className="w-20 h-[3px] mx-auto mb-2"
            style={{
              background:
                "linear-gradient(90deg, #c0a068 0%, #b8956a 50%, #c0a068 100%)",
              boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
            }}
          />
          <p className="text-gray-400 text-sm md:text-base">
            Have questions? We&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Top row: Location, Email, Contact */}
        <motion.div
          initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, y: 30 }}
          animate={inView ? (isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }) : (isMobile ? { opacity: 0, y: 20 } : { opacity: 0, y: 30 })}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-4 mb-4`}
        >
          {/* Location */}
          <div
            className="relative p-3 rounded-xl"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              border: "3px solid rgba(212, 175, 55, 0.2)",
              boxShadow: "0 0 15px rgba(212, 175, 55, 0.12)",
            }}
          >
            <div className="flex items-start gap-3 mb-2">
              
              <div className="flex-1">
                <h3
                  className="text-base md:text-lg font-semibold mb-1 p-1"
                  style={{
                    color: "#c0a068",
                    textShadow: "0 0 10px rgba(212, 175, 55, 0.3)",
                    lineHeight: "1.1",
                  }}
                >
                  Location
                </h3>
                <p className="text-sm sm:text-sm leading-relaxed mb-2 text-gray-300">
                  College of Engineering Guindy, CEG - Anna University, Chennai
                  600028
                </p>
              </div>
            </div>
            <div
              className="rounded-lg overflow-hidden mt-1"
              style={{ border: "3px solid rgba(212, 175, 55, 0.3)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3624377065466!2d80.2359838!3d13.012576399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f6aaaaaab%3A0x90dc1b9c54311d4b!2sDepartment%20Of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1765305285461!5m2!1sen!2sin"
                width="100%"
                height={isMobile ? 180 : 100}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Department of Computer Science and Engineering Location"
              />
            </div>
          </div>

          {/* Email */}
          <div
            className="relative p-3 rounded-xl"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              border: "3px solid rgba(212, 175, 55, 0.2)",
              boxShadow: "0 0 15px rgba(212, 175, 55, 0.12)",
            }}
          >
            <div className="flex items-start gap-3">
              
              <div className="flex-1">
                <h3
                  className="text-base md:text-lg font-semibold mb-2 p-1"
                  style={{
                    color: "#c0a068",
                    textShadow: "0 0 10px rgba(212, 175, 55, 0.3)",
                    lineHeight: "1.1",
                  }}
                >
                  Email
                </h3>
                <div className="space-y-4 text-sm p-3">
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">General</p>
                    <a
                      href="mailto:cseaceg26@gmail.com"
                      className="text-gray-300 text-sm hover:text-[#c0a068] transition-colors block break-words"
                    >
                      cseaceg26@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">Marketing</p>
                    <a
                      href="mailto:marketing@abacus.org.in"
                      className="text-gray-300 text-sm hover:text-[#c0a068] transition-colors block break-words"
                    >
                      marketing@abacus.org.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div
            className="relative p-3 rounded-xl"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              border: "3px solid rgba(212, 175, 55, 0.2)",
              boxShadow: "0 0 15px rgba(212, 175, 55, 0.12)",
            }}
          >
            <div className="flex items-start gap-3">
              
              <div className="flex-1">
                <h3
                  className="text-base md:text-lg font-semibold mb-2 p-1"
                  style={{
                    color: "#c0a068",
                    textShadow: "0 0 10px rgba(212, 175, 55, 0.3)",
                    lineHeight: "1.1",
                  }}
                >
                  Contact
                </h3>
                <div className="space-y-1.5 text-sm">
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">Kamalesh N</p>
                    <a
                      href="tel:+918610386055"
                      className="text-gray-300 text-sm hover:text-[#c0a068] transition-colors block"
                    >
                      +91 86103 86055
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">Sulochana H</p>
                    <a
                      href="tel:+919025193250"
                      className="text-gray-300 text-sm hover:text-[#c0a068] transition-colors block"
                    >
                      +91 90251 93250
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">
                      Madhubaalika M
                    </p>
                    <a
                      href="tel:+917305897553"
                      className="text-gray-300 text-sm hover:text-[#c0a068] transition-colors block"
                    >
                      +91 73058 97553
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Get in Touch Form - Wider and centered */}
        <motion.div
          initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, y: 30 }}
          animate={inView ? (isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }) : (isMobile ? { opacity: 0, y: 20 } : { opacity: 0, y: 30 })}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
          <div
            className="relative p-4 md:p-6 rounded-xl w-full"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              border: "3px solid rgba(212, 175, 55, 0.2)",
              boxShadow: "0 0 20px rgba(212, 175, 55, 0.15)",
            }}
          >
            <h3
              className={`text-xl ${isMobile ? "text-lg" : "md:text-2xl"} mb-3 text-center font-semibold`}
              style={{
                color: "#c0a068",
                textShadow: "0 0 12px rgba(212, 175, 55, 0.4)",
              }}
            >
              Get in Touch
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-4 text-center">
              Send us a message and we&apos;ll get back to you as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-3"
            >
              <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-3`}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-400 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    required
                    className="w-full px-3 py-2 rounded-lg text-sm text-white placeholder-gray-500 transition-all duration-200"
                    placeholder="Your name"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      border: focusedInput === "name" 
                        ? "2px solid #c0a068" 
                        : "1px solid rgba(212, 175, 55, 0.3)",
                      boxShadow: focusedInput === "name" 
                        ? "0 0 15px rgba(212, 175, 55, 0.3), inset 0 0 8px rgba(212, 175, 55, 0.1)" 
                        : "none",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-400 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    required
                    className="w-full px-3 py-2 rounded-lg text-sm text-white placeholder-gray-500 transition-all duration-200"
                    placeholder="your.email@example.com"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      border: focusedInput === "email" 
                        ? "2px solid #c0a068" 
                        : "1px solid rgba(212, 175, 55, 0.3)",
                      boxShadow: focusedInput === "email" 
                        ? "0 0 15px rgba(212, 175, 55, 0.3), inset 0 0 8px rgba(212, 175, 55, 0.1)" 
                        : "none",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  required
                  rows={isMobile ? 4 : 3}
                  className="w-full px-3 py-2 rounded-lg text-sm text-white placeholder-gray-500 transition-all duration-200 resize-none"
                  placeholder="Your message..."
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    border: focusedInput === "message" 
                      ? "2px solid #c0a068" 
                      : "1px solid rgba(212, 175, 55, 0.3)",
                    boxShadow: focusedInput === "message" 
                      ? "0 0 15px rgba(212, 175, 55, 0.3), inset 0 0 8px rgba(212, 175, 55, 0.1)" 
                      : "none",
                    outline: "none",
                  }}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="group px-6 py-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, #b8956a 0%, #c0a068 100%)",
                    boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)",
                    width: isMobile ? "80%" : "auto",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 30px rgba(212, 175, 55, 0.7)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(212, 175, 55, 0.5)";
                  }}
                >
                  <span className="text-black font-semibold text-sm md:text-base">
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;