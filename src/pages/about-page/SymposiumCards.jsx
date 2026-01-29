import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import "./SymposiumCards.css";
import gsap from "gsap";

// Import White Logos (Front)
import CseaWhite from "./about_assets/CSEA_White_Logo.png";
import AbacusWhite from "./about_assets/Abacus_White_Logo.png";
import ReachWhite from "./about_assets/Reach_White_Logo.png";

// Import Gold Logos (Back - for the flip effect)
import CseaGold from "./about_assets/CSEA_Gold_Logo.png";
import AbacusGold from "./about_assets/Abacus_Gold_Logo.png";
import ReachGold from "./about_assets/Reach_Gold_Logo.png";

const cardData = [
  {
    id: 1,
    title: "Abacus",
    description:
      "ABACUS, orchestrated by the Computer Science and Engineering Association (CSEA) at the College of Engineering, Guindy (CEG - Anna University), is an annual intercollege symposium. This flagship event showcases technical excellence through competitions, hackathons, workshops, and professional seminars, offering students a platform to exhibit their skills and vie for coveted prizes and internships.",
    frontLogo: AbacusWhite,
    backLogo: AbacusGold,
  },
  {
    id: 2,
    title: "Reach",
    description:
      "Every year, as a component of ABACUS, we organize outreach initiatives in renowned colleges across Tamil Nadu, aiming to enhance student engagement and amplify awareness for our symposium. Our specialized workshops under the REACH, introduce students to emerging technologies, ensuring they remain at the forefront of innovation and industry relevance.",
    frontLogo: ReachWhite,
    backLogo: ReachGold,
  },
  {
    id: 3,
    title: "CSEA",
    description:
      "Stemming from CEG's Department of Computer Science and Engineering, the CSEA epitomizes a commitment to technological advancement, bolstered by a distinguished alumni network. As a pivotal Engineering Association within the city, the CSEA amalgamates academic rigor and industry expertise, facilitating collaborative initiatives among students and esteemed faculty.",
    frontLogo: CseaWhite,
    backLogo: CseaGold,
  },
];

const SymposiumCards = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Detect Screen Size
  useEffect(() => {
    const checkMobile = () => {
      // 1024px matches the CSS media query
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 2. GSAP Animation Logic (Desktop Only)
  useLayoutEffect(() => {
    if (isMobile) return; // Skip animation on mobile

    let ctx = gsap.context(() => {
      // Initialize cards
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const inner = card.querySelector(".simp-card-inner");
        const content = card.querySelector(".simp-text-content");

        // Start position: Stacked in top-right like a deck
        gsap.set(card, {
          position: "absolute", 
          left: "85%",
          top: "5%",
          width: "100px",
          height: "165px",
          rotation: (index + 1) * 5, // Slight rotation for deck feel
          zIndex: 10 - index,
          opacity: 1,
        });

        // Set Back visible initially
        gsap.set(inner, { rotationY: 180 });
        // Hide text initially
        gsap.set(content, { opacity: 0, y: 20 });
      });

      const tl = gsap.timeline({ delay: 0.5 });

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const inner = card.querySelector(".simp-card-inner");
        const content = card.querySelector(".simp-text-content");
        const targetLeft = `${index * 35.5}%`;
        const startTime = index * 2; 

        // --- PHASE 1: Fly In ---
        tl.to(
          card,
          {
            opacity: 1,
            left: targetLeft,
            top: 0,
            width: "29%",
            height: "40%",
            rotation: 0,
            duration: 1.8,
            ease: "power3.inOut",
          },
          startTime,
        );

        // --- PHASE 2: Flip ---
        tl.to(
          inner,
          {
            rotationY: 0,
            duration: 1.3,
            ease: "power2.inOut",
          },
          startTime + 1.8,
        );

        // --- PHASE 3: Expand Height ---
        tl.to(
          card,
          {
            height: "100%",
            duration: 2,
            ease: "power2.out",
          },
          startTime + 2.8,
        );

        // --- PHASE 4: Reveal Text ---
        tl.to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          startTime + 3,
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);


  const displayData = isMobile
    ? [...cardData, ...cardData, ...cardData]
    : cardData;

  useEffect(() => {
    if (!isMobile) return;
    const container = containerRef.current;

    const scrollInterval = setInterval(() => {
      if (!container) return;
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollLeft = 0;
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(scrollInterval);
  }, [isMobile]);

  return (
    <div className="simp-container" ref={containerRef}>
      <div className="simp-desktop-wrapper">
        {displayData.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="simp-card"
            ref={(el) => {
              if (index < 3) cardRefs.current[index] = el;
            }}
          >
            <div className="simp-card-inner">
              <div className="simp-card-back">
                <img src={card.backLogo} alt="Back Logo" />
              </div>
              <div className="simp-card-front">
                <div className="simp-logo-section">
                  <img src={card.frontLogo} alt={`${card.title} Logo`} />
                </div>

                <div className="simp-text-content">
                  <h3 className="simp-text-heading">{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="naive-simp-card"/>
                  {card.title !== "Abacus" ? (
                    <a
                      href={
                        card.title === "Reach"
                          ? "https://reach.abacus.org.in"
                          : "https://cseaceg.org.in"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="simp-explore-btn"
                    >
                      Explore &gt;&gt;
                    </a>
                  ) : (
                    <div style={{ height: "40px" }}></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SymposiumCards;
