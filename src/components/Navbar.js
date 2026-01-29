import abacus_img from "../assets/images/logo26.png";
import { AiFillHome, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { FaInfoCircle, FaHandshake, FaTools } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { UserData } from "../context/userContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogout, isAuth, refreshauth, active, setActive } = UserData();

  // Add mobile detection
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;

  // All navigation items
  const navItems = [
    { name: "home", label: "Home", icon: <AiFillHome />, path: "/" },
    { name: "about", label: "About", icon: <FaInfoCircle />, path: "/about" },
    {
      name: "sponsors",
      label: "Sponsors",
      icon: <FaHandshake />,
      path: "/sponsors",
    },
    { name: "events", label: "Events", icon: <MdEvent />, path: "/events" },
    {
      name: "workshops",
      label: "Workshops",
      icon: <FaTools />,
      path: "/workshops",
    },
  ];

  // Add conditional items based on `isAuth`
  const authItems = isAuth
    ? [
        {
          name: "profile",
          label: "Profile",
          icon: <FaInfoCircle />,
          path: "/profile",
        },
        {
          name: "logout",
          label: "Logout",
          icon: <AiOutlineLogout />,
          action: handleLogout,
          path: "/auth",
        },
      ]
    : [
        {
          name: "auth",
          label: "Login / Register",
          icon: <AiOutlineLogin />,
          path: "/auth",
        },
      ];

  useEffect(() => {
    refreshauth();
    // Extract the content between the first and second slash
    const pathParts = location.pathname.split("/");
    const activePath = pathParts[1] ? pathParts[1] : "home";

    setActive(activePath);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleIcon = (item) => {
    if (item.action) {
      item.action(); // Call action if defined (e.g., logout)
    }
    if (item.path) {
      navigate(item.path); // Navigate to the path if defined
    }
    setActive(item.name);
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen flex flex-row justify-between lg:px-5 text-white shadow-2xl z-50 bg-black border-b-2 border-b-[#c0a068] ${
        isMenuOpen ? "overflow-hidden" : "visible"
      }`}
      style={{
        boxShadow: "0 4px 20px rgba(212, 175, 55, 0.3)",
      }}
    >
      {/* Logo Section */}
      <div
        className={`flex flex-row items-center mx-4 delay-200 transform ease-in-out ${
          isMenuOpen ? "hidden" : "visible"
        }`}
      >
        {/* Inline CSS for logo shining outline */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .reach-logo-wrap{display:inline-block;line-height:0}
          .reach-logo{display:block;height:64px;width:auto;filter:drop-shadow(0 0 6px rgba(192,160,104,0.6)) drop-shadow(0 0 12px rgba(192,160,104,0.35));transition:filter 250ms ease}
          .reach-logo.shine{animation:reach-shine 3.2s ease-in-out infinite}
          @keyframes reach-shine{0%{filter:drop-shadow(0 0 2px rgba(192,160,104,0.15)) drop-shadow(0 0 6px rgba(192,160,104,0.12))}50%{filter:drop-shadow(0 0 14px rgba(192,160,104,0.95)) drop-shadow(0 0 28px rgba(192,160,104,0.5))}100%{filter:drop-shadow(0 0 2px rgba(192,160,104,0.15)) drop-shadow(0 0 6px rgba(192,160,104,0.12))}}
        `,
          }}
        />

        <a href="#home" className="flex items-center">
          <span className="reach-logo-wrap">
            <img
              src={abacus_img}
              alt="abacus-logo"
              className="reach-logo shine"
              style={{ borderRadius: 0 }}
            />
          </span>

          {/* ABACUS '26 Text */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="ml-2 lg:ml-3"
          >
            <span
              className="font-monoton leading-none"
              style={{
                fontSize: isMobile ? "1.3rem" : isTablet ? "1.5rem" : "1.8rem",
                letterSpacing: "0.05em",
                background:
                  "linear-gradient(135deg, #d4af37, #c0a068, #9d7f52)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 15px rgba(212, 175, 55, 0.4)",
                display: "block",
                lineHeight: "1.1",
              }}
            >
              ABACUS'26
            </span>
          </motion.div>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className={`lg:hidden p-2 text-white transition-colors duration-300 hover:text-[#c0a068] ${
          isMenuOpen ? "hidden" : "visible"
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

      {/* Navigation Menu */}
      <div
        className={`flex lg:space-x-0 lg:px-2 xl:space-x-2 xl:mx-2 xl:py-2 items-start lg:items-center justify-start lg:justify-center pl-4 lg:pl-2 pt-28 lg:pt-0 overflow-hidden lg:static lg:transform-none flex-col lg:flex-row lg:h-auto transition-transform duration-300 ease-in-out px-2 rounded-3xl z-50 lg:bg-black ${
          /* Changed pl-6 to pl-4 to reduce left indentation */
          /* Changed px-4 to px-2 to reduce overall horizontal padding */
          isMenuOpen
            ? "transform translate-x-0 fixed top-0 right-0 w-[40%] sm:w-[30%] h-screen m-0 rounded-r-none rounded-l-2xl bg-black border-l-2 border-y-0 border-r-0 border-[#c0a068]"
            : /* Changed w-[55%] to w-[40%] to take up less than half the screen */
              /* Changed sm:w-[35%] to sm:w-[30%] */
              "transform translate-x-full fixed top-0 right-0 w-[40%] h-screen m-0 lg:static lg:translate-x-0 lg:h-auto lg:w-auto"
          /* Updated closed state width to match open state */
        }`}
        style={
          isMenuOpen
            ? {
                boxShadow: "-10px 0 30px rgba(212, 175, 55, 0.5)",
              }
            : {}
        }
      >
        <button
          className="absolute top-5 right-5 lg:hidden text-white transition-colors duration-300 hover:text-[#c0a068]"
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

        {/* Render Navigation Items */}
        {[...navItems, ...authItems].map((item) => {
          const isActive = active === item.name;
          return (
            <button
              key={item.name}
              className="relative group overflow-hidden rounded-xl font-semibold my-2 mx-0 lg:m-0 transition-all duration-300 text-sm lg:text-base"
              /* Added text-sm to reduce font size on mobile (lg:text-base resets it for desktop) */
              onClick={() => handleIcon(item)}
            >
              <div
                className={`flex flex-row px-2 py-1 transition-colors duration-300 ${
                  isActive
                    ? "text-[#c0a068]"
                    : "text-gray-300 hover:text-[#c0a068]"
                }`}
                style={
                  isActive
                    ? {
                        textShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
                      }
                    : {}
                }
              >
                <div className="my-auto bg-transparent">{item.icon}</div>
                <span className="px-1 rounded-xl transition-all duration-300 cursor-pointer text-left">
                  {/* Added text-left to ensure text stays aligned if it wraps */}
                  {item.label}
                </span>
              </div>
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full transform transition-transform origin-left duration-300 ${
                  isActive
                    ? "scale-x-100 bg-[#c0a068]"
                    : "scale-x-0 group-hover:scale-x-100 bg-[#c0a068]"
                }`}
                style={
                  isActive
                    ? {
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.8)",
                      }
                    : {
                        boxShadow: "0 0 5px rgba(212, 175, 55, 0.5)",
                      }
                }
              ></span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
