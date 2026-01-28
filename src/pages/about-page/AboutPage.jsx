import React, { useState, useEffect } from "react";
import SymposiumCards from "./SymposiumCards";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
export default function AboutPage() {
  return (
    <div className="about-page-container-ll">
      <SymposiumCards />
      <Testimonials />
      <Gallery />
    </div>
  );
}
