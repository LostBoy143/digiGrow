/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Email from "./components/Email";
import ECommerceMarketing from "./components/ECommerceMarketing";
import Choose from "./components/Choose";
import AnimatedComponent from "./components/Ani";
import Vigilante from "./pages/Vigilante";
import Home from "./pages/Home";
import SearchArbitragePage from "./pages/SearchArbitragePage";
import BrandPage from "./pages/BrandPage";
import EmailLeadPage from "./pages/EmailLeadPage";
import EcommercePage from "./pages/EcommercePage";
import AffiliateMarketingPage from "./pages/AffiliateMarketingPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searcharbitrage" element={<SearchArbitragePage />} />
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/email-lead" element={<EmailLeadPage />} />
        <Route path="/ecommerce" element={<EcommercePage />} />
        <Route
          path="/affiliate-marketing"
          element={<AffiliateMarketingPage />}
        />
        <Route path="/project" element={<Vigilante />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
