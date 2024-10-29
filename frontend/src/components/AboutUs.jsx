import Img from "../assets/vackground-com-uAvq7gFQecc-unsplash 1.png";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="font-poppins relative overflow-hidden  -z-20 w-full p-32 bg-[#0A291C]  leading-tight text-white"
    >
      <img
        className="w-full h-full aspect-auto object-cover absolute top-0 left-0 mix-blend-overlay"
        src={Img}
        alt="Background"
      />
      <div className="flex relative gap-[48px]">
        <div className="relative z-10 max-w-[40%] flex flex-col justify-center items-start">
          <h1 className="font-poppins text-[#8cc540] text-[82px] font-extrabold pb-8">
            About Us
          </h1>
          <h3 className="font-poppins text-[22px] leading-[32px] font-small py-4">
            DigiGrove is a company comprised of integrated teams of
            technicians/engineers, project leaders, account managers, writers
            and administrative support staff.
          </h3>
          <h3 className="font-poppins text-[22px] leading-[32px] font-small">
            <span className="text-[#FCE100]">Our Goal</span> : To Develop and
            sell high quality products.
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
