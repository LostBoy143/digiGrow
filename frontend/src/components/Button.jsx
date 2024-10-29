/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Button = () => {
  return (
    <div
      id="button"
      className=" group  flex  h-8 md:h-12 duration-1000 w-44   "
      type="submit"
    >
      <button
        className=" group-hover:text-black w-32 h-full text-md md:text-xl bg-transparent border-t-[1px] border-b-[1px] border-l-[1px] border-half-white text-white font-semibold rounded-tl-full rounded-bl-full  transition-all duration-500 group-hover:bg-[#8cc540] group-hover:border-none   group-hover:rounded-full "
        id="btn1"
      >
        Submit
      </button>
      <button
        className="w-12 h-full  bg-transparent  text-white border-t-[1px] border-r-[1px] border-b-[1px] border-half-white font-bold rounded-tr-full rounded-br-full flex justify-start items-center  transition-all duration-500 group-hover:bg-[#8cc540] group-hover:border-none   group-hover:rounded-full  "
        id="btn2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-6 transition-all duration-300 group-hover:translate-x-3 group-hover:text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Button;
