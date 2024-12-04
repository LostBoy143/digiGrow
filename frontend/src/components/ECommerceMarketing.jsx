import { useState } from "react";

const Marketing = () => {
  const [prepAnims, setprepAnims] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const toggleDiv = () => {
    setprepAnims(true);
    setShowDiv(!showDiv);
  };
  return (
    <div className="relative w-full h-[720px]">
      <div
        id="marketing-page"
        className={`main-section mt-[72px] overflow-hidden ${
          showDiv ? "right" : "left"
        }`}
      >
        <div className="flex relative  pr-10">
          <div
            alt="marketing"
            onScrollCapture={toggleDiv}
            className={`main-image-grp aspect-auto object-fill ${
              prepAnims ? (showDiv ? "right" : "left") : ""
            }`}
          ></div>

          <div
            className={`content h-full  pt-20 ${
              !showDiv
                ? "-mr-[10rem] w-full text-right"
                : "2xl:-ml-[30rem]  w-1/3"
            }`}
          >
            <h1 className="xl:text-8xl text-6xl font-thunder 2xl:leading-4 md:tracking-wider tracking-wide 2xl:tracking-widest whitespace-nowrap text-[#8CC540] font-semibold mb-6">
              {!showDiv ? "E-COMMERCE" : "INFLUENCER MARKETING"}
            </h1>
            <p
              className={`${
                showDiv ? "text-white" : ""
              } text-xl  font-medium text-[#232233]`}
            >
              {!showDiv
                ? `Transform your online store with Digigrove's tailored
              e-commerce solutions. We enhance customer experience, optimize
              sales funnels, and drive conversions through data-driven
              strategies.`
                : `Leverage our global network of influencers to build authentic connections with your target audience. Digigrove ensures impactful collaborations that drive visibility and growth.`}
            </p>
          </div>
          <div className="inset-0 left-1/2 top-[15%] text-center p-4 w-1/2">
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

      <div
        id="marketing-page"
        className={`main-section overflow-hidden right`}
      >
                <div className="flex relative  pr-10">
          <div
            alt="marketing"
            onScrollCapture={toggleDiv}
            className={`main-image-grp aspect-auto object-fill right`}
          ></div>

          <div
            className={`content h-full  pt-20 ${
                "2xl:-ml-[30rem]  w-1/3"
            }`}
          >
            <h1 className="xl:text-8xl text-6xl font-thunder 2xl:leading-4 md:tracking-wider tracking-wide 2xl:tracking-widest whitespace-nowrap text-[#8CC540] font-semibold mb-6">
              {"INFLUENCER MARKETING"}
            </h1>
            <p
              className={`${
               "text-white"
              } text-xl  font-medium text-[#232233]`}
            >
              {false
                ? `Transform your online store with Digigrove's tailored
              e-commerce solutions. We enhance customer experience, optimize
              sales funnels, and drive conversions through data-driven
              strategies.`
                : `Leverage our global network of influencers to build authentic connections with your target audience. Digigrove ensures impactful collaborations that drive visibility and growth.`}
            </p>
          </div>
          <div className="inset-0 left-1/2 top-[15%] text-center p-4 w-1/2">
            <div
              className={`pinner absolute right`}
              onScrollCapture={toggleDiv}
            />
            <div
              className={`clip absolute right`}
              onScrollCapture={toggleDiv}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
