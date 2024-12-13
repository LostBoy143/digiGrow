import { useState } from "react";

const Marketing = () => {
  const [prepAnims, setprepAnims] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const toggleDiv = () => {
    setprepAnims(true);
    setShowDiv(!showDiv);
  };
  return (
    <div className="relative w-full">
      <div
        id="marketing-page"
        className={`main-section mt-20 overflow-hidden ${
          showDiv ? "right" : "left"
        }`}
      >
        <div className="flex relative  pr-10">
          <div
            alt="marketing"
            onScrollCapture={toggleDiv}
            className={`main-image-grp min-h-[450px] min-w-[450px] lg:min-h-[650px] -ml-44  xl:ml-0 lg:min-w-[650px] sm:min-h-[550px] sm:min-w-[550px] xl:min-h-[700px] xl:min-w-[700px] aspect-auto object-fill ${
              prepAnims ? (showDiv ? "right" : "left") : ""
            }`}
          ></div>

          <div
            className={`content h-full md:ml-0 sm:-ml-14 -ml-32  xl:pt-20 md:pt-12 pt-8  ${
              !showDiv ? " w-full text-right" : "2xl:-ml-[30rem]  w-1/3"
            }`}
          >
            <h1 className="xl:text-[128px] lg:text-8xl sm:text-7xl text-6xl  tracking-[0.02em] font-thunder leading-1  whitespace-nowrap text-[#8CC540] font-semibold ">
              {!showDiv ? "E-COMMERCE" : "INFLUENCER MARKETING"}
            </h1>
            <p
              className={`${
                showDiv ? "text-white" : ""
              } md:text-[18px] text-sm xl:text-2xl xl:pt-16 lg:pt-8 pt-4   font-medium text-[#232233]`}
            >
              {!showDiv
                ? `Transform your online store with Digigrove's tailored
              e-commerce solutions. We enhance customer experience, optimize
              sales funnels, and drive conversions through data-driven
              strategies.`
                : `Leverage our global network of influencers to build authentic connections with your target audience. Digigrove ensures impactful collaborations that drive visibility and growth.`}
            </p>
          </div>
          <div className="inset-0 left-1/2 top-[15%] text-center p-4">
            <div
              className={`pinner absolute ${
                prepAnims ? (showDiv ? "right" : "left") : ""
              }`}
              onScrollCapture={toggleDiv}
            />
            <div
              className={`clip absolute ${
                prepAnims ? (showDiv ? "right" : "left") : ""
              }`}
              onScrollCapture={toggleDiv}
            />
          </div>
        </div>
      </div>

      <div id="marketing-page" className={`main-section overflow-hidden right`}>
        <div className="flex relative  pr-10">
          <div
            className={`content h-full   xl:pt-20 md:pt-12 pt-8 lg:pl-20 sm:pl-12 pl-6 }`}
          >
            <h1 className="xl:text-[128px] lg:text-8xl sm:text-7xl text-6xl  tracking-[0.02em] font-thunder leading-1  2xl:whitespace-nowrap text-[#8CC540] font-semibold">
              {"INFLUENCER MARKETING"}
            </h1>
            <p
              className={`text-white md:text-[18px] text-sm xl:text-2xl xl:pt-16 lg:pt-8 pt-4   font-medium `}
            >
              {`Leverage our global network of influencers to build authentic connections with your target audience. Digigrove ensures impactful collaborations that drive visibility and growth.`}
            </p>
          </div>
          <div className="inset-0 left-1/2 top-[15%] text-center  w-1/2">
            <div
              className={` pinner  absolute right`}
              onScrollCapture={toggleDiv}
            />
            <div
              className={`clip absolute right`}
              onScrollCapture={toggleDiv}
            />
          </div>

          <div
            alt="marketing"
            onScrollCapture={toggleDiv}
            className={`main-image-grp min-h-[450px] min-w-[450px] lg:min-h-[650px] -ml-36 lg:min-w-[650px] sm:min-h-[550px] sm:min-w-[550px] xl:min-h-[700px] xl:min-w-[700px] aspect-auto object-fill right`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
