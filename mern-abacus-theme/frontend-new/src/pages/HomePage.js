import React from 'react';
import '../styles/global.css';
import '../assets/images/abacus_logo.png';

const HomePage = () => {
  return (
    <div>
      <div className="main">
        <div>
          <h1 className="heading">
            ABACUS'24
            "Ideas Converge and Possibilities Unfold"
          </h1>
          <h3>Navigating the Future, One Innovation at a Time</h3>
          <button>Contact Us!!</button>
          <div>
            <img
              src={require('../assets/images/abacus_logo.png')}
              alt="Abacus Logo"
            />
          </div>
        </div>
        <div className="about">
          <h2>abacus-2025</h2>
          <p>
            The conglomeration of the brightest minds enhancing the
            participant’s knowledge and creative potentials. The 3-day annual
            symposium showcases 15+ events and flagship contests of crystal
            gazing technology. Abacus's coverage and deliberations of earlier
            symposia have been a grand success with insatiable thirst for
            technological development rejuvenating the technology with
            innovation. This year, Abacus is back offline on a grander scale
            with an innovative edge to all the events.
          </p>
          <button>Read More</button>
          <div>
            <img
              src={require('../assets/images/abacus_logo.png')}
              alt="Abacus Logo"
            />
          </div>
        </div>
      </div>

      {/* Developers Section */}
      <div className="developers">
        <h2>#developers</h2>
        <div className="developers-grid">
          <div className="developer-card">
            <img
              src="path/to/harini_image.jpg"
              alt="Harini Natarajan"
              className="developer-photo"
            />
            <h3>Harini Natarajan</h3>
            <p>//Frontend Developer</p>
            <button>LinkedIn ↔</button>
          </div>
          <div className="developer-card">
            <img
              src="path/to/sivani_image.jpg"
              alt="Sivanipriya"
              className="developer-photo"
            />
            <h3>Sivanipriya</h3>
            <p>//Frontend Developer</p>
            <button>LinkedIn ↔</button>
          </div>
          <div className="developer-card">
            <img
              src="path/to/viswesswar_image.jpg"
              alt="Viswesswar"
              className="developer-photo"
            />
            <h3>Viswesswar</h3>
            <p>//Backend Developer</p>
            <button>LinkedIn ↔</button>
          </div>
          <div className="developer-card">
            <img
              src="path/to/lakshay_image.jpg"
              alt="Lakshay"
              className="developer-photo"
            />
            <h3>Lakshay</h3>
            <p>//Backend Developer</p>
            <button>LinkedIn ↔</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
