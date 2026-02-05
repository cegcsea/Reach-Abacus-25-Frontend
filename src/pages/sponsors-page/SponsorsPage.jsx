import React, { useEffect } from "react";
import "./SponsorsPage.css";
import CONGRUENT from "../../assets/Sponsors/Congruet.png";
import MOTORQ from "../../assets/Sponsors/motoroque.png";

const sponsors = [
  {
    name: "Congruent Solutions- Title Sponsor",
    logo: CONGRUENT,
    description:
      "Congruent Solutions is a specialist technology and outsourcing partner dedicated to the U.S. retirement plan industry, providing end-to-end support for plan providers and recordkeepers. The company is widely recognized for its CORE suite, an AI-powered, cloud-native SaaS platform that automates complex recordkeeping and administrative workflows. Beyond its software, they offer extensive outsourced plan administration services, managing critical back-office tasks like compliance testing, Form 5500 preparation, and loan processing. Headquartered in California with a major delivery center in India, they were the first provider outside the U.S. to earn ISO 9001 certification for pension administration. Their commitment to data security is underscored by SOC 1 and SOC 2 Type II certifications, ensuring high-standard governance for Fortune 500 clients. By blending deep domain expertise with modern technology, Congruent helps clients modernize legacy systems and improve the overall participant experience.",
    website: "https://www.congruentsolutions.com/",
  },
  {
    name: "MOTORQ - Events Sponsor",
    logo: MOTORQ,
    description:
      "Headquartered in the San Francisco Bay Area, Motorq is an analytics software platform company that was created for the sole purpose of realizing the potential of connected-car data. The possibilities are virtually endless. They're committed to leveraging this data to help businesses unlock the power of raw data by deciphering and creating actionable insights from a variety of disparate connected-car systems. Their cloud-based system allows them to deliver better, faster and more cost-effective insights so the clients can focus on what they do best.",
    website: "https://motorq.com/",
  },
];

const SponsorsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sptotal">
      {/* SVG filter for the electric displacement effect */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise3" seed="2" />
            <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise4" seed="2" />
            <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>
            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
            <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="25" xChannelSelector="R" yChannelSelector="B" />
          </filter>
        </defs>
      </svg>

      <div className="sphead">
        <h1>Sponsors</h1>
      </div>

      <div className="spout">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sp-wrapper">
            <div className="sp-card-container">
              
              {/* Electric Border Layers */}
              <div className="sp-inner-container">
                <div className="sp-border-outer">
                  {/* This is the div that actually gets the electric filter */}
                  <div className="sp-main-card" style={{ filter: "url(#turbulent-displace)" }}></div>
                </div>
                <div className="sp-glow-layer-1"></div>
                <div className="sp-glow-layer-2"></div>
              </div>

              {/* Shimmer Overlays */}
              <div className="sp-overlay-1"></div>
              <div className="sp-overlay-2"></div>
              <div className="sp-background-glow"></div>

              {/* Content sits on top */}
              <div className="sp-content-container">
                <div className="sp-confetti">
                  {[...Array(18)].map((_, i) => (
                    <div key={i} className="sp-confetti-piece"></div>
                  ))}
                </div>

                <div className="sp-card-content">
                  <img src={sponsor.logo} alt={sponsor.name} className="sp-logo" />
                  <div className="sp-text-container">
                    <h1 className="sptitle">{sponsor.name}</h1>
                    <p>{sponsor.description}</p>
                    <div className="sp-naive" />
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="spread">
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