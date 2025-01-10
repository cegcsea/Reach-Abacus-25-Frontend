//import { useState } from "react";
import abacus_img from "../assets/images/logo.jpeg";
import { AiFillHome, AiOutlineLogin } from "react-icons/ai";
import { FaInfoCircle, FaHandshake, FaTools } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isMenuOpen, setIsMenuOpen,active,setActive }) => {
  const navigate = useNavigate();
  

  const navItems = [
    { name: "home", label: " Home", icon: <AiFillHome />, path: "/" },
    { name: "about", label: " About", icon: <FaInfoCircle />, path: "/about" },
    {
      name: "sponsors",
      label: " Sponsors",
      icon: <FaHandshake />,
      path: "/sponsors",
    },
    { name: "events", label: " Events", icon: <MdEvent />, path: "/events" },
    {
      name: "workshops",
      label: " Workshops",
      icon: <FaTools />,
      path: "/workshops",
    },
    {
      name: "auth",
      label: "Login / Register",
      icon: <AiOutlineLogin />,
      path: "/auth",
    },
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen flex flex-row justify-between  lg:px-5 lg:py-2  text-white bg-gradient-to-b from-[#702b2b] via-[#9d0505] to-[#8a1818] bg-black shadow-2xl z-50 border-b-2 border-b-gray-600 
          
        ${isMenuOpen ? " overflow-hidden " : "visible"}
    `}
    >
      <div
        className={`flex flex-row rounded-lg mx-4 delay-200 transform ease-in-out ${
          isMenuOpen ? " hidden " : "visible"
        }`}
      >
        <a href="#home">
          <img
            src={abacus_img}
            alt="abacus-image"
            className="h-14 w-14 mx-auto p-1 rounded-lg"
          />
        </a>
        <a href="#home" className="my-auto">
          <h1 className="hover:text-gray-950 text-2xl font-semibold rounded-xl mx-2 p-1 cursor-pointer ">
            Abacus 2025
          </h1>
        </a>
      </div>

      <button
        className={`lg:hidden p-2 text-white ${
          isMenuOpen ? " hidden " : "visible"
        }`}
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`flex lg:space-x-0 lg:px-2 xl:space-x-2 xl:mx-2 xl:py-2 items-center justify-center overflow-hidden lg:static lg:transform-none flex-col lg:flex-row lg:h-auto transition-transform duration-300 ease-in-out px-4 lg:bg-gradient-to-b lg:from-[#b03131] lg:via-[#6e0808] lg:to-[#b03131] rounded-3xl z-50 ${
          isMenuOpen
            ? "block transform translate-x-0 bg-gradient-to-b from-[#cb3d3d] via-[#8a1818] to-[#cb3d3d]  fixed top-0 left-0 w-[70%] h-[70%] mx-[15%] my-[30%] rounded-2xl "
            : "transform -translate-x-full hidden lg:block my-auto"
        }`}
      >
        <button
          className="absolute top-5 right-5 lg:hidden text-white "
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`relative group overflow-hidden rounded-xl font-semibold m-2 lg:m-0${
              active === item.name
                ? "bg-gradient-to-b from-[#E0115F] via-[#E0115F] to-[#E0115F]"
                : ""
            }`}
            onClick={() => {
              navigate(item.path);
              setActive(item.name);
              setIsMenuOpen(false);
            }}
          >
            <div
              className={`flex flex-row px-2 ${
                active === item.name
                  ? "bg-white text-black hover:text-black"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <div className="my-auto bg-transparent">{item.icon}</div>
              <span className="px-1 rounded-xl transition-all duration-300 cursor-pointer">
                {item.label}
              </span>
            </div>
            <span className="absolute left-0 bottom-0 h-1 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
