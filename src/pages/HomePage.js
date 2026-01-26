// src/pages/HomePage.jsx
import React, { useEffect, useState, useRef } from "react";
import "../styles/global.css";
import "../styles/about.css";
import "../assets/images/logo.jpeg";

import Home from "../components/HomePage/Hero";
import About from "../components/HomePage/About";
import Sponsors from "../components/Sponsors";
import Developers from "../components/HomePage/Developers";
import Footer from "../components/HomePage/Footer";
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
  let rafId;
  let smoothScroll = 0;

  const applyWarpTransforms = () => {
    const sections = document.querySelectorAll(".parallax-section");

    const viewportCenter = window.innerHeight / 2;
    const vw = window.innerWidth;

    sections.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;

      // -1 to +1 range
      const distance = (centerY - viewportCenter) / viewportCenter;
      const clamped = Math.max(-1, Math.min(1, distance));

      /* ============================================
         🚀 INTERSTELLAR WARP DRIVE TRANSFORM
      ============================================ */

      // Depth tunnel pull
      const zDepth = (1 - Math.abs(clamped)) * 520;

      // Vertical drift
      const translateY = clamped * -65;

      // Tiny sideways drift = speed illusion
      const translateX = clamped * 18;

      // Compression zoom
      const scale = 1 - Math.abs(clamped) * 0.12;

      // Cinematic tilt
      const rotateX = clamped * 8;

      // Fade far objects like space fog (NO blur)
      const opacity = 1 - Math.abs(clamped) * 0.45;

      /* ===== MOBILE toned down ===== */
      if (vw < 640) {
        el.style.transform = `
          translateY(${clamped * -18}px)
          translateZ(${zDepth * 0.35}px)
          scale(${1 - Math.abs(clamped) * 0.04})
        `;
        el.style.opacity = 1;
        return;
      }

      /* ===== DESKTOP WARP ===== */
      el.style.transform = `
        translateX(${translateX}px)
        translateY(${translateY}px)
        translateZ(${zDepth}px)
        scale(${scale})
        rotateX(${rotateX}deg)
      `;

      el.style.opacity = opacity;

      el.style.transition =
        "transform 1.15s cubic-bezier(0.12,0.95,0.15,1), opacity 1s ease-out";

      el.style.transformStyle = "preserve-3d";
      el.style.willChange = "transform";
    });
  };

  /* ============================================
     🚀 SMOOTH CAMERA INERTIA LOOP
  ============================================ */
  const loop = () => {
    smoothScroll += (window.scrollY - smoothScroll) * 0.06;
    applyWarpTransforms();
    rafId = requestAnimationFrame(loop);
  };

  loop();

  return () => cancelAnimationFrame(rafId);
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
      style={{ perspective: "420px" }} // camera perspective for 3D feel
    >
      {/* Deep parallax background layers */}
      <ParallaxBackground scrollY={scrollY} scrollProgress={scrollProgress} />

      {/* Main content sections */}
      <main>
        {/* HOME / HERO */}
        {/* HOME / HERO */}
        <section
          id="home"
          className="relative flex items-center justify-center parallax-section"
          style={{
            minHeight: "110vh",   // ✅ taller than screen
            overflow: "hidden",
          }}
        >
          {/* ✅ EXTENDED BLACK BACKDROP (covers Galaxy bleed) */}
          <div
            className="absolute"
            style={{
              top: "-240px",       // ✅ cover top overscroll
              left: "-120px",      // ✅ cover left bleed
              right: "-120px",     // ✅ cover right bleed
              bottom: "100px",    // ✅ cover bottom bleed
              background: "black",
              zIndex: 0,
            }}
          />

          {/* Hero Content */}
          <div className="relative z-10 w-full">
            <Home scrollY={scrollY} scrollToContact={scrollToContact} />
          </div>
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
            &copy; Copyright 2026 CSEA. All rights reserved.
        </div>
      </main>
    </div>
  );
};

export default HomePage;
