import React from "react";

import TopHeader from "../components/Home/TopHeader.js";
import NavCarousel from "../components/Home/NavCarousel";
import About from "../components/Home/About";
import Feature from "../components/Home/Feature.js";
import Services from "../components/Home/Services.js";
import Quote from "../components/Home/Quote.js";
import Footer from "../components/About/Footer.js";
import TopBar from "../components/About/TopBar.js";

const HomeScreen = () => {
  return (
    <div>
      <TopBar />
      <NavCarousel />
      <About />
      <Feature />
      <Services />
      <Quote />
      <Footer />
    </div>
  );
};

export default HomeScreen;
