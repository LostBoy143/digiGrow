/* eslint-disable no-unused-vars */
import React from "react";

const Button = () => {
  return (
    <div
      id="button"
      className=" group mt-4 flex ml-10  h-16 duration-1000 w-72 "
    >
      <button
        className="w-60 h-full text-2xl bg-green-400 text-black font-bold rounded-tl-full rounded-bl-full  transition-all duration-500 group-hover:bg-black  group-hover:text-green-400  group-hover:rounded-full "
        id="btn1"
      >
        Connect with Us !
      </button>
      <button
        className="w-16 h-full bg-green-400  text-black font-bold rounded-tr-full rounded-br-full flex justify-start items-center  transition-all duration-500 group-hover:bg-black    group-hover:rounded-full  "
        id="btn2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-10 transition-all duration-300 group-hover:translate-x-3 group-hover:text-green-400"
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
