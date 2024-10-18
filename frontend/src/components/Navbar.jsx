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
      className="h-20 fixed top-0 z-10 bg-white w-full flex justify-between px-[108px] items-center"
    >
      <div id="logo">
        <img
          src="src/assets/nav-logo.png"
          alt=""
          className=" w-[230px] h-[40px] aspect-auto"
        />
      </div>
      <div
        id="menu-icons"
        className="bg-gray-300 w-[48%]   h-[55%] rounded-full"
      >
        <ul className="flex justify-evenly items-center h-full">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`rounded-full flex font-semi-bold justify-center font-semibold items-center cursor-pointer w-1/4 h-full duration-500 ${
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
