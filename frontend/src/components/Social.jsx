/* eslint-disable no-unused-vars */
import React from "react";

const Social = () => {
  return (
    <div id="social-section" className="p-2  w-full relative ">
      {/*shapes*/}
      <img
        src="/assets/soci-up.png"
        className="up h-[50px] lg:h-[150px] absolute -z-10 top-0 left-0"
      ></img>
      <img
        src="/assets/soci.png"
        className="down h-[50px] lg:h-[120px] xl:h-[150px] absolute bottom-0 left-[50%]"
      ></img>
      <img
        src="/assets/soci.png"
        className="down down-2 h-[50px] lg:h-[120px] xl:h-[150px] absolute bottom-[50px] lg:bottom-[120px] xl:bottom-[150px] left-[50%]"
      ></img>
      <img
        id="instagram"
        src="/assets/Instagram.png"
        className="insta h-[100px] sm:h-[280px]  absolute pb-4 top-[30%] right-[10%] transform transition-all duration-500 hover:rotate-12 hover:scale-125"
      ></img>
      <img
        id="twitter"
        src="/assets/twi.png"
        className="insta h-[100px] sm:h-[350px] overflow-visible pb-4 absolute top-[-8%]   xl:top-[-12%]  right-0  transform transition-all duration-500 hover:rotate-12 hover:scale-125 z-[20]"
      ></img>
      <img
        id="facebook"
        src="/assets/Facebook 3.png"
        className="insta h-[100px] sm:h-[250px] pb-4 absolute  bottom-[1%] md:bottom-[-3%]  right-0  transform transition-all duration-500 hover:rotate-12 hover:scale-125"
      ></img>
      <div
        id="text-container"
        className="relative w-[75%] md:w-[60%] mb-[152px] flex flex-col gap-2 md:gap-5 pl-4 md:pl-12 lg:pl-[128px] mt-[12%] lg:mt-[10%] xl:mt-[12%]"
      >
        <div className="square absolute left-[-8px] md:h-[160px] w-[20px] bg-[#8CC540] bottom-0"></div>

        <h1 className="font-poppins text-2xl md:text-5xl  font-medium">
          State of The Art Technology Powering Our Campaigns
        </h1>
        <h2 className="font-poppins text-left  text-md font-small md:text-2xl md:w-[80%]">
          Digigrove’s AI-powered platform uses deep learning and real-time
          analytics to drive smart marketing decisions. Gain a competitive edge,
          uncover new opportunities, and stay ahead with dynamic digital
          strategies.
        </h2>
        <div className="relative text-4xl md:text-9xl font-bold">
          <span className="font-monument font-black">400+</span>
          <h2 className="font-monument text-xl md:text-3xl ">
            Customers Globally
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Social;
