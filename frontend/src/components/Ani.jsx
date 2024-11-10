/* eslint-disable no-unused-vars */
import React from "react";

const AnimatedComponent = () => {
  return (
    <div className="group relative w-[756px] h-[690px] flex flex-wrap overflow-hidden border border-black">
      {/* Top-left Block */}
      <div
        className="transition-all duration-300 w-1/2 h-1/2 group-hover:w-full"
        style={{
          backgroundImage:
            "url('assets/choosy/Frame32.png')", // Use the correct path
          backgroundSize: "756px 690px",
          backgroundPosition: "0 0",
        }}
      ></div>

      {/* Bottom-left Block */}
      <div
        className="transition-all duration-300 w-1/2 h-1/2 group-hover:h-3/5"
        style={{
          backgroundImage:
            "url('assets/choosy/Frame32.png')", // Use the correct path
          backgroundSize: "756px 690px",
          backgroundPosition: "0 100%",
        }}
      ></div>

      {/* Right Block */}
      <div
        className="transition-all duration-300 w-1/2 h-full group-hover:w-0 group-hover:opacity-0"
        style={{
          backgroundImage:
            "url('assets/choosy/Frame32.png')", // Use the correct path
          backgroundSize: "756px 690px",
          backgroundPosition: "100% 50%",
        }}
      ></div>
    </div>
  );
};

export default AnimatedComponent;
