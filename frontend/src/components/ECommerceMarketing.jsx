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
            className={`content h-full -ml-[40px] ${
              !showDiv
                ? "w-full text-right flex flex-col items-end"
                : "2xl:-ml-[30rem]  w-1/3"
            }`}
          >
            <div>
            <h1 className="max-[730px]:text-[42px] max-[821px]:text-[62px] max-[1039px]:text-[84px]  min-[1040px]:text-[128px] pb-[12px] tracking-[0.02em] font-thunder m whitespace-nowrap text-[#8CC540] font-semibold">
              {!showDiv ? "E-COMMERCE" : "INFLUENCER MARKETING"}
            </h1>
            <p
              className={`${
                showDiv ? "text-white" : ""
              } text-[18px] font-medium text-[#232233]`}
            >
              {!showDiv
                ? `Transform your online store with Digigrove's tailored
              e-commerce solutions. We enhance customer experience, optimize
              sales funnels, and drive conversions through data-driven
              strategies.`
                : `Leverage our global network of influencers to build authentic connections with your target audience. Digigrove ensures impactful collaborations that drive visibility and growth.`}
            </p>
            </div>


            <div
              className={`pinner mt-[15%] max-[730px]:h-[120px] max-[821px]:h-[140px] max-[1039px]:h-[180px] min-[1040px]:h-[250px]
                max-[730px]:w-[120px] max-[821px]:w-[140px] max-[1039px]:w-[180px] min-[1040px]:w-[250px]
                ${
                prepAnims ? (showDiv ? "right" : "left") : ""
              }`}
              onScrollCapture={toggleDiv}
            />
          </div>
          <div className="inset-0 left-1/2 top-[15%] text-center p-4">
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
                <div className="flex relative  pr-10 pb-8">


          <div
            className={`content h-full  pt-20 pl-20`}
          >
            <div>
            <h1 className="leading-[124px] max-[730px]:text-[42px] max-[821px]:text-[62px] max-[1039px]:text-[84px]  min-[1040px]:text-[128px] pb-[12px] tracking-[0.02em] font-thunder m whitespace-nowrap text-[#8CC540] font-semibold
            max-[730px]:leading-[42px] max-[821px]:leading-[62px] max-[1039px]:leading-[84px]  min-[1040px]:leading-[124px]
            ">
              INFLUENCER <br /> MARKETING
            </h1>
            <p
              className={`text-white md:text-[18px] text-sm xl:text-2xl xl:pt-16 lg:pt-8 pt-4   font-medium `}
            >
              {`Leverage our global network of influencers to build authentic connections with your target audience. Digigrove ensures impactful collaborations that drive visibility and growth.`}
            </p>
            </div>

            <div
                            className={`pinner mt-[15%] max-[730px]:h-[120px] max-[821px]:h-[140px] max-[1039px]:h-[180px] min-[1040px]:h-[250px]
                              max-[730px]:w-[120px] max-[821px]:w-[140px] max-[1039px]:w-[180px] min-[1040px]:w-[250px]
                              right`}
              onScrollCapture={toggleDiv}
            />
          </div>
          <div className="inset-0 left-1/2 top-[15%] text-center p-4">
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
