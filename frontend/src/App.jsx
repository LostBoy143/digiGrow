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
import Marketing from "./components/ECommerceMarketing";
import Affiliate from "./components/Affiliate";

function App() {
  return (
    <>
      <Navbar />
      {/* <Marketing />
       <HeroSection />
       <Button /> 
       <AboutUs />
       <Accord />
       <Services />
       <Contact /> */}
      <Affiliate />
      <Footer />
    </>
  );
}

export default App;
