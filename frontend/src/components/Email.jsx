/* eslint-disable no-unused-vars */
import React from "react";
import Button2 from "./Button2";

const Email = () => {
  return (
    <div
      id="email-marketing-container"
      className="2xl:h-[100vh] md:h-[110vh] sm:h-[110vh] max-h-[110vh] sm:min-h-[100vh] w-full flex flex-col gap-6  sm:gap-0 sm:flex-row py-12 sm:py-0  mt-[40px] "
    >
      <div className="left-side sm:pl-[10%] 2xl:pl-[10%] h-full w-full sm:w-[55%] pt-5 flex flex-col items-center sm:items-start sm:justify-evenly ">
        <div
          id="text"
          className=" text-[#8cc540] 2xl:w-[1097px] md:mt-[15%] px-5 pb-8 sm:p-0 sm:pb-0   "
        >
          <h1 className="text-center sm:text-start 2xl:text-[140px] xl:text-[100px] md:text-[60px]  sm:text-[50px] text-[40px] font-bold mt-2 font-thunder">
            EMAIL MARKETING
          </h1>
          <h1 className="text-center sm:text-start 2xl:text-[140px] xl:text-[100px] md:text-[60px] sm:text-[50px] text-[40px] xl:mt-[-50px] sm:mt-[-30px] mt-[-20px]   font-bold  font-thunder">
            & LEAD GENERATION
          </h1>{" "}
          <h3 className="text-center sm:text-start w-full 2xl:w-[55%]  md:w-[60%] sm:w-[80%] text-black 2xl:text-[28px] taxt-[14px] sm:text-[16px] font-semibold">
            Our targeted email campaigns and lead
            generation strategies are designed to
            engage, nurture, and convert leads,
            driving growth and maximizing ROI for
            your business.
          </h3>
        </div>
        <div className=" md:mt-[20%]">
          <Button2 />
        </div>
      </div>
      <div className="right-side h-full w-full sm:w-[45%] flex justify-center sm:justify-start items-center sm:mr-4 xl:mr-0 ">
        <div className="h-[220px] w-[220px] 2xl:h-[690px] md:h-[390px] sm:h-[280px] md:ml-4 sm:w-[346px] md:w-[456px] 2xl:w-[756px] sm:mb-[120px]  md:mb-0">
          <img
            src="/assets/choosy/Frame32.png"
            alt="d"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Email;
