import {React,useRef} from "react";
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
  const contactRef = useRef(null);
  if (isLoading) {
    return <Loader />;
  }
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
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
        <Home scrollToContact={scrollToContact}/>
      </div>
      {/* <div className="mt-16 scroll-mt-20" id="sponsors">
        <Sponsors />
      </div> */}
      {/* Developers Section */}
      <Developers />
      {/* Footer Section */}
      <Footer ref={contactRef} />
    </div>
  );
};

export default HomePage;
