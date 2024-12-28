import React, { useState } from 'react';
import '../styles/about.css';
import '../styles/global.css';
import '../styles/developer.css';
import '../assets/images/logo.jpeg';
import HariniImage from '../assets/images/pic.png';

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
    name: "Viswesswar",
    role: "//Backend Developer",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/viswesswar",
  },
  {
    name: "Lakshay",
    role: "//Backend Developer",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/lakshay",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + developers.length) % developers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % developers.length);
  };

  return (
    <div>
      {/* Main Section */}
      <div className="main">
        <div className="initial">
          <div className="div1">
            <h1 className="heading ">
              ABACUS'24
              "Ideas Converge and Possibilities Unfold"
            </h1>
            <p className='press-start-2p'>Navigating the Future, One Innovation at a Time</p>
            <div className="button">
              <button className="theme ">Innovate, Integrate, Inspire: ABACUS'24</button>
              <button className="contact_but">Contact Us!!</button>
            </div>
          </div>
          <div className="div2">
            <img
              className="des-1"
              src={require('../assets/images/Untitled design (6).png')}
              alt="Abacus Logo"
            />
            <img
              className="logo"
              src={require('../assets/images/logo.jpeg')}
              alt="Abacus Logo"
            />
          </div>
        </div>
        <h2>Abacus-2025</h2>
        <div className="about">
          <div className="first">
            <img src={require('../assets/images/logo.jpeg')} alt="Abacus Logo" />
          </div>
          <div className="second">
            <p className='vt323-regular'>
              The conglomeration of the brightest minds enhancing the
              participant’s knowledge and creative potentials. The 3-day annual
              symposium showcases 15+ events and flagship contests of crystal
              gazing technology. Abacus's coverage and deliberations of earlier
              symposia have been a grand success with insatiable thirst for
              technological development rejuvenating the technology with
              innovation. This year, Abacus is back offline on a grander scale
              with an innovative edge to all the events.
            </p>
            <button className="button">Read More</button>
          </div>
        </div>
        <img
          className="border"
          src={require('../assets/images/border.png')}
          alt="Abacus Logo"
        />
      </div>

      {/* Developers Section */}
      <div className="developers">
        <h2>#developers</h2>
        <div className="developers-carousel">
          {/* Previous Button */}
          <div className="carousel-button left" onClick={handlePrev}>←</div>

          {/* Displaying the current two developer cards */}
          <div className="developer-card">
            <img src={developers[currentIndex].src} alt={developers[currentIndex].name} className="developer-photo" />
            <h3>{developers[currentIndex].name}</h3>
            <p>{developers[currentIndex].role}</p>
            <a href={developers[currentIndex].linkedin} target="_blank" rel="noopener noreferrer">
              <button>LinkedIn ↔</button>
            </a>
          </div>
          <div className="developer-card">
            <img src={developers[(currentIndex + 1) % developers.length].src} alt={developers[(currentIndex + 1) % developers.length].name} className="developer-photo" />
            <h3>{developers[(currentIndex + 1) % developers.length].name}</h3>
            <p>{developers[(currentIndex + 1) % developers.length].role}</p>
            <a href={developers[(currentIndex + 1) % developers.length].linkedin} target="_blank" rel="noopener noreferrer">
              <button>LinkedIn ↔</button>
            </a>
          </div>

          {/* Next Button */}
          <div className="carousel-button right" onClick={handleNext}>→</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
