import reach_img from "../assets/Hero/Reach'25 logo black.png";
import abacus_img from "../assets/Reach/Reach'25_logo_white.png";
import { AiFillHome, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { FaInfoCircle, FaHandshake, FaTools } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { UserData } from "../context/userContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogout, isAuth, refreshauth, active, setActive } = UserData();

  // All navigation items
  const navItems = [
    { name: "home", label: "Home", icon: <AiFillHome />, path: "/" },
    // {
    //   name: "sponsors",
    //   label: "Sponsors",
    //   icon: <FaHandshake />,
    //   path: "/sponsors",
    // },
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

  // useEffect(() => {
  //   refreshauth();
  //   setActive(location.pathname.substring(1));
  //   if (location.pathname.substring(1) === "") {
  //     setActive("home");
  //   }
  // }, []);
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
      className={`fixed top-0 left-0 w-screen flex flex-row justify-between lg:px-5  text-white shadow-2xl z-50 bg-black border-b-2 border-b-[#c0a068] ${
        isMenuOpen ? "overflow-hidden" : "visible"
      }`}
      style={{
        boxShadow: "0 4px 20px rgba(212, 175, 55, 0.3)",
      }}
    >
      {/* Logo Section */}
      <div
        className={`flex flex-row rounded-lg mx-4 delay-200 transform ease-in-out ${
          isMenuOpen ? "hidden" : "visible"
        }`}
      >
        <a href="#home" className="mt-[6px]">
          <img
            src={abacus_img}
            alt="abacus-image"
            className="h-16 w-23 mt-1 mx-auto rounded-lg"
          />
        </a>
        {/* <Link to="/" className="my-auto">
          <h1 className="hover:text-gray-950 text-2xl font-semibold rounded-xl mx-2 p-1 cursor-pointer">
            Reach 2025
          </h1>
        </Link> */}
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
        className={`flex lg:space-x-0 lg:px-2 xl:space-x-2 xl:mx-2 xl:py-2 items-center justify-center overflow-hidden lg:static lg:transform-none flex-col lg:flex-row lg:h-auto transition-transform duration-300 ease-in-out px-4 rounded-3xl z-50 lg:bg-black ${
          isMenuOpen
            ? "block transform translate-x-0 fixed top-0 left-0 w-[70%] h-[70%] mx-[15%] my-[30%] rounded-2xl bg-black border-2 border-[#c0a068]"
            : "transform -translate-x-full hidden lg:block my-auto"
        }`}
        style={isMenuOpen ? {
          boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
        } : {}}
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
              className="relative group overflow-hidden rounded-xl font-semibold m-2 lg:m-0 transition-all duration-300"
              onClick={() => handleIcon(item)}
            >
              <div
                className={`flex flex-row px-2 py-1 transition-colors duration-300 ${
                  isActive
                    ? "text-[#c0a068]"
                    : "text-gray-300 hover:text-[#c0a068]"
                }`}
                style={isActive ? {
                  textShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
                } : {}}
              >
                <div className="my-auto bg-transparent">{item.icon}</div>
                <span className="px-1 rounded-xl transition-all duration-300 cursor-pointer">
                  {item.label}
                </span>
              </div>
              <span 
                className={`absolute left-0 bottom-0 h-0.5 w-full transform transition-transform origin-left duration-300 ${
                  isActive 
                    ? "scale-x-100 bg-[#c0a068]" 
                    : "scale-x-0 group-hover:scale-x-100 bg-[#c0a068]"
                }`}
                style={isActive ? {
                  boxShadow: "0 0 10px rgba(212, 175, 55, 0.8)",
                } : {
                  boxShadow: "0 0 5px rgba(212, 175, 55, 0.5)",
                }}
              ></span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
