import React, { useEffect } from "react";

import OwlCarousel from "react-owl-carousel";
import AOS from "aos";
import "aos/dist/aos.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import NavbarHeader from "./Navbar";

const NavCarousel = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
    navText: ["Prev", "Next"],
  };

  return (
    <div className="container-fluid position-relative p-0">
      <NavbarHeader />

      <OwlCarousel className="owl-theme" {...options}>
        {/* Carousel items */}
        {/* Item 1 */}

        <div className="item h-90" data-aos="fade-up" data-aos-delay="100">
          {/* Rest of the code remains the same */}

          <img
            className="w-100"
            style={{ height: "100vh" }}
            src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg"
            alt="Image"
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: "900px" }}>
              <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                Future-Ready Infra Solutions
              </h5>
              <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                Building Tomorrow's World, Today
              </h1>
              <a
                href="quote.html"
                className="btn text-white py-md-3 px-md-5 me-3 animated slideInLeft"
                style={{
                  backgroundColor: "var(--primary",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                Free Quote
              </a>
              <a
                href=""
                className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                style={{ borderRadius: "5px" }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="item" data-aos="fade-up" data-aos-delay="400">
          {/* Rest of the code remains the same */}
          <img
            className="w-100"
            style={{ height: "100vh" }}
            src="https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg"
            alt="Image"
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: "900px" }}>
              <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                Innovate. Build. Sustain
              </h5>
              <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                Innovating Infrastructure for a Sustainable Tomorrow
              </h1>
              <a
                href="quote.html"
                className="btn text-white py-md-3 px-md-5 me-3 animated slideInLeft"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                Free Quote
              </a>
              <a
                href=""
                className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                style={{ borderRadius: "5px" }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="item" data-aos="fade-up" data-aos-delay="600">
          {/* Rest of the code remains the same */}
          <img
            className="w-100"
            style={{ height: "100vh" }}
            src="https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg"
            alt="Image"
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div
              className="p-3"
              style={{ maxWidth: "900px", color: "#fff", borderRadius: "5px" }}
            >
              <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                Tech-Powered Infrastructure Evolution
              </h5>
              <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                Where Technology Meets Infrastructure Excellence
              </h1>
              <a
                href="quote.html"
                className="btn py-md-3 text-white px-md-5 me-3 animated slideInLeft"
                style={{
                  backgroundColor: "var(--primary",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                Free Quote
              </a>
              <a
                href=""
                className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                style={{ borderRadius: "5px" }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </OwlCarousel>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target=".owl-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target=".owl-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default NavCarousel;
