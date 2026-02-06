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
  const location = useLocation();
  const { event } = location.state || {};

  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div style={{ padding: "20px" }}>
        <div className="heading">
          <h1 style={{ textAlign: "center", color: "#fff" }}>{event.title}</h1>
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
                  className="lg:mt-10 mx-7 lg:mb-6  px-4 py-2 lg:px-6 lg:py-4 bg-gradient-to-r from-[#c0a068] via-[#aa8c2c] to-[#66541a] text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-shadow focus:outline-none focus:shadow-[0_0_15px_rgba(255,223,47,0.8)]"
                  style={{ marginTop: "20px", marginLeft: "-1px" }}
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
