import React from "react";
import "../styles/about.css";
import "../styles/global.css";
//import { Bubble } from "../components/Bubble";
import "../assets/images/logo.jpeg";
//import { bubbles } from "../constants/bubbles";
import Sponsors from "../components/Sponsors";
import Home from "../components/Home";
import Developers from "../components/Developers";
import Footer from "../components/Footer";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";

const HomePage = ({ isMenuOpen }) => {
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="bg-black">
      {/* Main Section */}
      {/* <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} active={active} setActive={setActive}/> */}
      {/* <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {bubbles.map((bubble, index) => (
          <Bubble key={index} {...bubble} />
        ))}
      </div> */}
      <div className="main bg-transparent scroll-mt-20">
        <Home />
      </div>
      <div className="mt-16 scroll-mt-20" id="sponsors">
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
