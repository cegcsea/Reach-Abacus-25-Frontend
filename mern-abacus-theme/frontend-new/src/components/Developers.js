import HariniImage from "../assets/images/pic.png";
import "../styles/developer.css";
import React, { useState } from "react";
const developers = [
  {
    name: "Harini Natarajan",
    role: "//Frontend Developer",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/harini-natarajan",
  },
  {
    name: "Sivanipriya",
    role: "//Frontend Developer",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/sivanipriya",
  },
  {
    name: "Visvesswar",
    role: "//Backend Developer",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/visvesswaram",
  },
  {
    name: "Lakshay",
    role: "//Backend Developer",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/lakshay",
  },
];

const Developers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + developers.length) % developers.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % developers.length);
  };
  return (
    <div className="developers" id="developers">
      <h2>#developers</h2>
      <div className="developers-carousel">
        {/* Previous Button */}
        <div className="carousel-button left" onClick={handlePrev}>
          ←
        </div>

        {/* Displaying the current two developer cards */}
        <div className="developer-card">
          <img
            src={developers[currentIndex].src}
            alt={developers[currentIndex].name}
            className="developer-photo"
          />
          <h3>{developers[currentIndex].name}</h3>
          <p>{developers[currentIndex].role}</p>
          <a
            href={developers[currentIndex].linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>↔ LinkedIn ↔</button>
          </a>
        </div>
        <div className="developer-card">
          <img
            src={developers[(currentIndex + 1) % developers.length].src}
            alt={developers[(currentIndex + 1) % developers.length].name}
            className="developer-photo"
          />
          <h3>{developers[(currentIndex + 1) % developers.length].name}</h3>
          <p>{developers[(currentIndex + 1) % developers.length].role}</p>
          <a
            href={developers[(currentIndex + 1) % developers.length].linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>↔ LinkedIn ↔</button>
          </a>
        </div>

        {/* Next Button */}
        <div className="carousel-button right" onClick={handleNext}>
          →
        </div>
      </div>
    </div>
  );
};
export default Developers;