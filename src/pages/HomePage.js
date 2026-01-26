import React, { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Hero from "../components/HomePage/Hero";
import About from "../components/HomePage/About";
import EventHighlights from "../components/HomePage/EventHighlights"; // Assuming this exists or replace with Sponsors
import Developers from "../components/HomePage/Developers";
import Footer from "../components/HomePage/Footer";

import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";

const SECTIONS = ["hero", "about", "highlights", "developers", "contact"];

const HomePage = () => {
  const { isLoading } = LoaderData();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const lockRef = useRef(false);
  const footerScrollRef = useRef(null);
  const lastScrollTime = useRef(0);

  const goTo = useCallback((dir) => {
    const now = Date.now();
    if (lockRef.current || now - lastScrollTime.current < 1000) return;

    // FOOTER FREE SCROLL LOGIC
    if (active === SECTIONS.length - 1 && footerScrollRef.current) {
      const box = footerScrollRef.current;
      if (dir === 1) {
        const isAtBottom = Math.abs(box.scrollHeight - box.clientHeight - box.scrollTop) < 5;
        if (!isAtBottom) return; 
      }
      if (dir === -1) {
        if (box.scrollTop > 5) return;
      }
    }

    const next = active + dir;
    if (next < 0 || next >= SECTIONS.length) return;

    lastScrollTime.current = now;
    lockRef.current = true;
    setDirection(dir);
    setActive(next);

    setTimeout(() => { lockRef.current = false; }, 900);
  }, [active]);

  // ✅ STRICT Apple Scroll Trigger Control
useEffect(() => {
  let scrollAccum = 0;

  const onWheel = (e) => {
    e.preventDefault();

    if (lockRef.current) return;

    // Accumulate wheel movement
    scrollAccum += e.deltaY;

    // Threshold reached → trigger ONE move
    if (scrollAccum > 120) {
      goTo(1);
      scrollAccum = 0;
    }

    if (scrollAccum < -120) {
      goTo(-1);
      scrollAccum = 0;
    }
  };

  window.addEventListener("wheel", onWheel, { passive: false });

  return () => window.removeEventListener("wheel", onWheel);
}, [goTo]);


  useEffect(() => {
    let startY = 0;
    const touchStart = (e) => { startY = e.touches[0].clientY; };
    const touchEnd = (e) => {
      const diff = startY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 60) return;
      goTo(diff > 0 ? 1 : -1);
    };
    window.addEventListener("touchstart", touchStart, { passive: true });
    window.addEventListener("touchend", touchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchend", touchEnd);
    };
  }, [goTo]);

  const variants = {
    initial: (dir) => ({
      opacity: 0,
      scale: dir > 0 ? 0.8 : 1.2,
      z: dir > 0 ? 200 : -200,
      filter: "blur(10px)",
    }),
    animate: {
      opacity: 1,
      scale: 1,
      z: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      opacity: 0,
      scale: dir > 0 ? 1.2 : 0.8,
      z: dir > 0 ? -200 : 200,
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }),
  };

  if (isLoading) return <Loader />;

  return (
    <div 
      className="relative w-full h-screen overflow-hidden select-none"
      style={{ background: active === 0 ? "black" : "transparent" }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={active}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full h-full absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {active === 0 && <Hero scrollY={0} />}
          {active === 1 && <About scrollY={1000} />}
          {active === 2 && <EventHighlights scrollY={2500} />}
          {active === 3 && <Developers scrollY={4000} />}
          {active === 4 && (
  <div
    ref={footerScrollRef}
    className="w-full h-full overflow-y-auto"
    style={{
      WebkitOverflowScrolling: "touch",
      overscrollBehavior: "contain",
      paddingBottom: "120px",
    }}
    onWheel={(e) => {
      const box = footerScrollRef.current;
      if (!box) return;

      const atTop = box.scrollTop <= 5;
      const atBottom =
        box.scrollHeight - box.clientHeight - box.scrollTop <= 5;

      // ✅ Scroll UP at top → allow snap back to Developers
      if (e.deltaY < 0 && atTop) return;

      // ✅ Scroll DOWN at bottom → block (no next section exists)
      if (e.deltaY > 0 && atBottom) {
        e.preventDefault();
        return;
      }

      // ✅ Otherwise → footer scroll only (no snap)
      e.stopPropagation();
    }}
    onTouchMove={(e) => {
      const box = footerScrollRef.current;
      if (!box) return;

      const atTop = box.scrollTop <= 5;
      const atBottom =
        box.scrollHeight - box.clientHeight - box.scrollTop <= 5;

      // Allow swipe UP at top → go back
      if (atTop) return;

      // Allow swipe DOWN at bottom → stop
      if (atBottom) return;

      // Otherwise lock snap
      e.stopPropagation();
    }}
  >
    <Footer disableSnap={true} />
    <div className="footer-line p-0 text-sm text-center text-gray-500">
      &copy; Copyright 2026 CSEA. All rights reserved.
    </div>
  </div>

)}


        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
<div
  className="
    absolute z-50 flex gap-4

    /* Desktop (default): right middle vertical */
    right-6 top-1/2 -translate-y-1/2 flex-col

    /* Mobile: bottom center horizontal */
    max-md:bottom-6 max-md:top-auto max-md:right-1/2 
    max-md:translate-x-1/2 max-md:translate-y-0
    max-md:flex-row
  "
>
  {SECTIONS.map((_, i) => (
    <div
      key={i}
      onClick={() => {
        setDirection(i > active ? 1 : -1);
        setActive(i);
      }}
      className={`transition-all duration-500 rounded-full cursor-pointer ${
        i === active
          ? "w-4 h-4 bg-[#c0a068] shadow-[0_0_15px_#c0a068]"
          : "w-2 h-2 bg-white/20"
      }`}
    />
  ))}
</div>

    </div>
  );
};

export default HomePage;