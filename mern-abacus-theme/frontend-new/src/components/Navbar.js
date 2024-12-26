import abacus_img from "../assets/images/logo.jpeg";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full flex justify-between px-5 py-2 text-white bg-black shadow-2xl z-20">
      <div className="flex flex-row rounded-lg">
        <a href="#home">
          <img
            src={abacus_img}
            alt="abacus-image"
            className="h-14 w-14 mx-auto"
          />
        </a>
        <h1 className="my-auto hover:bg-gray-700">Abacus 2025</h1>
      </div>
      <div className="text-md font-semibold my-auto">
        <a
          href="#home"
          className="p-2 hover:text-gray-300 hover:bg-gray-800 rounded-md"
        >
          /home
        </a>
        <a
          href="#about"
          className="p-2 hover:text-gray-300 hover:bg-gray-800 rounded-md"
        >
          /about
        </a>
        <a
          href="#sponsors"
          className="p-2 hover:text-gray-300 hover:bg-gray-800 rounded-md"
        >
          /sponsors
        </a>
        <a
          href="#events"
          className="p-2 hover:text-gray-300 hover:bg-gray-800 rounded-md"
        >
          /events
        </a>
        <a
          href="#developers"
          className="p-2 hover:text-gray-300 hover:bg-gray-800 rounded-md"
        >
          /developers
        </a>
        <a
          href="#workshops"
          className="p-2 hover:text-gray-300 hover:bg-gray-800 rounded-md"
        >
          /workshops
        </a>
        <a
          href="#login"
          className="p-2 hover:text-gray-300 hover:bg-gray-800 rounded-md"
        >
          /login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
