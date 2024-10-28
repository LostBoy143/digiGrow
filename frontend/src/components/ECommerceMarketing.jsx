import { useState } from "react";

const Marketing = () => {
  const [showDiv, setShowDiv] = useState(false);
  const toggleDiv = () => setShowDiv(!showDiv);
  return (
    <div className="relative">
      {!showDiv && (
        <div className="relative w-full h-full">
          <img
            src="src/assets/Group 34.png"
            alt="marketing"
            onClick={toggleDiv}
            className=" w-screen h-[65vh] md:h-[118dvh] aspect-auto object-fill"
          ></img>
          <div className="absolute inset-0 left-1/2 top-[15%]   text-center p-4 w-1/2">
            <h1 className="xl:text-9xl whitespace-nowrap font-thunder leading-4 tracking-widest text-[#8CC540] font-bold mb-4">
              E-COMMERCE
            </h1>
            <p className="text-xl font-medium text-[#232233] mx-40 text-right">
              Transform your online store with Digigrove&apos;s tailored
              e-commerce solutions. We enhance customer experience, optimize
              sales funnels, and drive conversions through data-driven
              strategies.
            </p>
          </div>
        </div>
      )}
      {showDiv && (
        <div className="bg-[#232233] flex justify-end relative">
          <img
            src="src/assets/Group 35.png"
            alt="influencer marketing"
            onClick={toggleDiv}
            className="  w-2/3 h-[65vh] md:h-[118dvh] aspect-auto object-fill"
          ></img>
          <div className="absolute inset-0 right-1/2 top-[15%] mx-40 text-left p-4 w-1/3">
            <h1 className="xl:text-9xl  font-thunder leading-4 tracking-widest text-[#8CC540] font-bold mb-4">
              INFLUENCER MARKETING
            </h1>
            <p className="text-xl font-medium text-white  ">
              Leverage our global network of influencers to build authentic
              connections with your target audience. Digigrove ensures impactful
              collaborations that drive visibility and growth.
            </p>
            <div
              id="button"
              className=" group  flex mt-40  h-12 duration-1000 w-72   "
              type="submit"
            >
              <button
                className=" group-hover:text-black w-60 h-full text-xl bg-transparent border-t-[1px] border-b-[1px] border-l-[1px] border-white text-white font-semibold rounded-tl-full rounded-bl-full  transition-all duration-500 group-hover:bg-[#8cc540] group-hover:border-none   group-hover:rounded-full "
                id="btn1"
              >
                Connect With Us!
              </button>
              <button
                className="w-12 h-full  bg-transparent  text-white border-t-[1px] border-r-[1px] border-b-[1px] border-white font-bold rounded-tr-full rounded-br-full flex justify-start items-center  transition-all duration-500 group-hover:bg-[#8cc540] group-hover:border-none   group-hover:rounded-full  "
                id="btn2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-6 transition-all duration-300 group-hover:translate-x-3 group-hover:text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketing;
