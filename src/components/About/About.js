import React from "react";
import image from "../../img/about.jpg";

function About() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5
                className="fw-bold  text-uppercase"
                style={{ color: "#e5508b" }}
              >
                About Us
              </h5>
              <h1 className="mb-0">
                Transforming Spaces with Innovative Interior Designs
              </h1>
            </div>
            <p className="mb-4">
              At Meenanda Infratech, we believe in the transformative power of
              well-designed spaces. With a passion for creating interiors that
              reflect the unique personalities and lifestyles of our clients, we
              have been turning dreams into reality for over a decade.
            </p>
            <p className="mb-4">
              Our team of experienced and creative designers is dedicated to
              delivering exceptional interior solutions tailored to meet the
              individual needs and preferences of each client. From concept to
              execution, we pay meticulous attention to detail, ensuring that
              every project is a masterpiece.
            </p>
            <div className="row g-0 mb-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3"></i>Innovative
                  Designs
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3"></i>Personalized
                  Approach
                </h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3"></i>Attention to
                  Detail
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3"></i>Client
                  Satisfaction
                </h5>
              </div>
            </div>
            <div
              className="d-flex align-items-center mb-4 wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div
                className="d-flex align-items-center justify-content-center rounded"
                style={{ width: "60px", height: "60px", background: "#e5508b" }}
              >
                <i class="fa fa-phone-alt text-white rotate-icon"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Have a question?</h5>
                <h5 className="mb-2">
                  Contact us at &nbsp;
                  <span className="text-primary mb-0">+91 99869 43389</span>
                </h5>{" "}
              </div>
            </div>
            <a
              href="/contact"
              className="btn btn-primary py-3 px-5 mt-3 wow zoomIn "
              data-wow-delay="0.9s"
            >
              <h5 className="text-white">Give a Quote</h5>
            </a>
          </div>
          <div className="col-lg-5" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src={image}
                style={{ objectFit: "cover" }}
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
