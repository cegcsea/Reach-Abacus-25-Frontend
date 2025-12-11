// src/pages/HomePage.jsx
import React, { useEffect, useState, useRef } from "react";
import "../styles/global.css";
import "../styles/about.css";
import "../assets/images/logo.jpeg";

import Home from "../components/Hero";
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

  // Apply uniform inward/outward transform to sections based on scroll position
  useEffect(() => {
    const applySectionTransforms = () => {
      const sections = document.querySelectorAll('.parallax-section');
      const vw = window.innerWidth;
      const viewportCenter = window.innerHeight / 2;

      sections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const distance = (centerY - viewportCenter) / viewportCenter; // -1..1
        const clamped = Math.max(-1, Math.min(1, distance));

        // Mobile: apply a toned-down variant of the same inward/outward effect
        if (vw < 640) {
          const translateYMobile = clamped * -12; // smaller translation
          const scaleMobile = 1 - Math.abs(clamped) * 0.03; // subtler scale
          const rotateXMobile = clamped * 1.2; // smaller tilt

          el.style.transform = `translateY(${translateYMobile}px) scale(${scaleMobile}) rotateX(${rotateXMobile}deg)`;
          el.style.transition = 'transform 0.45s ease-out';
          el.style.transformStyle = 'preserve-3d';
          return;
        }

        const translateY = clamped * -30;
        const scale = 1 - Math.abs(clamped) * 0.06;
        const rotateX = clamped * 3;

        el.style.transform = `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`;
        el.style.transition = 'transform 0.6s cubic-bezier(0.2,0.8,0.2,1)';
        el.style.transformStyle = 'preserve-3d';
      });
    };

    applySectionTransforms();

    const onResize = () => applySectionTransforms();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [scrollY]);

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
      style={{ perspective: "1000px" }} // camera perspective for 3D feel
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
        <div className="footer-line p-5 text-sm text-center">
            &copy; Copyright 2025 CSEA. All rights reserved.
        </div>
      </main>
    </div>
  );
};

export default HomePage;
