/* eslint-disable no-unused-vars */
import React from "react";

const TrafficSources = () => {
    return (
        <div className="bg-[url('/assets/traffic-bg.png')] bg-auto bg-center bg-cover bg-no-repeat">
            <div className="flex flex-col items-center relative">
                <div className="font-poppins text-[28px] sm:text-[64px] font-bold py-[28px]">Top Traffic Sources</div>

                <div className="flex flex-row flex-wrap gap-x-[44px] gap-y-[64px] justify-center pb-[58px] z-10 px-[24px]">
                    <div>
                        <img className="h-[180px]" src="/assets/Media Buying Card (1).png" alt="" />
                        <img className="mt-[32px] h-[180px]" src="/assets/DigiGrove Website.png" alt="" />
                    </div>

                    <div className="">
                        <img className="h-[180px]" src="/assets/DigiGrove Website Database.png" alt="" />
                        <img className="mt-[32px] h-[180px]" src="/assets/Media Buying Card (2).png" alt="" />
                    </div>

                </div>

                <img className="absolute h-[464px] right-0 top-0" src="/assets/DigiGrove Website Image.png" alt="" />
                <img className="absolute h-[464px] bottom-0 left-0 rotate-180" src="/assets/DigiGrove Website Image.png" alt="" />
            </div>
        </div>
    );
 }

export default TrafficSources;
