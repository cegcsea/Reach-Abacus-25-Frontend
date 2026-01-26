// src/components/OrbBackground.js
import Orb from "../Orb/Orb";
import "./OrbBackground.css";

export default function OrbBackground() {
   const isMobile =
    typeof window !== "undefined" && window.innerWidth <= 768;
  return (
    <div className="orb-bg-wrapper">
      <Orb
        hue={170}             
        hoverIntensity={0.5}    
        rotateOnHover={isMobile ? false : true}
        forceHoverState={false}   
        backgroundColor="#000000"
      />
    </div>
  );
}