// src/pages/HomePage.jsx
import React, { useEffect, useState, useRef } from "react";
import "../styles/global.css";
import "../styles/about.css";
import "../assets/images/logo.jpeg";

import Home from "../components/Home";
import About from "../components/About";
import Sponsors from "../components/Sponsors";
import Developers from "../components/Developers";
import Footer from "../components/Footer";
import ParallaxBackground from "../components/ParallaxBackground";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";

/**
 * NOTE: This file preserves desktop behavior exactly.
 * Mobile-only adjustments are handled inside each component via useIsMobile hook.
 */

const HomePage = () => {
  const { isLoading } = LoaderData();

  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const contactRef = useRef(null);

  // Scroll handler for parallax and zoom feeling
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY || window.pageYOffset;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrolled / maxScroll : 0;

      setScrollY(scrolled);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div
      className="relative bg-transparent text-white overflow-x-hidden"
      style={{ perspective: "2px" }} // camera perspective for 3D feel
    >
      {/* Deep parallax background layers */}
      <ParallaxBackground scrollY={scrollY} scrollProgress={scrollProgress} />

      {/* Main content sections */}
      <main>
        {/* HOME / HERO */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center parallax-section"
        >
          <Home scrollY={scrollY} scrollToContact={scrollToContact} />
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="relative min-h-screen flex items-center parallax-section"
        >
          <About scrollY={scrollY} />
        </section>

        {/* DEVELOPERS */}
        <section
          id="developers"
          className="relative min-h-screen flex items-center parallax-section"
        >
          <Developers scrollY={scrollY} />
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          ref={contactRef}
          className="relative min-h-screen flex items-center parallax-section"
        >
          <Footer scrollY={scrollY} />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
