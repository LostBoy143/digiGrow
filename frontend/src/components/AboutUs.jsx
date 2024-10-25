import Img from "../assets/vackground-com-uAvq7gFQecc-unsplash 1.png";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="relative -z-20 w-full h-[780px] py-16 bg-[#0A291C]  leading-tight text-white"
    >
      <img
        className="w-full h-[780px] aspect-auto object-cover absolute top-0 left-0 mix-blend-overlay"
        src={Img}
        alt="Background"
      />
      <div className="flex relative">
        <div className="relative z-10 max-w-[40%] flex flex-col justify-center items-start">
          <h1 className="text-[#8cc540] text-8xl font-extrabold pb-8">
            About Us
          </h1>
          <h3 className="text-4xl font-medium py-4">
            DigiGrove is a company comprised of
            integrated teams of
            technicians/engineers, project
            leaders, account managers, writers and
            administrative support staff.
          </h3>
          <h3 className="text-4xl font-medium">
            <span className="text-[#FCE100]">
              Our Goal
            </span>{" "}
            : To Develop and sell high quality
            products.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
