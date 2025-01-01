import React, { useState } from "react";
import "../styles/about.css";
import "../styles/global.css";

import "../assets/images/logo.jpeg";

import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import Home from "../components/Home";
import Developers from "../components/Developers";
import Footer from "../components/Footer";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      {/* Main Section */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="main bg-black">
        {isMenuOpen && (
          <div className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-50 z-40"></div>
        )}
        <Home />
      </div>
      <div className="scroll-mt-48 mt-16" id="sponsors">
        <Sponsors />
      </div>
      {/* Developers Section */}
      <Developers />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
