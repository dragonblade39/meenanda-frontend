import React from "react";
import ServiceNavbar from "../components/services/Navbar";
import TopBar from "../components/About/TopBar";
import Services from "../components/Home/Services";
import Footer from "../components/About/Footer";

const ServiceScreen = () => {
  return (
    <>
      <TopBar />
      <ServiceNavbar />
      <Services />
      <Footer />
    </>
  );
};

export default ServiceScreen;
