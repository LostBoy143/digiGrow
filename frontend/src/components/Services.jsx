/* eslint-disable no-unused-vars */
import React from "react";

const Services = () => {
  const details = [
    {
      img: "src/assets/Vector.png",
      title: "Data-Driven Marketing Solutions",
      desc: "Our expert team delivers innovative marketing strategies powered by data, AI, and machine learning for impactful results.",
    },
    {
      img: "src/assets/vector2.png",
      title: "Publishers",
      desc: "Drive traffic and earn commissions for every lead, purchase, or interaction with Digigrove's platform.",
    },
    {
      img: "src/assets/Vector3.png",
      title: "Advertiser",
      desc: "Our platform connects you with targeted audiences for both direct response and branding strategies that deliver.",
    },
    {
      img: "src/assets/vector4.png",
      title: "Global Reach & Customer Success",
      desc: "Utilize our diverse marketing strategies to connect with global audiences and drive significant revenue growth.",
    },
    {
      img: "src/assets/vector5.png",
      title: "Comprehensive Services",
      desc: "From SEO and social media to e-commerce and content marketing, we help you scale and succeed.",
    },
    {
      img: "src/assets/vector6.png",
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
          src="/src/assets/crumpled-black.png" // Replace with the correct path
          alt="Styled Background"
          className="top-0 left-0 w-full h-full object-cover opacity-90 mix-blend-darken"
        />
      </div> */}

      <div
        id="serve"
        className="bg-[url('/src/assets/crumpled-black-shade.png')] bg-cover relative bg-center w-full stroke-white stroke-1 py-12 z-20 top-0 flex gap-8 flex-wrap justify-evenly px-12"
      >
        <div
          id="ellipse-container"
          className="h-[90%] sm:h-40 sm:px-20 flex flex-col justify-around  sm:flex-row sm:justify-between absolute items-center sm:top-[42%] sm:w-full"
        >
          <div className="ellipses"></div>
          <div className="ellipses"></div>
          <div className="ellipses"></div>
        </div>
        {details.map((item, idx) => {
          return (
            <div
              className="font-poppins text-white text-center  p-5 flex flex-col items-center gap-4 md:h-[354px] md:w-[354px] h-[274px] w-[274px] bg-black rounded-3xl bg-opacity-20 backdrop-blur-lg"
              key={idx}
            >
              <img
                src={item.img}
                className="h-[56px] w-[56px]"
                alt=""
              />
              <div className="center text-[#8cc540] text-[26px] font-bold">
                <h1 className="font-poppins text-center text-lg sm:text-xl md:text-4xl font-bold">
                  {item.title}
                </h1>
              </div>
              <h3 className="font-poppins text-center font-small text-[12px] sm:text-[15px] md:text-[18px]">
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
