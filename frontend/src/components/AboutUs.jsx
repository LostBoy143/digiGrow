const AboutUs = () => {
  return (
    <div
      id="about"
      className="font-poppins relative overflow-hidden  -z-20 w-full p-10 xl:p-32 bg-[#0A291C]  leading-tight text-white"
    >
      <img
        className="w-full h-full aspect-auto object-cover absolute top-0 left-0 mix-blend-overlay"
        src="/assets/vackground-com-uAvq7gFQecc-unsplash 1.png"
        alt="Background"
      />
      <div className="flex flex-col xl:flex-row relative gap-4 xl:gap-[48px]">
        <div className="relative z-10 xl:max-w-[40%] flex flex-col justify-center items-center xl:items-start xl:mb-[120px]">
          <h1 className="w-full flex justify-center xl:justify-start font-poppins text-[#8cc540] text-4xl xl:text-7xl font-extrabold pb-4 xl:pb-12">
            About Us
          </h1>
          <h3 className="font-poppins text-center xl:text-left text-[14px] xl:text-[22px]  xl:leading-[32px]  font-xlall py-1 xl:py-4">
            DigiGrove is a company comprised of integrated teams of
            technicians/engineers, project leaders, account managers, writers
            and administrative support staff.
          </h3>
          <h3 className="font-poppins text-[16px] xl:text-[22px] xl:leading-[32px]   mt-2 font-xlall px-3 xl:px-0">
            <span className="text-[#FCE100] ">Our Goal</span> : To Develop and
            sell high quality products.
          </h3>
        </div>
        <div className="relative 2xl:p-10 xl:w-full xl:min-w-[700px] min-w-[400px] pr-10 w-3/4 m-auto flex overflow-hidden">
          <img
            src="/assets/hero-about.png" // Replace with the correct path
            alt="Clipped Example"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
