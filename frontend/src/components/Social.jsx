/* eslint-disable no-unused-vars */
import React from "react";

const Social = () => {
  return (
    <div
      id="social-section"
      className=" p-2 h-[70vh] sm:h-[90vh] md:h-[120vh] w-full relative overflow-hidden"
    >
      {/*shapes*/}
      <div className="square absolute md:top-[55%] lg:top-[63%] left-0 h-[80px] md:h-[180px] w-[5px] md:w-[20px] bg-[#8CC540]"></div>
      <img
        src="src/assets/soci-up.png"
        className="up h-[50px] lg:h-[150px] absolute -z-10 top-0 left-0"
      ></img>
      <img
        src="src/assets/soci.png"
        className="down h-[50px] lg:h-[120px] xl:h-[150px] absolute bottom-0 left-[50%]"
      ></img>
      <img
        src="src/assets/soci.png"
        className="down down-2 h-[50px] lg:h-[120px] xl:h-[150px] absolute bottom-[50px] lg:bottom-[120px] xl:bottom-[150px] left-[50%]"
      ></img>
      <img
        id="instagram"
        src="src/assets/instagram.png"
        className="insta h-[120px] md:h-[200px] lg:h-[270px]  absolute  top-[30%] xl:top-[30%] md:right-[2%] right-[-15%] xl:right-[10%] transform transition-all duration-500 hover:rotate-12 hover:scale-125"
      ></img>
      <img
        id="twitter"
        src="src/assets/twi.png"
        className="insta h-[100px] md:h-[250px] lg:h-[300px]   absolute top-[-12px]  md:top-[-5%] 2xl:top-[-2%] 2xl:right-[-2%] right-0 lg:right-[-10%] xl:right-[-2%] transform transition-all duration-500 hover:rotate-12 hover:scale-125"
      ></img>
      <img
        id="facebook"
        src="src/assets/Facebook 3.png"
        className="insta h-[100px] md:h-[270px]  absolute  bottom-[1%] md:bottom-[-5%]  right-[-5%]  transform transition-all duration-500 hover:rotate-12 hover:scale-125"
      ></img>
      <div
        id="text-container"
        className="w-[75%] md:w-[60%] flex flex-col gap-2 md:gap-5 md:ml-[5%] lg:ml-[10%] mt-[12%] lg:mt-[10%] xl:mt-[12%]"
      >
        <h1 className="text-2xl md:text-4xl lg:text-5xl  font-bold">
          State of The Art Technology Powering Our
          Campaigns
        </h1>
        <h2 className="text-left  text-md font-medium md:text-xl lg:text-2xl md:w-[80%]">
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
