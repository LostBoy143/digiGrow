const Affiliate = () => {
  return (
    <div className="mt-[10%] w-full py-10">
      <div className="text-center lg:px-20 lg:mx-40 sm:mt-10 md:mt-5">
        <h1 className="xl:text-9xl md:text-6xl text-5xl whitespace-nowrap  font-thunder leading-4 tracking-widest text-[#8CC540] font-bold mb-4">
          AFFILIATE MARKETING
        </h1>
        <p className="md:text-2xl text-xl font-medium text-[#232233] md:mx-20 mx-10">
          We partner with third-party publishers to promote your products and
          services, ensuring you only pay for actual sales or leads. Our
          advanced analytics and high-quality affiliates maximize your reach and
          ROI, with tailored strategies and transparent reporting.
        </p>
      </div>
      <div
        className="w-full mt-16 py-28 -z-40 bg-[url('/assets/crumpled-black-shade.png')] bg-cover" // Add mix-blend-mode here
        id="services-container"
      >
        <div className="relative">
          <img
            src="/assets/file(3) 1.png"
            alt="paw"
            className="overflow-hidden absolute -top-80 md:-top-[440px] lg:-left-80 -left-96 xl:-left-[374px]"
            height={800}
            width={800}
          />
          <img
            src="/assets/file(4) 1.png"
            alt="paw"
            className="overflow-hidden absolute -bottom-80 md:-bottom-[440px] -right-80 md:-right-[314px]"
            height={720}
            width={720}
          />
          <div
            id="serve"
            className="w-full stroke-white stroke-1 top-0 flex gap-16 flex-wrap justify-evenly px-12"
          >
            <div className="relative text-white flex flex-col items-center gap-4 md:h-[520px] md:w-[600px] h-[443px] w-[404px]  bg-white/10 border border-white/20 rounded-[35px]">
              <img
                src="/assets/Group 36.png"
                alt="ellipses"
                className="absolute z-10"
              ></img>

              <div className="text-[#8CC540] md:p-4 p-3 -mt-8 md:-mt-10 md:h-[90px] md:w-2/3 z-30 h-[60px] w-1/2 shadow-[0px_5px_5px_rgba(0,0,0,0.35)]  drop-shadow-xl bg-white/10 border border-white/20 rounded-3xl backdrop-blur-3xl">
                <h1 className="text-center text-2xl md:text-4xl md:pt-1.5 font-bold">
                  Publishers
                </h1>
              </div>
              <div className="text-center pt-8 px-5 md:px-10 flex flex-col md:gap-10 gap-5 font-sans justify-center items-center space-y-10">
                <h3 className=" font-bold text-2xl md:text-3xl md:px-14 px-8">
                  We assist you in maximising profits!
                </h3>
                <p className="font-normal text-base md:text-lg">
                  Gain substantial commissions for any leads, installations,
                  purchases, or other transactions made by customers you brought
                  to Digigrove via the company&apos;s website, blog posts,
                  articles, banner ads, emails, landing pages, and social media
                  channels.
                </p>
              </div>
            </div>
            <div className="text-white relative flex flex-col z-20 items-center gap-4  md:h-[520px] md:w-[600px] h-[443px] w-[404px]  bg-white/10 border border-white/20 rounded-[35px] ">
              <img
                src="/assets/Group 36.png"
                alt="ellipses"
                className="absolute z-10"
              ></img>
              <div className="text-[#8CC540] md:p-4 p-3 -mt-8 md:-mt-10 md:h-[90px] md:w-2/3 z-30 h-[60px] w-1/2 shadow-[0px_5px_5px_rgba(0,0,0,0.35)]  drop-shadow-xl bg-white/10 border border-white/20 rounded-3xl backdrop-blur-3xl">
                <h1 className="text-center text-2xl md:text-4xl md:pt-1.5 font-bold">
                  Advertisers
                </h1>
              </div>
              <div className="text-center pt-8 px-5 md:px-10 flex flex-col md:gap-10 gap-5 font-sans justify-center items-center space-y-10">
                <h3 className=" font-bold text-2xl md:text-3xl md:px-14 px-8">
                  Increase the global reach of your business!
                </h3>
                <p className="font-normal text-base md:text-lg">
                  With our cutting-edge platform, Digigrove provide unparalleled
                  digital marketing services to facilitate connections between
                  brands and audiences that generate noteworthy results. We
                  specialize in both direct response and branding strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="button"
          className=" group  mx-auto z-40 flex mt-20  h-12 duration-1000 w-72   "
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
  );
};

export default Affiliate;
