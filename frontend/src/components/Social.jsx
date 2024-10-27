/* eslint-disable no-unused-vars */
import React from "react";

const Social = () => {
  return (
    <div
      id="social-section"
      className=" p-2 h-[90vh] md:h-[120vh] w-full relative"
    >
      {/*shapes*/}
      <div className="square absolute top-[63%] left-0 md:h-[180px] w-[20px] bg-[#8CC540]"></div>
      <img
        src="src/assets/soci-up.png"
        className="up lg:h-[150px] absolute top-0 left-0"
      ></img>
      <img
        src="src/assets/soci.png"
        className="down lg:h-[120px] xl:h-[150px] absolute bottom-0 left-[50%]"
      ></img>
      <img
        src="src/assets/soci.png"
        className="down lg:h-[120px] xl:h-[150px] absolute lg:bottom-[120px] xl:bottom-[150px] left-[50%]"
      ></img>
      <img
        id="instagram"
        src="src/assets/instagram.png"
        className="insta h-[270px]  absolute xl:top-[30%]  right-[10%] transform transition-all duration-500 hover:rotate-12 hover:scale-125"
      ></img>
      <div
        id="text-container"
        className="w-[75%] md:w-[60%] flex flex-col gap-2 md:gap-5 lg:ml-[10%] mt-[12%] lg:mt-[10%] xl:mt-[12%]"
      >
        <h1 className="text-2xl md:text-5xl  font-bold">
          State of The Art Technology Powering Our
          Campaigns
        </h1>
        <h2 className="text-left  text-md font-medium md:text-2xl md:w-[80%]">
          Digigrove’s AI-powered platform uses
          deep learning and real-time analytics to
          drive smart marketing decisions. Gain a
          competitive edge, uncover new
          opportunities, and stay ahead with
          dynamic digital strategies.
        </h2>
        <h1 className="text-4xl md:text-9xl font-bold">
          400+
        </h1>
        <h2 className="text-xl md:text-3xl ">
          Customers Globally
        </h2>
      </div>
    </div>
  );
};

export default Social;
