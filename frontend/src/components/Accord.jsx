/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Accord = () => {
  const slogans = [
    {
      name: "SEARCH ARBITRAGE",
      way: "/SearchArbitrage",
    },
    {
      name: "BRAND DESIGN AND STRATEGY",
      way: "/Brand",
    },
    {
      name: "EMAIL MARKETING AND LEAD GENERATION",
      way: "/EmailLead",
    },
    {
      name: "ECOMMERCE & INFLUENCER MARKETING",
      way: "/Ecommerce",
    },
    {
      name: "AFFILIATE MARKETING",
      way: "/AffiliateMarketing",
    },
  ];

  return (
    <div className="py-7 " id="accord-container">
      <div className="font-poppins text-center text-3xl md:text-6xl font-extrabold mb-5">
        What We Do
      </div>
      {slogans.map((item, idx) => {
        return (
          <Link
            className="group items md:hover:bg-[#232233] h-auto sm:h-[105px] w-full py-3 sm:py-0   font-thunder  px-6 sm:px-12 md:px-28 cursor-pointer "
            key={idx}
            to={item.way}
          >
            <h2
              id="about-h2"
              className="group-hover:text-[#8cc540]  sm:leading-4percent sm:tracking-wide lg:tracking-wider  duration-500 text-[22px] lg:text-6xl md:group-hover:text-[26px] lg:group-hover:text-[66px]"
            >
              {item.name}
            </h2>
            <div className="icon">
              <svg
                // width="60"
                // height="60"
                viewBox="0 0 106 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-[40px] w-[25px] sm:h-[40px] h-[25px] lg:w-[60px] lg:h-[60px] "
              >
                <mask
                  id="path-1-inside-1_222_21"
                  fill="white"
                >
                  <path d="M3 106C1.34315 106 -5.87108e-08 104.657 -1.31134e-07 103L-4.50227e-06 3C-4.5747e-06 1.34315 1.34314 -5.87108e-08 3 -1.31134e-07L103 -4.50227e-06C104.657 -4.5747e-06 106 1.34314 106 3L106 103C106 104.657 104.657 106 103 106L3 106Z" />
                </mask>
                <path
                  d="M0 106L-4.63341e-06 0L0 106ZM103 -3C106.314 -3 109 -0.31371 109 3L109 100C109 103.314 106.314 106 103 106C103 106 103 104.657 103 103L103 3L103 -3ZM106 106L0 106L106 106ZM-4.50227e-06 3C-4.64712e-06 -0.313705 2.68629 -3 6 -3L103 -3C106.314 -3 109 -0.31371 109 3L103 3L3 3C1.34314 3 -4.50227e-06 3 -4.50227e-06 3Z"
                  className="fill-black group-hover:fill-lime-500 duration-300"
                  mask="url(#path-1-inside-1_222_21)"
                  strokeWidth="6"
                />
                <path
                  d="M1.93945 103.939L102.939 2.93945"
                  className="stroke-black group-hover:stroke-lime-500 duration-300"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Accord;
