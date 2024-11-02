/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Navbar = () => {
  const [activeIndex, setActiveIndex] =
    useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Contact",
  ];
  return (
    <div
      id="navbar"
      className="md:h-[72px] h-[72px] fixed top-0 z-[150] bg-white w-full flex justify-between px-4 sm:px-[108px] items-center"
    >
      <div id="logo">
        <img
          id="logo-img"
          src="src/assets/nav-logo.png"
          alt=""
          className=" w-[150px] sm:w-[230px] h-[30px] sm:h-[40px] aspect-auto"
        />
      </div>
      <button
        className="block md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-8 h-8 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div
        id="menu-icons"
        className="bg-gray-300 w-[48%] hidden md:block  h-[55%] rounded-full"
      >
        <ul className="flex justify-evenly items-center h-full">
          {navItems.map((item, index) => (
            <li
              key={index}
              id="nav-li"
              className={`rounded-full  flex font-semi-bold justify-center font-semibold items-center cursor-pointer w-1/4 h-full duration-500 ${
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
      <div
        className={`absolute top-0 left-0 right-0 bg-white z-20 p-6 shadow-md transform ${
          menuOpen
            ? "translate-y-0"
            : "-translate-y-full"
        } transition-transform duration-300 sm:hidden`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col gap-4 mt-8">
          {" "}
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`rounded-lg p-4 text-center font-semibold cursor-pointer duration-500 ${
                activeIndex === index
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => {
                setActiveIndex(index);
                setMenuOpen(false);
              }}
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
