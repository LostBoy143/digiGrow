/* eslint-disable no-unused-vars */
import React from "react";

const Vigilante = () => {
  const images = [
    { image: "src/assets/vigilante/logo-1.png" },
    { image: "src/assets/vigilante/logo-2.png" },
    { image: "src/assets/vigilante/logo-3.png" },
    { image: "src/assets/vigilante/logo-4.png" },
    { image: "src/assets/vigilante/logo-5.png" },
    { image: "src/assets/vigilante/logo-6.png" },
  ];

  return (
    <div id="vigilante">
      {/* <section-1> */}
      <img
        src="src/assets/vigilante/sec-1.png"
        alt="dc"
        className="xl:h-[110vh] 2xl:h-[1180px] w-full mt-[70px]"
      />
      {/* <section-2  > */}
      <div id="hero-2" className=" md:h-[100vh] w-full">
        <img
          src="src/assets/vigilante/Hero-2.png"
          alt="hero2"
          className=" h-full w-full bg-cover"
        />
      </div>
      {/* <section-3> */}
      <div
        id="hero-3"
        className="  w-full bg-black grid grid-cols-2 sm:grid-cols-3"
      >
        {images.map((item, idx) => {
          return (
            <img
              key={idx}
              src={item.image}
              alt="logo"
              className="h-full w-full"
            />
          );
        })}
      </div>
      {/* <section-4> */}
      <div
        id="hero-4"
        className="h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] 2xl:h-[1163px] w-full relative"
      >
        <img
          src="src/assets/vigilante/Group 12.png"
          alt="hero4"
          className="absolute top-0 left-0 w-full h-full  "
        />
      </div>
      {/* <section-5> */}
      <img
        src="src/assets/vigilante/sec-5.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />

      {/* <section-6> */}
      <img
        src="src/assets/vigilante/sec-6.png"
        alt="dc"
        className="2xl:h-[1736px] h-auto w-full"
      />
      {/* <section-7> */}
      <img
        src="src/assets/vigilante/sec-7.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />
      {/* <section-8> */}
      <img
        src="src/assets/vigilante/sec-8.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />
      {/* <section-9> */}
      <img
        src="src/assets/vigilante/sec-9.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />
      {/* <section-10> */}
      <img
        src="src/assets/vigilante/sec-10.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />
      {/* <section-11> */}
      <img
        src="src/assets/vigilante/sec-11.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />
      {/* <section-12> */}
      <img
        src="src/assets/vigilante/sec-12.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />
      {/* <section-13> */}
      <img
        src="src/assets/vigilante/sec-13.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />
      {/* <section-14> */}
      <img
        src="src/assets/vigilante/sec-14.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />
      {/* <section-15> */}
      <img
        src="src/assets/vigilante/sec-15.png"
        alt="dc"
        className="lg:h-[1200px] 2xl:h-[1490px] w-full"
      />
      {/* <section-16> */}
      <img
        src="src/assets/vigilante/sec-16.png"
        alt="dc"
        className="lg:h-[1150px] 2xl:h-[1440px] w-full"
      />
      {/* <section-17> */}
      <img
        src="src/assets/vigilante/sec-17.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />
      {/* <section-18> */}
      <img
        src="src/assets/vigilante/sec-18.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />
      {/* <section-19> */}
      <img
        src="src/assets/vigilante/sec-19.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />
      {/* <section-20> */}
      <img
        src="src/assets/vigilante/sec-20.png"
        alt="dc"
        className="xl:h-[100vh] w-full"
      />
    </div>
  );
};

export default Vigilante;
