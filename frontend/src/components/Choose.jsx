/* eslint-disable no-unused-vars */
import React from "react";

const Choose = () => {
  const details = [
    {
      img: "/assets/choosy/item1.png",
      title: "Expert Team",
      desc: "Seasoned professionals driving results with best trends and practices for the market worldwide.",
    },
    {
      img: "/assets/choosy/item2.png",
      title: "Customized Strategies",
      desc: "We provide tailored plans for your specific goals needs",
    },
    {
      img: "/assets/choosy/item3.png",
      title: "Proven Results",
      desc: "A solid track record of success stories across industries.",
    },
    {
      img: "/assets/choosy/item4.png",
      title: "Transparent Reporting",
      desc: "Clear insights and regular reports at every step into your campaigns.",
    },
    {
      img: "/assets/choosy/item5.png",
      title: "Client-Centric Approach",
      desc: "Your goals are our priority. We work strategically to deliver impactful solutions.",
    },
    {
      img: "/assets/choosy/item6.png",
      title: "Expert Leverages",
      desc: "Our team of experts use advanced tools for superior outcomes.",
    },
  ];

  return (
    <div className="bg-[rgb(36,34,52)] mt-16 pb-20 2xl:py-16  2xl:max-h-[110vh] relative overflow-hidden  -z-20 flex flex-col items-center py-8 2xl:pb-[100px] px-4 md:px-8">
      <img
        className="w-full h-full aspect-auto object-cover absolute top-0 left-0 mix-blend-overlay"
        src="/assets/Group41.png"
        alt="Background"
      />
      <h1 className=" font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:font-extrabold text-[rgb(89,134,30)] mb-10 text-center">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full 2xl:max-w-[1600px] md:max-w-[1100px] 2xl:max-h-[800px] 2xl:pl-[80px]">
        {details.map((item, idx) => (
          <div
            key={idx}
            className="bg-[url('/assets/grad-morph.png')] bg-cover flex flex-col mt-[40px] md:mt-[80px] relative items-center 2xl:h-[322px] lg:h-[200px] sm:min-h-[200px] md:min-h-[250px] min-w[200px]  lg:w-[320px] 2xl:w-[433px] p-2 md:p-6 2xl:px-16 rounded-3xl shadow-md text-white transition-transform transform hover:scale-105"
          >
            <div className=" bg-[#403c4c] 2xl:h-[132px] h-[50px] w-[50px] 2xl:w-[132px]  md:h-[100px] md:w-[100px] mt-[-50px] md:mt-[-72px] mb-[10px] border-semi-transparent-white border-[1px] 2xl:border-2 rounded-full flex justify-center items-center mt-">
              <img
                src={item.img}
                alt={item.title}
                className="2xl:w-16 md:w-12 w-8 2xl:h-16 md:h-12 h-8 "
              />
            </div>

            <h2 className="text-lg md:text-[24px] 2xl:text-4xl text-center font-semibold text-[#8cc540] mb-2 w-[80%] leading-[36px]">
              {item.title}
            </h2>
            <p className="text-center 2xl:text-2xl text-gray-300 text-[12px] md:text-[18px] ">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
