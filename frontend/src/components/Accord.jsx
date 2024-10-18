/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Accord = () => {
  const slogans = [
    "SEARCH ARBITRAGE",
    "BRAND DESIGN AND STRATEGY",
    "EMAIL MARKETING AND LEAD GENERATION",
    "ECOMMERCE & INFLUENCER MARKETING",
    "AFFILIATE MARKETING",
  ];

  return (
    <div
      className=" mt-12 py-7 "
      id="accord-container"
    >
      <h1 className="text-center text-6xl font-extrabold mb-5">
        What We Do
      </h1>
      {slogans.map((item, idx) => {
        return (
          <div
            className="group items   font-thunder  px-28 cursor-pointer "
            key={idx}
          >
            <h2 className="group-hover:text-lime-500  leading-4percent tracking-wider  duration-500 text-6xl group-hover:text-[66px]">
              {item}
            </h2>
            <div className="icon">
              <svg
                width="60"
                height="60"
                viewBox="0 0 106 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
          </div>
        );
      })}
    </div>
  );
};

export default Accord;
