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
        <div className="flex relative">
          <div
            alt="marketing"
            onClick={toggleDiv}
            className={`main-image-grp aspect-auto object-fill ${
              prepAnims ? (showDiv ? "right" : "left") : ""
            }`}
          ></div>

          <div
            className={`content  pt-10 ${
              !showDiv ? "-mr-[40rem] w-2/3 text-right" : "-ml-[40rem] w-1/3"
            }`}
          >
            <h1 className="xl:text-9xl text-6xl font-thunder leading-4 tracking-widest text-[#8CC540] font-bold mb-4">
              {!showDiv ? "E-COMMERCE" : "INFLUENCER MARKETING"}
            </h1>
            <p
              className={`${
                showDiv ? "text-white" : "pl-64"
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
              onClick={toggleDiv}
            />
            <div
              className={`clip absolute ${
                prepAnims ? (showDiv ? "right" : "left") : ""
              }`}
              onClick={toggleDiv}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
