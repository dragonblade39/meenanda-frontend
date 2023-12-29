import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaIndustry } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { FaDigitalOcean } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";
const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        className="container-fluid py-5"
        data-aos="fade-in-up"
        data-aos-delay="20"
      >
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxHeight: "600px" }}
          >
            <h5
              className="fw-bold  text-uppercase"
              style={{ color: "var(--primary)" }}
            >
              Our Services
            </h5>
            <h1 className="mb-0">
              Elevating Infrastructure, Empowering Tomorrow.
            </h1>
          </div>
          <div className="row g-5">
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="70"
            >
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div
                  className="service-icon text-white "
                  style={{ fontSize: "28px" }}
                >
                  <FaIndustry />
                </div>
                <h4 className="mb-3">Innovative Infrastructure Solutions</h4>
                <p className="m-0">
                  Experience the future of infrastructure with our innovative
                  solutions, combining technology and engineering excellence to
                  redefine industry standards.
                </p>
                <a className="btn btn-lg btn-primary rounded d-none" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="120"
            >
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div
                  className="service-icon text-white"
                  style={{ fontSize: "28px" }}
                >
                  <GiModernCity />
                </div>
                <h4 className="mb-3">Smart Cities Integration</h4>
                <p className="m-0">
                  Transform urban landscapes with our smart city solutions,
                  integrating advanced technologies for efficient, sustainable,
                  excellent and interconnected urban environments.
                </p>
                <a className="btn btn-lg btn-primary rounded d-none" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="170"
            >
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div
                  className="service-icon text-white"
                  style={{ fontSize: "28px" }}
                >
                  <MdEngineering />
                </div>
                <h4 className="mb-3">Engineering Excellence in Construction</h4>
                <p className="m-0">
                  From concept to completion, our construction services embody
                  precision and excellence, ensuring the successful realization
                  of your infrastructure projects.
                </p>
                <a className="btn btn-lg btn-primary rounded d-none" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="120"
            >
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div
                  className="service-icon text-white"
                  style={{ fontSize: "28px" }}
                >
                  <FaDigitalOcean />
                </div>
                <h4 className="mb-3">
                  Digital Transformation for Infrastructure
                </h4>
                <p className="m-0">
                  Embark on a digital journey with our infrastructure services,
                  leveraging the power of technology to enhance efficiency and
                  overall project success.
                </p>
                <a className="btn btn-lg btn-primary rounded d-none" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div
                  className="service-icon text-white"
                  style={{ fontSize: "28px" }}
                >
                  <MdHighQuality />
                </div>
                <h4 className="mb-3">Sustainable Infrastructure Development</h4>
                <p className="m-0">
                  Choose sustainability with our eco-conscious infrastructure
                  services, ensuring a greener future through top-tier quality
                  and performance standards.
                </p>
                <a className="btn btn-lg btn-primary rounded d-none" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="170"
            >
              <div
                className="position-relative  rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <h3 className="text-white mb-3">Call Us For Quote</h3>
                <p className="text-white mb-3">Feel free to contact us.</p>
                <h2 className="text-white mb-0"> +91 99869 43389</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
