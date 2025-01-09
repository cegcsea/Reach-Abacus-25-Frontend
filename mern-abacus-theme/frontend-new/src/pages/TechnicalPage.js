import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Eventinner.css";
import img1 from "../assets/images/events pic/1.png";

import Contact from "../components/Contact";
import { Link } from "react-router-dom"; // Import Link from React Router

const TechnicalPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const index = 1; // Define the variable before using it
  console.log(index); // Use it after definition
  
  const contacts = [
    {
      id: 1,
      name: "Gautham",
      phone: "+1 234 567 890",
    },
    {
      id: 2,
      name: "Ganesh",
      phone: "+1 234 567 890",
    },
  ];
  const events = [
    {
      title: "#Novice.Init()",
      description:
        "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills.",
      image: img1, // Replace with your image path
      path: "/EventIndividual/NoviceInit",
    },
    {
      title: "#Another Event",
      description:
        "A DBMS challenge that combines theoretical knowledge with practical application. The first round involves DBMS-based multiple-choice questions (MCQs), testing participants' understanding of database concepts. Successful participants advance to Round 2, a hands-on SQL coding challenge, where they apply their skills to solve real-world database problems.",
      image: img1, // Replace with your image path
      path: "/EventIndividual/NoviceInit",
    },
    {
      title: "#Novice.Init()",
      description:
        "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills.",
      image: img1, // Replace with your image path,
      path: "/EventIndividual/NoviceInit",
    },
    {
      title: "#Another Event",
      description:
        "A DBMS challenge that combines theoretical knowledge with practical application. The first round involves DBMS-based multiple-choice questions (MCQs), testing participants' understanding of database concepts. Successful participants advance to Round 2, a hands-on SQL coding challenge, where they apply their skills to solve real-world database problems.",
      image: img1, // Replace with your image path,
      path: "/EventIndividual/NoviceInit",
    },
    // Add more events here
  ];
  return (
    <div className="bg-black">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div style={{ backgroundColor: "#000", padding: "20px" }}>
        <div className="heading">
          <h1 style={{ textAlign: "center", color: "#fff" }}>
            Technical Events
          </h1>
        </div>
        <div className="out">
          {events.map((event, index) => (
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
                  className="mt-10 mb-6 px-6 py-4 bg-gradient-to-br from-red-300 via-red-500 to-red-800 text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-shadow focus:outline-none focus:shadow-[0_0_15px_rgba(255,223,47,0.8)]"
                >
                  Read More &lt;~&gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact contacts={contacts}  />
    </div>
  );
};

export default TechnicalPage;
