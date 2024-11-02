/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
        <Route
          path="/SearchArbitrage"
          element={<SearchArbitragePage />}
        />
        <Route
          path="/Brand"
          element={<BrandPage />}
        />
        <Route
          path="/EmailLead"
          element={<EmailLeadPage />}
        />
        <Route
          path="/Ecommerce"
          element={<EcommercePage />}
        />
        <Route
          path="/AffiliateMarketing"
          element={<AffiliateMarketingPage />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
