import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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

  const contactInfo = [
    {
      icon: "📍",
      label: "Locate",
      value:
        "College of Engineering Guindy, CEG - Anna University, Chennai 600028",
    },
    {
      icon: "📧",
      label: "General",
      value: "cseaceg25@gmail.com",
    },
    {
      icon: "📧",
      label: "Marketing",
      value: "marketing@abacus.org.in",
    },
    {
      icon: "📞",
      label: "Kamalesh N",
      value: "+91 86103 86055",
    },
    {
      icon: "📞",
      label: "Sulochana H",
      value: "+91 90251 93250",
    },
    {
      icon: "📞",
      label: "Madhubaalika M",
      value: "+91 73058 97553",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
            Contact Us!!
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
            style={{
              transform: `translateZ(${inView ? 30 : 0}px)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div>
              <h3
                className="text-2xl mb-6"
                style={{
                  color: "#c0a068",
                  textShadow:
                    "0 0 15px rgba(212, 175, 55, 0.4)",
                }}
              >
                CONTACTS
              </h3>
              <p className="text-gray-400 mb-8">
                Collaborate with us! Send your queries to the emails below or
                reach the media contacts for immediate assistance.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="p-4 rounded-lg transition-all text-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(184, 134, 11, 0.2) 100%)",
                      border: "1px solid rgba(212, 175, 55, 0.3)",
                      boxShadow: "0 0 20px rgba(212, 175, 55, 0.1)",
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      {info.label}
                    </div>
                    <div className="text-gray-300">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              transform: `translateZ(${inView ? 30 : 0}px)`,
              transformStyle: "preserve-3d",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-2"
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
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 transition-all"
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
                  className="block text-sm text-gray-400 mb-2"
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
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 transition-all"
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

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-2"
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
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 transition-all resize-none"
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
                className="group w-full px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
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
                <span className="text-black">Send Message</span>
                <span className="text-black text-xl">📤</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div
        className="absolute bottom-10 left-10 w-2 h-2 rounded-full"
        style={{
          backgroundColor: "rgba(212, 175, 55, 0.4)",
          boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
        }}
      />
      <div
        className="absolute bottom-20 left-20 w-1 h-1 rounded-full"
        style={{
          backgroundColor: "rgba(212, 175, 55, 0.6)",
          boxShadow: "0 0 8px rgba(212, 175, 55, 0.8)",
        }}
      />
      <div
        className="absolute top-20 right-10 w-2 h-2 rounded-full"
        style={{
          backgroundColor: "rgba(212, 175, 55, 0.4)",
          boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
        }}
      />
    </section>
  );
};

export default Footer;
