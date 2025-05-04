/* eslint-disable react/jsx-no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Singup from "./landing_page/signup/Singnup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer"
import NotFound from './landing_page/NotFound'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/signup" element={<Singup/>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/products" element={<ProductPage/>} />
      <Route path="/support" element={<SupportPage/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);
