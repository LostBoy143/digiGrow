/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const Button2 = () => {
  const navigate = useNavigate();
  return (
    <div
      id="button"
      className="group flex h-10 sm:h-16 duration-1000 w-52 sm:w-72"
      onClick={() => {
        navigate('/?scrollToContact=true')
      }}
    >
      <button
        className="text-[22px] font-poppins font-normal w-40 sm:w-60 h-full text-md bg-[#8cc540] text-black  rounded-tl-full rounded-bl-full transition-all duration-500 group-hover:bg-black group-hover:text-[#8cc540] group-hover:rounded-full"
        id="btn1"
      >
        Connect with Us !
      </button>
      <button
        className="w-16 h-full bg-[#8cc540] text-black font-bold rounded-tr-full rounded-br-full flex justify-start items-center transition-all duration-500 group-hover:bg-black group-hover:rounded-full"
        id="btn2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-10 transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#8cc540]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Button2;
