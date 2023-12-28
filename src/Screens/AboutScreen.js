import React from "react";
import TopBar from "../components/About/TopBar";
import Navbar1 from "../components/About/Navbar";

import TeamStart from "../components/About/TeamStart";
import Footer from "../components/About/Footer";
import NavbarHeader from "../components/Home/Navbar";
import About from "../components/Home/About";

function AboutScreen() {
  return (
    <div>
      <TopBar />
      <Navbar1 />
      <About />
      <TeamStart />
      <Footer />
    </div>
  );
}

export default AboutScreen;
