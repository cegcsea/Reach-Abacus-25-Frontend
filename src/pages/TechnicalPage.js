import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import "../styles/TechnicalPage.css";
import { EventContacts } from "../constants/events";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

const TechnicalPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { event } = location.state || {};

  // const { isLoading } = LoaderData();

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="tech-page-wrapper">
        <div className="page-header">
          <h1 className="main-title">{event?.title}</h1>
        </div>

        {/* GUVI Free Courses Banner */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #c0a068 0%, #aa8c2c 50%, #66541a 100%)",
            padding: "clamp(20px, 4vw, 32px)",
            margin: "clamp(20px, 4vw, 30px) auto",
            maxWidth: "1200px",
            borderRadius: "16px",
            boxShadow:
              "0 8px 32px rgba(192, 160, 104, 0.5), 0 0 60px rgba(192, 160, 104, 0.3)",
            border: "2px solid rgba(192, 160, 104, 0.4)",
            animation: "goldPulse 2s ease-in-out infinite",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(45deg, transparent 30%, rgba(255,237,192,0.2) 50%, transparent 70%)",
              animation: "goldShimmer 3s infinite",
            }}
          />
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  fontWeight: "900",
                  marginBottom: "clamp(10px, 2vw, 16px)",
                  textShadow:
                    "2px 2px 12px rgba(0,0,0,0.5), 0 0 20px rgba(192,160,104,0.4)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                🎓 EXCLUSIVE BENEFIT! 🎓
              </h2>
              <p
              style={{
                color: "#fff",
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                fontWeight: "600",
                lineHeight: "1.6",
                textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                margin: "0 auto",
                maxWidth: "900px",
                padding: "0 15px",
              }}
            >
              All Technical Event Participants get{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #ffd700, #ffed4e, #ffd700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "900",
                  fontSize: "clamp(1.3em, 3vw, 1.4em)",
                  textShadow: "none",
                  filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))",
                }}
              >
                FREE Online Courses
              </span>{" "}
              from HCL GUVI!
            </p>
            <p
              style={{
                color: "rgba(255,237,192,0.95)",
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                marginTop: "clamp(8px, 2vw, 12px)",
                fontWeight: "500",
                padding: "0 15px",
              }}
            >
              Premium courses in AI, Full Stack Development, Data Science &
              More! 🚀
            </p>
          </div>
        </div>

        <div className="cards-container">
          {event?.event?.map((item, index) => (
            <div
              key={index}
              className={`event-card ${index % 2 !== 0 ? "reverse-layout" : ""}`}
            >
              <div className="card-image-wrapper">
                {item.badge && (
                  <div className="technical-card-badge">
                    <span>{item.badge}</span>
                  </div>
                )}
                <img src={item.image} alt={item.title} />
              </div>

              <div className="card-content">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">{item.description}</p>

                <Link
                  to={item.path}
                  state={{ event: item }}
                  className="read-more-btn"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Contact contacts={EventContacts} />
    </>
  );
};

export default TechnicalPage;
