import React, { useState } from 'react';
import '../../styles/Intern.css';
import img1 from "../../assets/images/events pic/noviceint.jpg";
import img2 from "../../assets/images/events pic/internship.png";

const NoviceInit = () => {
  const [activeTab, setActiveTab] = useState('description'); // description, internship, or rounds

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#fff" }} className="heading">/Novice-Init</h1>
      <div className="middle-section">
        <div className="content-container">
          <img
            src={activeTab === 'internship' ? img1 : img1}
            alt="Event"
            className="event-image"
          />
          <div className="content">
            <div className="tabs">
              <button
                onClick={() => handleTabClick('description')}
                className={activeTab === 'description' ? 'active' : ''}
              >
                Description &lt;~&gt;
              </button>
              <button
                onClick={() => handleTabClick('internship')}
                className={activeTab === 'internship' ? 'active' : ''}
              >
                Internship &lt;~&gt;
              </button>
              <button
                onClick={() => handleTabClick('rounds')}
                className={activeTab === 'rounds' ? 'active' : ''}
              >
                Rounds &lt;~&gt;
              </button>
            </div>

            {activeTab === 'description' && (
              <div>
                <p>
                  An all-night Coding Extravaganza featuring diverse challenges in DSA, fostering
                  teamwork and endurance. Participants collaborate across different CS domains, tackling
                  various tracks in this tech marathon.
                </p>
                <p><strong>Team members:</strong> Two to three members</p>
                <p><strong>Winners:</strong> Top 3 + Best Women's team + Best First year's team</p>
              </div>
            )}

            {activeTab === 'internship' && (
              <div className="internship-content">
                <p><strong>Top 3 of the event will get internship opportunities!</strong></p>
                <div className="logo-container">
                  <img src={img2} alt="RootQuotient" className="logo" />
                  <p className="logo-text">ROOTQUOTIENT</p>
                </div>
              </div>
            )}

            {activeTab === 'rounds' && (
              <div className="rounds-content">
                <div className="round-card">
                  <h3>Round 1</h3>
                  <p><strong>Rolling Event (30 minutes)</strong></p>
                  <p><strong>What to expect?</strong> Exciting coding scenarios.</p>
                  <p><strong>Location:</strong> Second Floor Lab, DCSE</p>
                  <p><strong>Date:</strong> 22 March 2024</p>
                  <p><strong>Duration:</strong> 9:00 AM to 1:30 PM</p>
                </div>
                <div className="round-card">
                  <h3>Round 2</h3>
                  <p><strong>Coding Challenges</strong></p>
                  <p><strong>What to expect?</strong> Advanced problem-solving tasks.</p>
                  <p><strong>Location:</strong> Ground Floor Lab, DCSE</p>
                  <p><strong>Date:</strong> 22 to 23 March 2024</p>
                  <p><strong>Duration:</strong> 9:00 PM to 6:00 AM</p>
                </div>
              </div>
            )}
            <button className="register-button ">Registrations Closed &lt;~&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoviceInit;
