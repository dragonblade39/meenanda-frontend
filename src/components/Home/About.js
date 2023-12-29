import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../img/about.jpg";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="container-fluid py-5"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-7">
              <div class="section-title position-relative pb-3 mb-5">
                <h5
                  class="fw-boldtext-uppercase"
                  style={{ color: "var(--primary)" }}
                >
                  About Us
                </h5>
                <h1 class="mb-0">
                  Transforming Spaces with Innovative Interior Designs
                </h1>
              </div>
              <p className="mb-4">
                At Meenanda Infratech, we believe in the transformative power of
                well-designed spaces. With a passion for creating interiors that
                reflect the unique personalities and lifestyles of our clients,
                we have been turning dreams into reality for over a decade.
              </p>
              <p className="mb-4">
                Our team of experienced and creative designers is dedicated to
                delivering exceptional interior solutions tailored to meet the
                individual needs and preferences of each client. From concept to
                execution, we pay meticulous attention to detail, ensuring that
                every project is a masterpiece.
              </p>
              <div class="row g-0 mb-3">
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h5 class="mb-3">
                    <i
                      class="fa fa-check me-3"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    Innovative Designs
                  </h5>
                  <h5 class="mb-3">
                    <i
                      class="fa fa-check  me-3"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    Personailzed Approach
                  </h5>
                </div>
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h5 class="mb-3">
                    <i
                      class="fa fa-check  me-3"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    Attention to Detail
                  </h5>
                  <h5 class="mb-3">
                    <i
                      class="fa fa-check me-3"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    Client Satisfaction
                  </h5>
                </div>
              </div>
              <div
                class="d-flex align-items-center mb-4 "
                data-aos="fade-in"
                data-aos-delay="300"
              >
                <div
                  class="d-flex align-items-center justify-content-center rounded"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "var(--primary",
                  }}
                >
                  <i class="fa fa-phone-alt text-white rotate-icon"></i>
                </div>
                <div class="ps-4">
                  <h5 class="mb-2">Call to ask any question</h5>
                  <h4 class=" mb-0" style={{ color: "var(--primary)" }}>
                    +91 99869 43389
                  </h4>
                </div>
              </div>
              <a
                href="quote.html"
                class="btn py-3 px-5 mt-3 "
                data-aos="fade-up"
                data-aos-delay="450"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                Request A Quote
              </a>
            </div>
            <div class="col-lg-5" style={{ minHeight: "500px" }}>
              <div class="position-relative h-100">
                <img
                  class="position-absolute w-100 h-100 rounded"
                  dat-aos="fade-up"
                  data-aos-delay="450"
                  src={image}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
