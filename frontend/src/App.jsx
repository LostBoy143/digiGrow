/* eslint-disable no-unused-vars */
import React from "react";

import "./App.css";
// import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Accord from "./components/Accord";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Email from "./components/Email";
import ECommerceMarketing from "./components/ECommerceMarketing";
import Choose from "./components/Choose";

function App() {
  return (
    <>
      <Navbar />
      <Email />
      <Choose />
      {/* <HeroSection /> */}
      {/* <Button /> */}
      {/* <AboutUs />
      <Accord /> */}
      {/* <Services /> */}
      {/* <Social />
      <Contact />*/}
      {/* <ECommerceMarketing /> */}

      <AboutUs />
      <Accord />
      <Services />
      <Social />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
