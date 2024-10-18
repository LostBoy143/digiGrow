/* eslint-disable no-unused-vars */
import React from "react";

import "./App.css";
// import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Accord from "./components/Accord";
import Form from "./components/Form";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <Button /> */}
      <Services />
      <AboutUs />
      <Accord />
      <Form />
      <Footer />
    </>
  );
}

export default App;
