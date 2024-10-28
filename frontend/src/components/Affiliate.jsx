const Affiliate = () => {
  return (
    <div className="mt-[10%] w-full h-full">
      <div className="text-center px-20 mx-40">
        <h1 className="xl:text-9xl whitespace-nowrap font-thunder leading-4 tracking-widest text-[#8CC540] font-bold mb-4">
          AFFILIATE MARKETING
        </h1>
        <p className="text-2xl font-medium text-[#232233] mx-20 ">
          We partner with third-party publishers to promote your products and
          services, ensuring you only pay for actual sales or leads. Our
          advanced analytics and high-quality affiliates maximize your reach and
          ROI, with tailored strategies and transparent reporting.
        </p>
      </div>
      <div
        className="h-[125vh]  w-full mt-16 relative -z-40 bg-[#232233]" // Add mix-blend-mode here
        id="services-container"
      >
        <div className="relative w-full h-full">
          <img
            src="/src/assets/crumpled-black.png" // Replace with the correct path
            alt="Styled Background"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-90 mix-blend-darken"
          />
          <div
            id="serve"
            className="w-full stroke-white stroke-1 py-40   h-[130vh] top-0 flex gap-8 flex-wrap justify-evenly px-12"
          >
            <div className="text-white flex flex-col relative z-20 items-center gap-4 md:h-[470px] md:w-[434px] h-[413px] w-[374px]  bg-opacity-20  bg-white/10 border border-white/20 rounded-[35px] backdrop-blur-[30px]">
              <img
                src="src/assets/Group 36.png"
                alt="ellipses"
                className="absolute z-10"
              ></img>
              <div className="text-[#8CC540] p-4  md:h-[90px] md:w-2/3 z-30 h-[60px] w-1/2 absolute -top-10 shadow-[0px_5px_5px_rgba(0,0,0,0.35)] bg-opacity-20 drop-shadow-xl bg-white/10 border border-white/20 rounded-3xl backdrop-blur-[30px]">
                <h1 className="text-center text-5xl  font-bold">Publishers</h1>
              </div>
              <div className="text-center pt-16 px-10 flex flex-col gap-10 font-sans justify-center items-center">
                <h3 className=" font-bold text-3xl">
                  We assist you in maximising profits!
                </h3>
                <p className="font-medium text-xl ">
                  Gain substantial commissions for any leads, installations,
                  purchases, or other transactions made by customers you brought
                  to Digigrove via the company’s website, blog posts, articles,
                  banner ads, emails, landing pages, and social media channels.
                </p>
              </div>
            </div>
            <div className="text-white flex flex-col z-20 items-center gap-4  md:h-[470px] md:w-[434px] h-[413px] w-[374px] bg-opacity-20  bg-white/10 border border-white/20 rounded-[35px] backdrop-blur-[30px]">
              <img
                src="src/assets/Group 36.png"
                alt="ellipses"
                className="absolute z-10"
              ></img>
              <div className="text-[#8CC540] p-4 md:h-[90px] md:w-2/3 z-30 h-[60px] w-1/2  absolute -top-10 shadow-[0px_5px_5px_rgba(0,0,0,0.35)] bg-opacity-20 drop-shadow-xl bg-white/10 border border-white/20 rounded-3xl backdrop-blur-[30px]">
                <h1 className="text-center text-5xl  font-bold">Advertisers</h1>
              </div>
              <div className="text-center pt-16 px-10 flex flex-col gap-10 font-sans justify-center items-center">
                <h3 className=" font-bold text-3xl">
                  Increase the global reach of your business!
                </h3>
                <p className="font-medium text-xl ">
                  With our cutting-edge platform, Digigrove provide unparalleled
                  digital marketing services to facilitate connections between
                  brands and audiences that generate noteworthy results. We
                  specialize in both direct response and branding strategies.
                </p>
              </div>
            </div>
          </div>
          <div
            id="button"
            className=" group absolute bottom-[10%] z-40 m-auto left-[42%] flex mt-40  h-12 duration-1000 w-72   "
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
    </div>
  );
};

export default Affiliate;
