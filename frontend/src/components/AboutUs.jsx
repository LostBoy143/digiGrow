import Img from "../assets/vackground-com-uAvq7gFQecc-unsplash 1.png";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="font-poppins relative overflow-hidden  -z-20 w-full p-4 sm:p-32 bg-[#0A291C]  leading-tight text-white"
    >
      <img
        className="w-full h-full aspect-auto object-cover absolute top-0 left-0 mix-blend-overlay"
        src={Img}
        alt="Background"
      />
      <div className="flex flex-col sm:flex-row relative gap-4 sm:gap-[48px]">
        <div className="relative z-10 sm:max-w-[40%] flex flex-col justify-center items-start">
          <h1 className="w-full flex justify-center font-poppins text-[#8cc540] text-[32px] sm:text-[82px] font-extrabold pb-4 sm:pb-8">
            About Us
          </h1>
          <h3 className="font-poppins text-center text-[16px] sm:text-[22px] sm:leading-[32px] font-small py-1 sm:py-4">
            DigiGrove is a company comprised of
            integrated teams of
            technicians/engineers, project
            leaders, account managers, writers and
            administrative support staff.
          </h3>
          <h3 className="font-poppins text-[16px] sm:text-[22px] sm:leading-[32px] mt-2 font-small px-3 sm:px-0">
            <span className="text-[#FCE100] ">
              Our Goal
            </span>{" "}
            : To Develop and sell high quality
            products.
          </h3>
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/src/assets/hero-about.png" // Replace with the correct path
            alt="Clipped Example"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
