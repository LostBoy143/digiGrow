/* eslint-disable no-unused-vars */
import React from "react";

const HeroSection = () => {
  return (
    <div
      id="hero-section"
      className="w-full h-[780px]  relative mt-[0px] sm:mt-[0px] flex  justify-between"
    >
      <div
        id="left-content"
        className="  md:mt-12 ml-[12%]  md:w-[480px] h-full flex flex-col justify-center items-center"
      >
        <h1
          id="hero-h1"
          className="text-[3rem] font-poppins font-medium text-6xl leading-tight tracking-wider inline"
        >
          Your business success starts here
          <div
            id="hero-line"
            className="w-[175px] ml-0 lg:ml-3 mb-1 sm:mb-3 h-[1.5px] md:h-[2.5px] bg-black inline-block"
          ></div>
          <img
            src="src/assets/globe-icon.png"
            alt=""
            className="inline-block h-[30px] w-[30px] md:h-[50px] mb-[6px] md:w-[50px]"
          />
        </h1>
        <h2
          id="hero-h2"
          className="font-poppins font-light text-[20px]"
        >
          Grow your client base with DigiGrove and
          targeting strategies
        </h2>
      </div>
      <div id="right-content">
        <img
          id="hero-img"
          src="src/assets/Simon Lee Asset-unsplash.png"
          className="h-[150%] w-[130%]"
        ></img>
      </div>
    </div>
  );
};

export default HeroSection;
