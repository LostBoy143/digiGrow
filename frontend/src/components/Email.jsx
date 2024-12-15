/* eslint-disable no-unused-vars */
import React from "react";
import Button2 from "./Button2";

const Email = () => {
  return (
    <div
      id="email-marketing-container"
      className="lg:mt-[152px] mt-28 w-full flex  gap-6 xl:flex-wrap  items-center xl:items-start flex-col xl:flex-row pt-12 sm:py-0  "
    >
      <div className="main flex flex-col md:flex-row">
        <div className="left-side h-auto md:pl-[108px]  h-full w-full flex flex-col  sm:justify-between ">
          <div
            id="text"
            className=" text-[#8cc540]  px-5 pb-6 sm:p-0 sm:pb-0   "
          >
            <h3 className="md:tracking-[0.02em] leading-none text-center md:text-left  2xl:text-[128px] xl:text-[80px] md:text-[50px]   text-[40px] font-bold  font-thunder">
              EMAIL MARKETING
            </h3>
            <h3 className="md:tracking-[0.02em] leading-none text-center md:text-left  2xl:text-[128px] xl:text-[80px] md:text-[50px]  text-[40px]   font-bold  font-thunder">
              & LEAD GENERATION
            </h3>{" "}
            <h5 className="text-center md:text-left  text-black text-[18px] font-normal font-poppins">
              Our targeted email campaigns and lead generation strategies are
              designed to engage, nurture, and convert leads, driving growth and
              maximizing ROI for your business.
            </h5>
          </div>

          <div className="hidden md:block md:mt-[200px]">
            <Button2 />
          </div>
        </div>

        <div className="right-side  h-full w-full flex justify-center items-center">
          <div className="flex flex-col items-center h-[220px] w-[220px] sm:h-[280px] sm:w-[346px] md:h-[390px] md:w-[456px] 2xl:h-[690px] 2xl:w-[756px] md:ml-4 sm:mb-[120px] md:mb-0">
            <img
              src="/assets/choosy/Frame32.png"
              alt="Responsive Image"
              className="h-full w-full object-contain"
            />

          <div className="block md:hidden md:mt-[200px] pt-[20px]">
            <Button2 />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
