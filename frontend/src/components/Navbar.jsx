/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Navbar = () => {
  const [activeIndex, setActiveIndex] =
    useState(null);
  const navItems = [
    "Home",
    "About",
    "Services",
    "Contact",
  ];
  return (
    <div
      id="navbar"
      className="h-24 border-cyan-600 border-2 w-full flex justify-around items-center"
    >
      <div
        id="logo"
        className="bg-slate-600 w-1/4 h-1/2"
      >
        Digigrove
      </div>
      <div
        id="menu-icons"
        className="bg-slate-300 w-2/4   h-1/2 rounded-full"
      >
        <ul className="flex justify-evenly items-center h-full">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`rounded-full flex font-semi-bold justify-center items-center cursor-pointer w-1/4 h-full duration-500 ${
                activeIndex === index
                  ? "bg-black text-white"
                  : "bg-slate-300 text-black"
              }`}
              onClick={() =>
                setActiveIndex(index)
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
