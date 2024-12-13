/* eslint-disable no-unused-vars */
import React, { useState, ReactDOM } from "react";
import { scroller } from "react-scroll";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolls = {
    Home: "Home",
    About: "AboutUs",
    Services: "Services",
    Contact: "Contact",
  };

  const navigate = useNavigate();
  const location = useLocation();
  const navItems = ["Home", "About", "Services", "Contact"];
  return (
    <div
      id="navbar"
      className="md:h-[72px] h-[72px] fixed top-0 z-[150] bg-white w-full flex justify-between px-4 sm:px-[108px] items-center"
    >
      <div id="logo">
        <img
          id="logo-img"
          src="/assets/nav-logo.png"
          alt=""
          className=" w-[150px] sm:w-[230px] h-[30px] sm:h-[40px] aspect-auto"
        />
      </div>
      <button
        className="block md:hidden"
        onClick={() => {
          console.log(menuOpen);
          setMenuOpen(!menuOpen);
        }}
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
            <div
              key={index}
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  scroller.scrollTo(scrolls[item] || "#", {
                    duration: 500,
                    smooth: true,
                    offset: -50,
                  });
                  setActiveIndex(index);
                });
              }}
              className={`rounded-full  flex font-semi-bold justify-center font-semibold items-center cursor-pointer w-1/4 h-full duration-500 ${
                activeIndex === index
                  ? "bg-black text-white"
                  : "bg-slate-300 text-black"
              }`}
            >
              <li id="nav-li" className="font-poppins font-normal">
                {item}
              </li>
            </div>
          ))}
        </ul>
      </div>
      {menuOpen && (
        <div
          className={`absolute w-1/2 top-0 h-screen right-0 bg-white z-20 py-6 shadow-md transform ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 `}
        >
          <button
            className="absolute  top-8 right-8"
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

          <ul className="flex flex-col border-black border-t-[1px]  mt-10">
            {" "}
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item === "Home" ? "/" : "#"}
                className={` py-4 pr-8  border-black border-b-[1px] text-right font-poppins capitalize font-normal tracking-wide cursor-pointer duration-500 ${
                  activeIndex === index
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                <li
                  onClick={() => {
                    setActiveIndex(index);
                    setMenuOpen(false);
                  }}
                >
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
