/* eslint-disable no-unused-vars */
import React from "react";

const Services = () => {
  const details = [
    {
      img: "src/assets/Vector.png",
      title: "Data Driven Marketing Solutions",
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
      className="h-[125vh]  w-full mt-16 relative -z-40 bg-[#232233]" // Add mix-blend-mode here
      id="services-container"
    >
      <div className="relative w-full h-full">
        <img
          src="/src/assets/crumpled-black.png" // Replace with the correct path
          alt="Styled Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90 mix-blend-darken"
        />
      </div>
      <div
        id="ellipse-container"
        className="h-40 px-20 absolute  flex justify-between items-center top-[42%] w-full"
      >
        <div className="ellipses"></div>
        <div className="ellipses"></div>
        <div className="ellipses"></div>
      </div>

      <div
        id="serve"
        className="w-full stroke-white stroke-1 py-12 absolute z-20 h-[130vh] top-0 flex gap-8 flex-wrap justify-evenly px-12"
      >
        {details.map((item, idx) => {
          return (
            <div
              className="text-white  p-5 flex flex-col  items-center gap-4 md:h-[373px] md:w-[354px] h-[293px] w-[274px]   bg-opacity-20  bg-white/5 border border-white/20 rounded-[35px] backdrop-blur-[30px]"
              key={idx}
            >
              <img src={item.img} className="h-[56px] w-[56px]" alt="" />
              <div className="center text-[#8cc540] text-[26px] font-bold">
                <h1 className="text-center text-42xl font-bold">
                  {item.title}
                </h1>
              </div>
              <h3 className="text-center font-medium text-2xl">{item.desc}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
