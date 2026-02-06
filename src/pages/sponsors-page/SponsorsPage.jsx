import React, { useEffect } from "react";
import "./SponsorsPage.css";
import CONGRUENT from "../../assets/Sponsors/Congruet.png";
import MOTORQ from "../../assets/Sponsors/motoroque.png";

const sponsors = [
  {
    name: "Congruent Solutions - Title Sponsor",
    logo: CONGRUENT,
    description:
      "Congruent Solutions is a specialist technology and outsourcing partner dedicated to the U.S. retirement plan industry, providing end-to-end support for plan providers and recordkeepers. The company is widely recognized for its CORE suite, an AI-powered, cloud-native SaaS platform that automates complex recordkeeping and administrative workflows. Beyond its software, they offer extensive outsourced plan administration services, managing critical back-office tasks like compliance testing, Form 5500 preparation, and loan processing. Headquartered in California with a major delivery center in India, they were the first provider outside the U.S. to earn ISO 9001 certification for pension administration. Their commitment to data security is underscored by SOC 1 and SOC 2 Type II certifications, ensuring high-standard governance for Fortune 500 clients. By blending deep domain expertise with modern technology, Congruent helps clients modernize legacy systems and improve the overall participant experience.",
    website: "https://www.congruentsolutions.com/",
  },
  {
    name: "MOTORQ - Events Sponsor",
    logo: MOTORQ,
    description:
      "Headquartered in the San Francisco Bay Area, Motorq is an analytics software platform company that was created for the sole purpose of realizing the potential of connected-car data. The possibilities are virtually endless. They’re committed to leveraging this data to help businesses unlock the power of raw data by deciphering and creating actionable insights from a variety of disparate connected-car systems. Their cloud-based system allows them to deliver better, faster and more cost-effective insights so the clients can focus on what they do best.",
    website: "https://motorq.com/",
  },
];

const SponsorsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sptotal">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="fast-uneven-electric" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="noise">
              <animate
                attributeName="seed"
                values="1;45;12;88;3;150;22"
                dur="0.8s"
                repeatCount="indefinite"
                calcMode="discrete"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
          </filter>
        </defs>
      </svg>

    <br/>
    <br/>
      <div className="sphead">
        <h1>Sponsors</h1>
      </div>

      <div className="spout">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sp-wrapper">
            <div className="sp-card-container">

              <div className="electric-line"></div>
              <div className="sp-overlay-1"></div>
              <div className="sp-overlay-2"></div>

              <div className="sp-content-container">
                <div className="sp-confetti">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="sp-confetti-piece"></div>
                  ))}
                </div>

                <div className="sp-card-content">
                  <img src={sponsor.logo} alt={sponsor.name} className="sp-logo" />
                  <div className="sp-text-container">
                    <div className="sphead">
                      <h4>{sponsor.name}</h4>
                    </div>
                    <p>{sponsor.description}</p>
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="spread"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsPage;
