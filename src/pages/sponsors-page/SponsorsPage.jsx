import React, { useState, useEffect } from "react";
import "./SponsorsPage.css";
import { LoaderData } from "../../context/loaderContext";
import Loader from "../../components/Loader/Loader";
import MOTORQ from "../../assets/Sponsors/motoroq.png";
import CONGRUENT from "../../assets/Sponsors/Congruent.png";

const sponsors = [
  {
    name: "Congruent - Title Sponsor",
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoading } = LoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (isLoading) {
    return <Loader />;
  }

  // Generate snowflakes with random horizontal positions
  const generateSnowflakes = () => {
    const snowflakes = [];
    const positions = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95];
    
    for (let i = 0; i < 18; i++) {
      snowflakes.push(
        <div 
          key={i} 
          style={{ 
            "--i": `${Math.floor(Math.random() * 15) + 8}`, 
            "--j": `${(Math.random() * 1.5) + 1.5}`,
            "--k": `${positions[i]}`
          }} 
          className="snowflake"
        ></div>
      );
    }
    return snowflakes;
  };

  return (
    <div className="sptotal">
      <div>
        <div className="sponsor">
          Sponsors
        </div>
        <div className="spout">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="spcontent-container">
              {/* Snowflake Effects - Randomly positioned */}
              {generateSnowflakes()}
              
              {/* Moon */}
              <div className="moon">
                <div className="crater cr1"></div>
                <div className="crater cr2"></div>
                <div className="crater cr3"></div>
              </div>
              
              <br/>
              {/* Logo Image */}
              <img src={sponsor.logo} alt={sponsor.name} />
              
              {/* Text Content Container */}
              <div className="sptext-container">
                <h1 className="sptitle">{sponsor.name}</h1>
                <p>{sponsor.description}</p>
                <div className="spnaive" />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;