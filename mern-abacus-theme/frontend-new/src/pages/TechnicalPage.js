import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom"; // Import useLocation
import "../styles/Eventinner.css";
import img1 from "../assets/images/events pic/1.png";
import { EventContacts } from "../constants/events";

import Contact from "../components/Contact";
import { Link } from "react-router-dom"; // Import Link from React Router

const TechnicalPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const index = 1; // Define the variable before using it
  console.log(index); // Use it after definition
  const location=useLocation();
  const { event } = location.state || {};
  
   
  return (
    <div className="bg-black">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div style={{ backgroundColor: "#000", padding: "20px" }}>
        <div className="heading">
          <h1 style={{ textAlign: "center", color: "#fff" }}>
            {event.title}
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
                  className="mt-10 mb-6 px-6 py-4 bg-gradient-to-br from-red-300 via-red-500 to-red-800 text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-shadow focus:outline-none focus:shadow-[0_0_15px_rgba(255,223,47,0.8)]"
                >
                  Read More &lt;~&gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact contacts={EventContacts}/>
    </div>
  );
};

export default TechnicalPage;
