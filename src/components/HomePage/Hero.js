// src/components/Hero/Hero.js
import React, { useEffect, useState } from "react";
import SaturnRingBackground from "../SaturnRing/SaturnRingBackground";
import OrbBackground from "../OrbBackground/OrbBackground";
import LightRays from "../LightRays/LightRays";
import { getDeviceProfile } from "../../utils/deviceProfile";

import TextType from "../../components/TypeText/TextType";
import ShinyText from "../../components/ShinyText/ShinyText";

const Hero = () => {
  const [useSaturn, setUseSaturn] = useState(true);

  useEffect(() => {
    const profile = getDeviceProfile();
    setUseSaturn(profile.allowHeavyGPU);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-10">
        {useSaturn ? <SaturnRingBackground /> : <OrbBackground />}
      </div>

      {/* Light Rays */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-60">
        <LightRays
          raysOrigin="top-center"
          raysColor="#d4af37"
          raysSpeed={1}
          lightSpread={1.2}
          rayLength={2}
          pulsating
        />
      </div>

      {/* Foreground */}
      <div className="relative z-30 min-h-screen flex flex-col items-center justify-between py-20 text-center px-4 pointer-events-none">
        
        {/* Top Text Group */}
        <div className="mt-10">
          <TextType
            text={["United by Curiosity", "Driven by Innovation"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            className="text-gray-300 text-lg sm:text-3xl uppercase tracking-[0.2em]"
          />

          <div className="mt-6">
            <ShinyText
              text="Navigating the Future, One Innovation at a Time"
              speed={1}
              color="#ffffff"
              shineColor="#ffffff"
              className="text-white font-semibold text-base sm:text-2xl"
            />
          </div>
        </div>

        {/* Bottom Title */}
        <div className="mb-10">
          <h1
            className="text-5xl sm:text-8xl tracking-[0.15em]"
            style={{
              fontFamily: "'Bitcount Grid Single', monospace",
              background:
                "linear-gradient(135deg, #9d7f52, #D4AF37, #dab200)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 15px rgba(212,175,55,0.4))",
            }}
          >
            ABACUS'26
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
