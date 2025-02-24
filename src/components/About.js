import React from "react";
import "../styles/about.css";
import abacusImg from "../assets/images/pic.png";
import reachImg from "../assets/images/pic.png";
import cseaImg from "../assets/images/pic.png";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>

      {/* Abacus Section (Image Right) */}
      <section id="abacus-2025" className="about-section right">
        <div className="about-content">
          <h2>#abacus-2025</h2>
          <p>
            ABACUS, orchestrated by the Computer Science and Engineering Association (CSEA) at the College of Engineering, Guindy (CEG - Anna University), is an esteemed annual intercollege symposium. This flagship event showcases technical excellence through competitions, hackathons, workshops, and professional seminars, offering students a platform to exhibit their skills and vie for coveted prizes and internships.
          </p>
        </div>
        <img src={abacusImg} alt="Abacus Event" className="about-image" />
      </section>

      {/* Reach Section (Image Left) */}
      <section id="reach" className="about-section left">
        <img src={reachImg} alt="Reach Initiative" className="about-image" />
        <div className="about-content">
          <h2>#reach</h2>
          <p>
            Every year, as a component of ABACUS, we organize outreach initiatives in renowned colleges across Tamil Nadu, aiming to enhance student engagement and amplify awareness for our symposium. Our specialized workshops under the REACH umbrella introduce students to emerging technologies, ensuring they remain at the forefront of innovation and industry relevance.
          </p>
          <button className="about-button">Explore REACH &lt;~&gt;</button>
        </div>
      </section>

      {/* CSEA Section (Image Right) */}
      <section id="csea" className="about-section right">
        <div className="about-content">
          <h2>#csea</h2>
          <p>
            Stemming from CEG's Department of Computer Science and Engineering, the CSEA epitomizes a commitment to technological advancement, bolstered by a distinguished alumni network. As a pivotal Engineering Association within the city, the CSEA amalgamates academic rigor and industry expertise, facilitating collaborative initiatives among students and esteemed faculty.
          </p>
          <a href="https://cseaceg.org.in/" target="_blank" rel="noopener noreferrer">
            <button className="about-buttons">Explore CSEA &lt;~&gt;</button>
          </a>
        </div>
        <img src={cseaImg} alt="CSEA Community" className="about-image" />
      </section>
    </div>
  );
};

export default About;
