import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DesignBrandStrategy = () => {
  const [rotate, setRotate] = useState("");
  const [slide, setSlide] = useState("md:translate-x-96");
  const [showCardOption, setShowCardOption] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => navigate("/project");

  const handleHover = () => {
    setRotate("md:rotate-60");
    setSlide("md:translate-x-0");
  };
  const handleHoverLeave = () => {
    setRotate("");
    setSlide("md:translate-x-96");
  };
  return (
    <div>
      <div className="w-full h-screen bg-[#232233] flex justify-between">
        <div className="w-1/2 md:mt-44 mt-32 px-8 md:px-20">
          <h1 className="font-thunder text-5xl md:text-9xl text-[#8cc540]">
            DESIGN &<br /> BRAND STRATEGY
          </h1>
          <svg
            width="959"
            height="45"
            viewBox="0 0 959 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block"
          >
            <path
              d="M942.219 24.2188V1.96875H958.625V43.9688H940.188L917.625 18.3125V43.9688H901.25V1.96875H923.781L942.219 24.2188Z"
              fill="#FBE100"
            />
            <path
              d="M867.688 0.9375C883.5 0.9375 896.344 5.5625 896.344 21.4375V24.5C896.406 40.375 883.469 44.9688 867.688 45C851.875 44.9688 838.938 40.375 839 24.5V21.4375C838.938 5.53125 851.875 0.96875 867.688 0.9375ZM879.969 23.4688V22.4375C880.063 15.5938 874.375 14.3438 867.688 14.25C860.969 14.3438 855.281 15.5938 855.375 22.4375V23.4688C855.281 30.3438 860.969 31.5938 867.688 31.6875C874.375 31.5938 880.063 30.3438 879.969 23.4688Z"
              fill="#FBE100"
            />
            <path
              d="M817.812 1.96875H834.188V43.9688H817.812V1.96875Z"
              fill="#FBE100"
            />
            <path
              d="M773.594 15.8125C773.594 17.6562 778.688 17.9062 785.281 18.2188C797 18.8125 813.469 19.625 813.438 30.1562C813.438 42.1562 799.688 45 784.938 45C770.219 44.9688 758 43.1875 756.438 30.1562H773.594C775.469 33.4062 779.813 34.25 784.938 34.25C790.031 34.25 796.281 33.4062 796.281 30.1562C796.281 28.3125 791.188 28.0312 784.594 27.7188C772.875 27.125 756.406 26.3125 756.438 15.8125C756.438 3.8125 770.188 0.9375 784.938 0.9375C799.656 1.03125 811.875 2.6875 813.438 15.8125H796.281C794.406 12.5 790.063 11.7188 784.938 11.7188C779.844 11.7188 773.594 12.4688 773.594 15.8125Z"
              fill="#FBE100"
            />
            <path
              d="M735.625 1.96875H752V43.9688H735.625V1.96875Z"
              fill="#FBE100"
            />
            <path
              d="M690.312 2.03125L703.125 31.1875L715.938 2.03125H734.375L712.844 44.0312H693.375L671.875 2.03125H690.312Z"
              fill="#FBE100"
            />
            <path
              d="M583 1.99992H623.469C632.125 1.90617 639.469 9.18742 639.344 17.8749C639.344 21.0312 638.5 23.9062 636.812 26.4687C635.156 28.9999 632.938 30.9374 630.188 32.2187L639.344 43.9999H621.906L614 33.7499H599.375V43.9999H583V1.99992ZM619.344 14.2812H599.375V21.4374H619.344C620.344 21.4374 621.188 21.0937 621.875 20.4062C622.594 19.6874 622.938 18.8437 622.938 17.8749C622.938 15.8749 621.344 14.2812 619.344 14.2812Z"
              fill="#FBE100"
            />
            <path
              d="M559.219 23.5V1.96875H575.625V24.5312C575.688 40.4062 562.688 44.9688 546.938 45C531.188 44.9688 518.188 40.4062 518.25 24.5312V1.96875H534.625V23.5C534.563 30.4062 540.219 31.5938 546.938 31.6875C553.625 31.5938 559.313 30.4062 559.219 23.5Z"
              fill="#FBE100"
            />
            <path
              d="M484.938 0.9375C500.75 0.9375 513.594 5.5625 513.594 21.4375V24.5C513.656 40.375 500.719 44.9688 484.938 45C469.125 44.9688 456.188 40.375 456.25 24.5V21.4375C456.188 5.53125 469.125 0.96875 484.938 0.9375ZM497.219 23.4688V22.4375C497.313 15.5938 491.625 14.3438 484.938 14.25C478.219 14.3438 472.531 15.5938 472.625 22.4375V23.4688C472.531 30.3438 478.219 31.5938 484.938 31.6875C491.625 31.5938 497.313 30.3438 497.219 23.4688Z"
              fill="#FBE100"
            />
            <path
              d="M417.281 2.03125L429.562 17.0938L441.875 2.03125H461.312L437.75 29.6875V44.0312H421.375V29.6875L397.812 2.03125H417.281Z"
              fill="#FBE100"
            />
            <path
              d="M316.125 44.0312V2.03125H365.281V12.7812H332.5V18.1562H365.281V27.875H332.5V33.25H365.281V44.0312H316.125Z"
              fill="#FBE100"
            />
            <path
              d="M281.844 15.3438H254.188V2.03125H308.469V15.3438L279.812 30.6875H308.469V44.0312H254.188V30.6875L281.844 15.3438Z"
              fill="#FBE100"
            />
            <path
              d="M231 1.96875H247.375V43.9688H231V1.96875Z"
              fill="#FBE100"
            />
            <path
              d="M206.031 44.0312H189.656V15.3438H170.188V2.03125H225.5V15.3438H206.031V44.0312Z"
              fill="#FBE100"
            />
            <path
              d="M148.688 1.96875H165.062V43.9688H148.688V1.96875Z"
              fill="#FBE100"
            />
            <path
              d="M112.625 28.0938V20.9062H141.156V45H132.969L132.156 38.4688C127.281 43.2812 119.875 45 112.75 45C96.9377 44.9375 84.0002 40.375 84.0627 24.5V21.4375C84.0002 5.53125 96.9377 0.96875 112.75 0.9375C127.313 0.9375 139.313 4.90625 141.156 17.8438H123.75C122.719 16.4375 121.219 15.5 119.281 15C117.344 14.5 115.156 14.25 112.75 14.25C106.031 14.3438 100.344 15.5938 100.438 22.4375V23.4688C100.344 30.375 106.031 31.5625 112.75 31.6562C119.219 31.6562 123.344 31.2812 125.813 28.0938H112.625Z"
              fill="#FBE100"
            />
            <path
              d="M62.875 1.96875H79.25V43.9688H62.875V1.96875Z"
              fill="#FBE100"
            />
            <path
              d="M41.5938 23.0312C41.5938 18.7812 39.1875 15.3437 34.9375 15.3437H17V30.7187H34.9375C39.1875 30.7187 41.5938 27.2499 41.5938 23.0312ZM0.625 2.03116H38C49.5312 1.87491 58.0938 11.5624 58 23.0312C58.0938 34.4374 49.5312 44.1874 38 44.0312H0.625V2.03116Z"
              fill="#FBE100"
            />
          </svg>
          <p className="font-medium text-2xl pt-4 md:pt-8 text-white">
            At Digigrove, we are dedicated to create innovative <br /> design
            solutions that integrate seamlessly with <br /> your business needs,
            inspiring growth.
          </p>
        </div>
        <div className="overflow-hidden ">
          <img
            src="src/assets/Group 31.png"
            alt="pic"
            width={1500}
            height={1500}
            className={`${rotate} transform transition-transform duration-500 ml-44 pl-40 -mt-10`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverLeave}
          />
        </div>
      </div>
      <div className="flex">
        <div className="-mt-64">
          <img
            src="src/assets/simon-lee-ynmPY1MLwMs-unsplash 1.png"
            alt="hand"
            height={1300}
            width={975}
          />
        </div>
        <div className="-ml-52 my-12">
          <div className="overflow-hidden">
            <h2
              className={`${slide}  font-monument font-extrabold text-right mr-12 capitalize text-6xl transition-transform ease-in-out transform  duration-700 tracking-tight text-[#8CC540]`}
            >
              DESIGN THAT SPEAKS. <br />
              STRATEGY THAT DELIVERS
            </h2>
          </div>
          <div className="px-40 py-20 ml-32">
            <div className="flex flex-col my-1 gap-2 justify-start items-end font-poppins">
              <img
                src="src/assets/Ellipse 5.png"
                alt="elipse"
                className="-z-10 -mb-14 -mr-6"
                height={75}
                width={75}
              />
              <h3 className="font-bold text-2xl">Understand</h3>
              <p className="text-[#232233] w-3/4 font-medium text-right text-xl">
                We dive deep into your brand, market, and audience to grasp your
                unique needs and goals.
              </p>
            </div>
            <div className="flex flex-col my-1 gap-4 justify-start items-start font-poppins">
              <img
                src="src/assets/Ellipse 5.png"
                alt="elipse"
                className="-z-10 -mb-14 -ml-6"
                height={75}
                width={75}
              />
              <h3 className="font-bold text-2xl">Plan</h3>
              <p className="text-[#232233] w-3/4 font-medium text-left text-xl">
                Strategize the perfect blend of creative design and impactful
                messaging to shape your brand&apos;s identity.
              </p>
            </div>
            <div className="flex flex-col my-1 gap-4 justify-start items-end font-poppins">
              <img
                src="src/assets/Ellipse 5.png"
                alt="elipse"
                className="-z-10 -mb-14 -mr-6"
                height={75}
                width={75}
              />
              <h3 className="font-bold text-2xl">Execute</h3>
              <p className="text-[#232233] w-3/4 font-medium text-right text-xl">
                Turn strategy into reality with tailored design solutions,
                delivering visually stunning and cohesive brand elements.
              </p>
            </div>
            <div className="flex flex-col my-1 gap-4 justify-start items-start font-poppins">
              <img
                src="src/assets/Ellipse 5.png"
                alt="elipse"
                className="-z-10 -mb-14 -ml-6"
                height={75}
                width={75}
              />
              <h3 className="font-bold text-2xl">Result</h3>
              <p className="text-[#232233] w-3/4 font-medium text-left text-xl">
                Measure success through improved brand visibility, customer
                loyalty, and business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-[#232233] p-16">
        <h1 className="text-center font-poppins font-extrabold text-[#8cc540] text-7xl">
          Our Work
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-12 my-10">
          <div
            className="relative group rounded-2xl overflow-hidden bg-[#232233] shadow-lg"
            onMouseEnter={() => {
              setShowCardOption(true);
              handleHover();
            }}
            onMouseLeave={() => {
              setShowCardOption(false);
              handleHoverLeave();
            }}
          >
            <img
              src="src/assets/Vigilante Tape Mockup.png"
              alt="mockup"
              height={700}
              width={650}
              className="rounded-3xl"
            />

            <div
              className={` absolute inset-0  flex flex-col justify-between ${
                showCardOption ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300 ease-in-out`}
            >
              <div className="flex justify-between items-center p-5  bg-gradient-to-b from-[#232233] to-transparent/5">
                <h3 className="font-poppins font-semibold text-white text-5xl">
                  Vigilante
                </h3>
                <svg
                  width="48"
                  height="42"
                  viewBox="0 0 48 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.5285 1.37913L47.1873 19.0379C48.2709 20.1216 48.2709 21.8785 47.1873 22.9621L29.5285 40.6209C28.4448 41.7046 26.6879 41.7046 25.6043 40.6209C24.5207 39.5373 24.5207 37.7804 25.6043 36.6967L38.5262 23.7748L0.14258 23.7748L0.14258 18.2252L38.5262 18.2252L25.6043 5.30331C24.5207 4.21968 24.5207 2.46276 25.6043 1.37913C26.6879 0.295496 28.4448 0.295496 29.5285 1.37913Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="flex justify-center bg-gradient-to-t py-4 from-[#232233] to-transparent/5">
                <button
                  onClick={handleClick}
                  className=" text-white font-poppins text-2xl font-medium px-8 py-4 rounded-full border border-white  transition "
                >
                  View Project
                </button>
              </div>
            </div>
          </div>

          <div
            className=" rounded-3xl w-[250px] md:w-[650px] overflow-hidden"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverLeave}
          >
            <img
              src="src/assets/Social Media Posts Mockups 1.png"
              alt="tour"
              height={700}
              width={650}
              className="transition-transform duration-500 aspect-auto  ease-in-out hover:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignBrandStrategy;
