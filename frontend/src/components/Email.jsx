/* eslint-disable no-unused-vars */
import React from "react";
import Button2 from "./Button2";

const Email = () => {
  return (
    <div
      id="email-marketing-container"
      className="lg:mt-[152px] mt-28 w-full flex  gap-6 xl:flex-wrap  items-center xl:items-start flex-col xl:flex-row pt-12 sm:py-0  "
    >
      <div className="left-side xl:pl-[108px]  h-full w-full sm:w-[45%] flex flex-col items-center  sm:justify-evenly ">
        <div id="text" className=" text-[#8cc540]  px-5 pb-6 sm:p-0 sm:pb-0   ">
          <h3 className="xl:tracking-[0.04em] leading-none text-center xl:text-left  2xl:text-[100px] xl:text-[72px] md:text-[50px]   text-[40px] font-bold  font-thunder">
            EMAIL MARKETING
          </h3>
          <h3 className="xl:tracking-[0.04em] leading-none text-center xl:text-left  2xl:text-[100px] xl:text-[72px] md:text-[50px]  text-[40px]   font-bold  font-thunder">
            & LEAD GENERATION
          </h3>{" "}
          <h5 className="text-center xl:text-left xl:w-1/2  text-black 2xl:text-[24px] text-[14px] sm:text-[12px] font-normal font-poppins">
            Our targeted email campaigns and lead generation strategies are
            designed to engage, nurture, and convert leads, driving growth and
            maximizing ROI for your business.
          </h5>
        </div>
      </div>
      <div className="right-side  h-full w-full sm:w-[45%] flex justify-center items-center">
        <div className="h-[220px] w-[220px] sm:h-[280px] sm:w-[346px] md:h-[390px] md:w-[456px] 2xl:h-[690px] 2xl:w-[756px] md:ml-4 sm:mb-[120px] md:mb-0">
          <img
            src="/assets/choosy/Frame32.png"
            alt="Responsive Image"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="mx-auto xl:ml-28">
        <Button2 />
      </div>
    </div>
  );
};

export default Email;
