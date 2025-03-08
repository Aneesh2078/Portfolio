import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-between w-full text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide flex-shrink-0">Portfolio</span>

      <ul
        className={`${
          menu ? "flex" : "hidden"
        } flex-col w-full md:w-auto md:flex md:flex-row items-center space-y-2 md:space-y-0 mx-auto md:mx-0 mt-4 font-semibold md:mt-0 bg-black px-4 py-2 rounded-xl bg-opacity-30 md:bg-transparent md:space-x-6`}
        >
        <a href="#About"><li className="text-md transition-all duration-300 hover:bg-white hover:text-black px-4 py-2 rounded-lg w-full text-center md:w-auto">About</li></a>
        <a href="#Projects"><li className="text-md transition-all duration-300 hover:bg-white hover:text-black px-4 py-2 rounded-lg w-full text-center md:w-auto">Projects</li></a>
        <a href="#Education"><li className="text-md transition-all duration-300 hover:bg-white hover:text-black px-4 py-2 rounded-lg w-full text-center md:w-auto">Education</li></a>
        <a href="#Achievements"><li className="text-md transition-all duration-300 hover:bg-white hover:text-black px-4 py-2 rounded-lg w-full text-center md:w-auto">Achievements</li></a>
        <a href="#Workshops"><li className="text-md transition-all duration-300 hover:bg-white hover:text-black px-4 py-2 rounded-lg w-full text-center md:w-auto">Workshops</li></a>
        <a href="#Footer"><li className="text-md transition-all duration-300 hover:bg-white hover:text-black px-4 py-2 rounded-lg w-full text-center md:w-auto">Contact</li></a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={35}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={35}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;