import React from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/About/Footer";
import ContactNavbar from "../components/Contact/Navbar";
import TopBar from "../components/About/TopBar";

function ContactScreen() {
  return (
    <div>
      <TopBar />
      <ContactNavbar />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactScreen;
