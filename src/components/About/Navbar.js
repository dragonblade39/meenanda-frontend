import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/styles.css";
import "../../css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarHeader from "../Home/Navbar";
function Navbar1() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // Set the duration for the animation
    });
  });

  return (
    <div className="container-fluid position-relative p-0">
      <NavbarHeader />
      <div className="item" data-aos="fade-up" data-aos-delay="200">
        {/* Rest of the code remains the same */}
        <img
          className="w-100"
          style={{ height: "40vh" }}
          src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg"
          alt="Image"
        />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: "900px" }}>
            <div class="row py-5">
              <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1
                  class="display-4 animated zoomIn"
                  style={{ color: "#e5508b" }}
                >
                  About Us
                </h1>
                <a href="" class="h5 text-white">
                  Home
                </a>
                <i
                  className="far fa-circle  px-2"
                  style={{ color: "#e5508b" }}
                ></i>

                <a href="" class="h5 text-white">
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
