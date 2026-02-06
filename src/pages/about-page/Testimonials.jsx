import React from "react";
import "./Testimonials.css";
import image1 from "./about_assets/pradeep.png"
import image2 from "./about_assets/santhosi.png"
import image3 from "./about_assets/hari.png"
const testimonials = [
  {
    id: 1,
    name: "Pradeep Balaji T",
    year: "2ND YEAR CSE STUDENT",
    image:
      image1,
    text: "During ABACUS'25, I have not only picked up useful skills but also got a chance to connect and interact with seniors and students from other colleges. It was a wholesome experience for me.",
  },
  {
    id: 2,
    name: "Santoshi L",
    year: "2ND YEAR CSE STUDENT",
    image:
      image2,
    text: "I participated in most of the events, particularly Brainstorm Relay, which encouraged teamwork and out-of-the-box thinking. ABACUS’25 was a testament to the CSE department’s commitment to providing students with opportunities to learn, grow, and showcase their talents.",
  },
  {
    id: 3,
    name: "Hariharan Alexander",
    year: "3RD YEAR CSE STUDENT",
    image:
      image3,
    text: "While conductiong a technical event during REACH'25, I clearly recognized the skill gap between students from other institutions and those from CEG. That moment helped me internalize the true purpose of REACH—not just as an external marketing initiative, but as a platform to understand how students from different backgrounds approach problems, learn, and build networks. Personally, REACH’25 was one of the most fulfilling and successful events I’ve had the privilege to be part of."
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-main-title">Reflections from Last Year</h2>

      <div className="notes-grid">
        {testimonials.map((person) => (
          <div className="sticky-note anim-uniq-716" key={person.id}>
            <div className="photo-overlap">
              <img
                src={person.image}
                alt={person.name}
                className="note-avatar"
              />
            </div>

            <div className="note-content-wrapper">
              <div className="note-header-info">
                <h4 className="note-name">{person.name}</h4>
                <span className="note-role">{person.year}</span>
              </div>

              <hr className="glowing-line-gold" />

              <p className="note-text">"{person.text}"</p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
