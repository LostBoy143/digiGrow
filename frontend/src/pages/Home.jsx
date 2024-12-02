import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Accord from "../components/Accord";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Social from "../components/Social";
import Advertiser from "../components/Advertiser";
import TrafficSources from "../components/TrafficSources";
import { Element, scroller } from "react-scroll";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollToContact, setScrollToContact] = useState(false);
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const shouldScroll = queryParams.get('scrollToContact') === 'true';

    setScrollToContact(shouldScroll);

    if (shouldScroll) {
      setTimeout(() => {
        scroller.scrollTo('Contact', {
          duration: 1500,
          smooth: true,
          offset: -50,
        });
      }, 1000)


      // Remove the query parameter after scrolling
      queryParams.delete('scrollToContact');
      navigate({ search: queryParams.toString() }, { replace: true });
    }else {
      window.scrollTo(0, 0);
    }
  }, [location.search, navigate]);

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
