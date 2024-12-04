/* eslint-disable no-unused-vars */
import React from "react";

const Services = () => {
  const details = [
    {
      img: "/assets/Vector.png",
      title: "Data-Driven Marketing Solutions",
      desc: "Our expert team delivers innovative marketing strategies powered by data, AI, and machine learning for impactful results.",
    },
    {
      img: "/assets/vector2.png",
      title: "Publishers",
      desc: "Drive traffic and earn commissions for every lead, purchase, or interaction with Digigrove's platform.",
    },
    {
      img: "/assets/Vector3.png",
      title: "Advertiser",
      desc: "Our platform connects you with targeted audiences for both direct response and branding strategies that deliver.",
    },
    {
      img: "/assets/vector4.png",
      title: "Global Reach & Customer Success",
      desc: "Utilize our diverse marketing strategies to connect with global audiences and drive significant revenue growth.",
    },
    {
      img: "/assets/vector5.png",
      title: "Comprehensive Services",
      desc: "From SEO and social media to e-commerce and content marketing, we help you scale and succeed.",
    },
    {
      img: "/assets/vector6.png",
      title: "24/7 Support",
      desc: "Our expert team delivers innovative marketing strategies powered by data, AI, and machine learning for impactful results.",
    },
  ];

  return (
    <div
      className="w-full -z-40 bg-[#232233]" // Add mix-blend-mode here
      id="services-container"
    >
      {/* <div className="w-full h-full">
        <img
          src="/assets/crumpled-black.png" // Replace with the correct path
          alt="Styled Background"
          className="top-0 left-0 w-full h-full object-cover opacity-90 mix-blend-darken"
        />
      </div> */}

      <div
        id="serve"
        className="bg-[url('/assets/crumpled-black-shade.png')] bg-cover relative bg-center w-full stroke-white stroke-1 py-8 xl:py-12 z-20 top-0 grid grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8 justify-items-center px-8 lg:px-12 2xl:px-24"
      >
        {/* ellipse */}
        <div
          id="ellipse-container"
          className="w-[85vw] h-full flex flex-col justify-between  xl:flex-row  absolute items-center py-[40px] md:py-[0px]"
        >
          <div className="ellipses h-[60px] md:h-[100px] w-[60px] md:w-[100px]"></div>
          <div className="ellipses h-[60px] md:h-[100px] w-[60px] md:w-[100px]"></div>
          <div className="ellipses h-[60px] md:h-[100px] w-[60px] md:w-[100px]"></div>
        </div>
        {/* ellipse end */}
        {details.map((item, idx) => {
          return (
            <div
              className="font-poppins text-white text-center border bg-semi-transparent-white-10 border-semi-transparent-white p-2 md:p-5 flex flex-col justify-evenly items-center  h-[275px] md:h-[354px]  md:w-[354px]  bg-black rounded-3xl bg-opacity-20 backdrop-blur-lg"
              key={idx}
            >
              <img
                src={item.img}
                className="md:h-[56px] h-[36px] w-[36px] md:w-[56px]"
                alt=""
              />
              <div className="center text-[#8cc540] md:text-[26px] text-[12px] font-bold">
                <h1 className="font-poppins text-center text-[14px] md:text-[28px] font-bold md:leading-[40px]">
                  {item.title}
                </h1>
              </div>
              <h3 className="font-poppins text-center  text-[12px] sm:text-[14px] md:text-[18px]">
                {item.desc}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
