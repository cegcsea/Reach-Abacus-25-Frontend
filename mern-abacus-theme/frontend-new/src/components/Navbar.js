import { useState } from "react";
import { Link } from "react-router-dom";
import abacus_img from "../assets/images/abacus_logo.png";
import {FaHome} from "react-icons/fa";
const Navbar = () => {
  //   const [active, SetActive] = useState("home");
  //   //SetActive("home");
  //   console.log(active);
  return (
    <div className="flex justify-between px-5 py-2  text-zinc-200 bg-gray-900">
      <div className="flex flex-row rounded-lg">
        <Link>
          <img
            src={abacus_img}
            alt="abacus-image"
            className="h-14 w-14 mx-auto"
          />
        </Link>
        <h1 className="my-auto hover:bg-gray-200">Abacus 2025</h1>
      </div>
      <div className="text-md font-semibold my-auto">
        <a
          href="#home"
          className="p-2 hover:text-gray-200 hover:bg-gray-700 rounded-md"
        >
          /home
        </a>
        <Link
          to="#about"
          className="p-2 hover:text-gray-200 hover:bg-gray-700 rounded-md"
        >
          /about
        </Link>
        <a
          href="#sponsors"
          className="p-2 hover:text-gray-200 hover:bg-gray-700 rounded-md"
        >
         /sponsors
        </a>
        <Link
          to="#events"
          className="p-2 hover:text-gray-200 hover:bg-gray-700 rounded-md"
        >
          /events
        </Link>
        <Link
          to="#workshops"
          className="p-2 hover:text-gray-200 hover:bg-gray-700 rounded-md"
        >
         /workshops
        </Link>
        <Link
          to="#login"
          className="p-2 hover:text-gray-200 hover:bg-gray-700 rounded-md"
        >
          /login
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
