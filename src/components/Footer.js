import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = ({ scrollY }) => {
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

  const sectionTop = 5500;
  const distanceFromTop = scrollY - sectionTop;
  const scale = inView
    ? 1 - Math.min(Math.max(distanceFromTop * 0.0003, 0), 0.3)
    : 0.8;
  const opacity = inView
    ? 1 - Math.min(Math.max(distanceFromTop * 0.0005, 0), 0.5)
    : 0;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{
        transform: `scale(${scale}) translateZ(${inView ? 0 : -100}px)`,
        opacity,
        transformStyle: "preserve-3d",
        transition: "all 0.6s ease-out",
      }}
    >
      {/* Spotlight Effect */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative w-full" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
            Contact Us
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-4"
            style={{
              background:
                "linear-gradient(90deg, #c0a068 0%, #b8956a 50%, #c0a068 100%)",
              boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
            }}
          />
          <p className="text-gray-400">
            Have questions? We&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Main Content - Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Location */}
            <div
              className="relative p-6 rounded-xl overflow-hidden"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.1)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(184, 134, 11, 0.2) 100%)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    color: "#c0a068",
                  }}
                >
                  <HiLocationMarker className="text-xl" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{
                      color: "#c0a068",
                      textShadow: "0 0 10px rgba(212, 175, 55, 0.3)",
                    }}
                  >
                    Location
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    College of Engineering Guindy, CEG - Anna University, Chennai 600028
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-lg overflow-hidden" style={{ border: "1px solid rgba(212, 175, 55, 0.3)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3624377065466!2d80.2359838!3d13.012576399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f6aaaaaab%3A0x90dc1b9c54311d4b!2sDepartment%20Of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1765305285461!5m2!1sen!2sin"
                  width="100%"
                  height="250"
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
              className="relative p-6 rounded-xl"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(184, 134, 11, 0.2) 100%)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    color: "#c0a068",
                  }}
                >
                  <MdEmail className="text-xl" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{
                      color: "#c0a068",
                      textShadow: "0 0 10px rgba(212, 175, 55, 0.3)",
                    }}
                  >
                    Email
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">General</p>
                      <a
                        href="mailto:cseaceg25@gmail.com"
                        className="text-gray-300 text-sm hover:text-[#c0a068] transition-colors block break-words"
                      >
                        cseaceg25@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Marketing</p>
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
              className="relative p-6 rounded-xl"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(184, 134, 11, 0.2) 100%)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    color: "#c0a068",
                  }}
                >
                  <MdPhone className="text-xl" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{
                      color: "#c0a068",
                      textShadow: "0 0 10px rgba(212, 175, 55, 0.3)",
                    }}
                  >
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Kamalesh N</p>
                      <a
                        href="tel:+918610386055"
                        className="text-gray-300 text-sm hover:text-[#c0a068] transition-colors block"
                      >
                        +91 86103 86055
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Sulochana H</p>
                      <a
                        href="tel:+919025193250"
                        className="text-gray-300 text-sm hover:text-[#c0a068] transition-colors block"
                      >
                        +91 90251 93250
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Madhubaalika M</p>
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

          {/* Contact Form Column - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div
              className="relative p-8 rounded-xl h-full flex flex-col"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.1)",
              }}
            >
              <h3
                className="text-3xl md:text-4xl mb-3"
                style={{
                  color: "#c0a068",
                  textShadow: "0 0 15px rgba(212, 175, 55, 0.4)",
                }}
              >
                Get in Touch
              </h3>
              <p className="text-gray-400 text-base md:text-lg mb-8">
                Send us a message and we&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col flex-1 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-base md:text-lg text-gray-400 mb-3"
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
                      required
                      className="w-full px-5 py-4 rounded-lg text-base md:text-lg text-white placeholder-gray-500 transition-all"
                      placeholder="Your name"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        border: "1px solid rgba(100, 100, 100, 0.7)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#c0a068";
                        e.currentTarget.style.boxShadow =
                          "0 0 20px rgba(212, 175, 55, 0.3)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(100, 100, 100, 0.7)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base md:text-lg text-gray-400 mb-3"
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
                      required
                      className="w-full px-5 py-4 rounded-lg text-base md:text-lg text-white placeholder-gray-500 transition-all"
                      placeholder="your.email@example.com"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        border: "1px solid rgba(100, 100, 100, 0.7)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#c0a068";
                        e.currentTarget.style.boxShadow =
                          "0 0 20px rgba(212, 175, 55, 0.3)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(100, 100, 100, 0.7)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="message"
                    className="block text-base md:text-lg text-gray-400 mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={10}
                    className="w-full flex-1 px-5 py-4 rounded-lg text-base md:text-lg text-white placeholder-gray-500 transition-all resize-none"
                    placeholder="Your message..."
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(100, 100, 100, 0.7)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#c0a068";
                      e.currentTarget.style.boxShadow =
                        "0 0 20px rgba(212, 175, 55, 0.3)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(100, 100, 100, 0.7)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-5 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mt-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, #b8956a 0%, #c0a068 100%)",
                    boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 50px rgba(212, 175, 55, 0.7)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 30px rgba(212, 175, 55, 0.5)";
                  }}
                >
                  <span className="text-black font-semibold text-lg md:text-xl">Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
