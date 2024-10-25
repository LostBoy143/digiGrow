/* eslint-disable no-unused-vars */
import React from "react";

const HeroSection = () => {
  return (
    <div
      id="hero-section"
      className="h-screen w-full  flex  justify-between"
    >
      <div
        id="left-content"
        className=" mt-12 ml-[12%] 2-[100%] md:w-[480px] h-full flex flex-col justify-center items-center"
      >
        <h1
          id="hero-h1"
          className="text-[3rem] font-semibold leading-tight tracking-wider inline"
        >
          Your business success starts here
          <div
            id="hero-line"
            className="w-[175px] ml-3 mb-3 h-[2.5px] bg-black inline-block"
          ></div>
          <img
            src="src/assets/globe-icon.png"
            alt=""
            className="inline-block h-[50px] mb-[6px] w-[50px]"
          />
        </h1>
        <h2
          id="hero-h2"
          className="text-[19.5px]"
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
