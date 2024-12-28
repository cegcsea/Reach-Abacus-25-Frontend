import { useState } from "react";
import abacus_img from "../assets/images/logo.jpeg";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "home", label: "/ home" },
    { name: "about", label: "/ about" },
    { name: "sponsors", label: "/ sponsors" },
    { name: "events", label: "/ events" },
    { name: "workshops", label: "/ workshops" },
    { name: "login", label: "/ login" },
  ];

  return (
    <div className="fixed top-0 w-full flex justify-between px-5 py-2 text-white bg-gradient-to-r from-gray-950 via-gray-800 via-gray-700 to-gray-950 shadow-2xl z-20">
      <div className="flex flex-row rounded-lg">
        <a href="#home">
          <img
            src={abacus_img}
            alt="abacus-image"
            className="h-14 w-14 mx-auto p-1"
          />
        </a>
        <a href="#home" className="my-auto">
          <h1 className="hover:text-gray-950 hover:bg-slate-200 font-semibold rounded-lg mx-2 p-1 cursor-pointer">
            Abacus 2025
          </h1>
        </a>
      </div>
      <div className="text-md font-semibold my-auto flex space-x-4">
        {navItems.map((item) => (
          <>
          <button
            key={item.name}
            className="relative group overflow-hidden rounded-xl"
            onClick={() => setActive(item.name)}
            >
            <a
              href={`#${item.name}`}
              className={`p-2 rounded-xl transition-all duration-300  ${
                active === item.name ? "bg-white text-black hover:text-black" : "text-gray-300 hover:text-white"
              }`}
              >
              {item.label}
            </a>
            <span className="absolute left-0 bottom-0 h-1 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </button>
        </>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
// import { useState } from "react";
// import abacus_img from "../assets/images/logo.jpeg";

// const Navbar = () => {
//   const [active, setActive] = useState("home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the menu is open

//   const navItems = [
//     { name: "home", label: "/ home" },
//     { name: "about", label: "/ about" },
//     { name: "sponsors", label: "/ sponsors" },
//     { name: "events", label: "/ events" },
//     { name: "workshops", label: "/ workshops" },
//     { name: "login", label: "/ login" },
//   ];

//   // Function to toggle the menu open/close
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="fixed top-0 w-full flex justify-between px-5 py-2 text-white bg-gradient-to-r from-gray-950 via-gray-800 via-gray-700 to-gray-950 shadow-2xl z-20">
//       <div className="flex flex-row rounded-lg">
//         <a href="#home">
//           <img
//             src={abacus_img}
//             alt="abacus-image"
//             className="h-14 w-14 mx-auto p-1"
//           />
//         </a>
//         <a href="#home" className="my-auto">
//           <h1 className="hover:text-gray-950 hover:bg-slate-200 font-semibold rounded-lg mx-2 p-1 cursor-pointer">
//             Abacus 2025
//           </h1>
//         </a>
//       </div>

//       {/* Hamburger menu icon for small screens */}
//       <button
//         className="lg:hidden p-2 text-white"
//         onClick={toggleMenu}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       {/* Navigation links */}
//       <div
//         className={`lg:flex lg:flex-row lg:space-x-4 lg:p-0 flex flex-col space-y-4 p-5 transition-all duration-300 ease-in-out ${
//           isMenuOpen
//             ? "fixed top-0 left-0 h-full w-full bg-gradient-to-r from-gray-950 via-gray-800 via-gray-700 to-gray-950 z-20 transform translate-x-0"
//             : "transform -translate-x-full"
//         }`}
//       >
//         {navItems.map((item) => (
//           <button
//             key={item.name}
//             className="relative group overflow-hidden rounded-xl"
//             onClick={() => setActive(item.name)}
//           >
//             <a
//               href={`#${item.name}`}
//               className={`p-2 rounded-xl transition-all duration-300 ${
//                 active === item.name
//                   ? "bg-white text-black hover:text-black"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               {item.label}
//             </a>
//             <span className="absolute left-0 bottom-0 h-1 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
