import React from "react";

import "./App.css";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Accord from "./components/Accord";
import Form from "./components/Form";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Accord />
      <Form />
      <Footer />
    </>
  );
}

export default App;
