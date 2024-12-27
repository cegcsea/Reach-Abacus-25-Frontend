import abacus_img from "../assets/images/logo.jpeg";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full flex justify-between px-5 py-2 text-white bg-gradient-to-r from-gray-950 via-gray-800 via-gray-700  to-gray-950 shadow-2xl z-20">
      <div className="flex flex-row rounded-lg">
        <a href="#home">
          <img
            src={abacus_img}
            alt="abacus-image"
            className="h-14 w-14 mx-auto p-1 "
          />
        </a>
        <a href="#home" className="my-auto">
          <h1 className="  hover:text-gray-950 hover:bg-slate-200 font-semibold rounded-lg mx-2 p-1 cursor-pointer">
            Abacus 2025
          </h1>
        </a>
      </div>
      <div className="text-md font-semibold my-auto overflow-hidden">
        <button className="relative rounded-xl overflow-hidden group">
          <a
            href="#home"
            className="p-2 hover:text-gray-950 hover:bg-slate-200 rounded-xl relative z-10"
          >
            / home
          </a>
        </button>
        <button className="rounded-xl overflow-hidden">
          <a
            href="#about"
            className="p-2 hover:text-gray-950 hover:bg-slate-200 rounded-xl"
          >
            / about
          </a>
        </button>
        <button className="rounded-xl overflow-hidden">
          <a
            href="#sponsors"
            className="p-2 hover:text-gray-950 hover:bg-slate-200 rounded-xl"
          >
            / sponsors
          </a>
        </button>
        <button className="rounded-xl overflow-hidden">
          <a
            href="#events"
            className="p-2 hover:text-gray-950 hover:bg-slate-200 rounded-xl"
          >
            / events
          </a>
        </button>
        {/* <button className="rounded-xl overflow-hidden">
          <a
            href="#developers"
            className="p-2 hover:text-gray-950 hover:bg-slate-200 rounded-xl"
          >
            / developers
          </a>
        </button> */}
        <button className="rounded-xl overflow-hidden">
          <a
            href="#workshops"
            className="p-2 hover:text-gray-950 hover:bg-slate-200 rounded-xl"
          >
            / workshops
          </a>
        </button>
        <button className="rounded-xl overflow-hidden">
          <a
            href="login"
            className="p-2 hover:text-gray-950 hover:bg-slate-200 rounded-xl"
          >
            / login
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
