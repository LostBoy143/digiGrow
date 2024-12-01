import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Accord from "../components/Accord";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Social from "../components/Social";
import Advertiser from "../components/Advertiser";
import TrafficSources from "../components/TrafficSources";
import { Element } from "react-scroll";
import { useEffect } from "react";



const Home = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <Element name="Home">
        <HeroSection />
      </Element>

      <Element name="AboutUs">
        <AboutUs  />
      </Element>


      <Element name="Services">
        <Accord />
      </Element>
      <Services />
      <Social />
      <Advertiser />
      <TrafficSources />

      <Element name="Contact">
        <Contact  />
      </Element>
    </>
  );
};

export default Home;
