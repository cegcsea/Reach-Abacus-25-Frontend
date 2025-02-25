import React from "react";
import "../styles/abouts.css";
import abacusImg from "../assets/images/final abacus.png";
import reachImg from "../assets/images/Reach final.png";
import cseaImg from "../assets/images/csea.png";

const About = () => {
  return (
    <div className="abt-container">
      <h1 className="abt-title">About</h1>

      {/* Abacus Section (Image Right) */}
      <section id="abacus-2025" className="abt-section abt-right">
        <div className="abt-content">
          <h2 className="abt-no-select">#abacus-2025</h2>
          <p className="abt-no-select">
            ABACUS, orchestrated by the Computer Science and Engineering Association (CSEA) at the College of Engineering, Guindy (CEG - Anna University), is an esteemed annual intercollege symposium. This flagship event showcases technical excellence through competitions, hackathons, workshops, and professional seminars, offering students a platform to exhibit their skills and vie for coveted prizes and internships.
          </p>
        </div>
        <img src={abacusImg} alt="Abacus Event" className="abt-image" />
      </section>

      {/* Reach Section (Image Left) */}
      <section id="reach" className="abt-section abt-left">
        <img src={reachImg} alt="Reach Initiative" className="abt-image" />
        <div className="abt-content">
          <h2 className="abt-no-select">#reach</h2>
          <p className="abt-no-select">
            Every year, as a component of ABACUS, we organize outreach initiatives in renowned colleges across Tamil Nadu, aiming to enhance student engagement and amplify awareness for our symposium. Our specialized workshops under the REACH umbrella introduce students to emerging technologies, ensuring they remain at the forefront of innovation and industry relevance.
          </p>
          <button className="abt-button">Explore REACH &lt;~&gt;</button>
        </div>
      </section>

      {/* CSEA Section (Image Right) */}
      <section id="csea" className="abt-section abt-right">
        <div className="abt-content">
          <h2 className="abt-no-select">#csea</h2>
          <p className="abt-no-select">
            Stemming from CEG's Department of Computer Science and Engineering, the CSEA epitomizes a commitment to technological advancement, bolstered by a distinguished alumni network. As a pivotal Engineering Association within the city, the CSEA amalgamates academic rigor and industry expertise, facilitating collaborative initiatives among students and esteemed faculty.
          </p>
          <a href="https://cseaceg.org.in/" target="_blank" rel="noopener noreferrer">
            <button className="abt-buttons">Explore CSEA &lt;~&gt;</button>
          </a>
        </div>
        <img src={cseaImg} alt="CSEA Community" className="abt-image" />
      </section>
    </div>
  );
};

export default About;
