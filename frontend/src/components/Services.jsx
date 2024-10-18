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
      img: "src/assets/Vector2.png",
      title: "Publishers",
      desc: "Drive traffic and earn commissions for every lead, purchase, or interaction with Digigrove's platform.",
    },
    {
      img: "src/assets/Vector3.png",
      title: "Advertiser",
      desc: "Our platform connects you with targeted audiences for both direct response and branding strategies that deliver.",
    },
    {
      img: "src/assets/Vector4.png",
      title: "Global Reach & Customer Success",
      desc: "Utilize our diverse marketing strategies to connect with global audiences and drive significant revenue growth.",
    },
    {
      img: "src/assets/Vector5.png",
      title: "Comprehensive Services",
      desc: "From SEO and social media to e-commerce and content marketing, we help you scale and succeed.",
    },
    {
      img: "src/assets/Vector6.png",
      title: "24/7 Support",
      desc: "Our expert team delivers innovative marketing strategies powered by data, AI, and machine learning for impactful results.",
    },
  ];

  return (
    <div
      className="h-[125vh] w-full mt-16 relative -z-40 "
      id="services-container"
    >
      <div className="h-[125vh] w-full mt-16 relative -z-30 "></div>
      <div
        id="ellipse-container"
        className="h-40 px-20 absolute -z-20 flex justify-between items-center top-[38%] w-full "
      >
        <div className="ellipses"></div>
        <div className="ellipses"></div>
        <div className="ellipses"></div>
      </div>
      {/* <div
        id="services-section"
        className="h-full flex justify-center items-center"
      ></div> */}
      <div
        id="serve"
        className="w-full  py-12 absolute z-20 h-[130vh] top-0 flex flex-wrap justify-evenly px-12"
      >
        {details.map((item, idx) => {
          return (
            <div
              className="item flex justify-center"
              key={idx}
            >
              <div className=" text-white p-5 flex flex-col  items-center  gap-4  h-[300px] w-[310px] bg-black rounded-3xl bg-opacity-20 backdrop-blur-lg ">
                <img
                  src={item.img}
                  className="h-[56px] w-[56px]"
                  alt=""
                />
                <div className="center text-[#8cc540] text-[26px] font-bold">
                  <h1 className="text-center">
                    {item.title}
                  </h1>
                </div>
                <h3 className="text-center">
                  {item.desc}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
