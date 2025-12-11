import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom"; // Import useLocation
import "../styles/Eventinner.css";
//import img1 from "../assets/images/events pic/1.png";
import { EventContacts } from "../constants/events";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import Contact from "../components/Contact";
import { Link } from "react-router-dom"; // Import Link from React Router

const TechnicalPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const index = 1; // Define the variable before using it
  //console.log(index); // Use it after definition
  const location=useLocation();
  const { event } = location.state || {};
  
  const { isLoading } =LoaderData();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div style={{ background: "transparent", minHeight: "100vh" }}>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="technical-page-wrapper" style={{ background: "transparent", minHeight: "100vh" }}>
        <div className="heading">
          <h1 style={{ textAlign: "center", color: "#fff" }}>
            {event?.title || "Events"}
          </h1>
        </div>
        <div className="out">
          {event?.event?.map((event, index) => (
            <div
              key={index}
              className={`content-container ${
                index % 2 === 1 ? "reverse" : ""
              }`}
            >
              <img src={event.image} alt={event.title} />
              <div className="text-container">
                <h1>{event.title}</h1>
                <p>{event.description}</p>
                <Link
                  to={event.path} // Dynamic link to the event's detailed page
                  state={{ event }} 
                  className="read-more-button"
                  style={{ 
                    marginTop: "20px", 
                    display: "inline-block",
                    padding: "12px 24px",
                    fontSize: "1rem",
                    background: "linear-gradient(135deg, #b8956a 0%, #8b6e3d 25%, #c0a068 50%, #b8956a 75%, #9d7f52 100%)",
                    boxShadow: "0 4px 15px rgba(192, 160, 104, 0.4)",
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    textAlign: "center"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = "0 0 10px rgba(192, 160, 104, 0.8)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = "0 4px 15px rgba(192, 160, 104, 0.4)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Read More &lt;~&gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Contact contacts={EventContacts}/> */}
    </div>
  );
};

export default TechnicalPage;
