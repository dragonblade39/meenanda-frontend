import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaEyeLowVision } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdConstruction } from "react-icons/md";
const Feature = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        className="container-fluid py-5"
        data-aos="fade-in-up"
        data-aos-delay="25"
      >
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5
              className="fw-bold text-uppercase"
              style={{ color: "var(--primary)" }}
            >
              Why Choose Us
            </h5>
            <h1 className="mb-0">Innovating Tomorrow's Infrastructure Today</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12" data-aos="zoom-in" data-aos-delay="75">
                  <div
                    className=" rounded d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "var(--primary)",
                      color: "#fff",
                      fontSize: "28px",
                    }}
                  >
                    <MdOutlineDesignServices />
                  </div>
                  <h4>Setting the Standard in Infratech Excellence</h4>
                  <p className="mb-0">
                    Elevate your projects with our cutting-edge solutions and
                    industry-leading expertise.
                  </p>
                </div>
                <div className="col-12" data-aos="zoom-in" data-aos-delay="150">
                  <div
                    className=" rounded d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "var(--primary)",
                      color: "#fff",
                      fontSize: "28px",
                    }}
                  >
                    <GrTechnology />
                  </div>
                  <h4>Futuristic Technology, Real-world Impact</h4>
                  <p className="mb-0">
                    Experience the difference of working with a team dedicated
                    to incorporating the latest technologies, ensuring your
                    infrastructure is prepared for the challenges of the future.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="250"
              style={{ minHeight: "300px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  src="https://cdn.pixabay.com/photo/2017/06/27/11/48/team-spirit-2447163_1280.jpg"
                  style={{ objectFit: "cover" }}
                  alt="Feature Image"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12" data-aos="zoom-in" data-aos-delay="150">
                  <div
                    className="rounded d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "var(--primary)",
                      color: "#fff",
                      fontSize: "28px",
                    }}
                  >
                    <FaEyeLowVision />
                  </div>
                  <h4>Your Vision, Our Commitment</h4>
                  <p className="mb-0">
                    Choose a partner committed to bringing your infrastructure
                    vision to life – seamlessly blending innovation,
                    sustainability, and reliability.
                  </p>
                </div>
                <div className="col-12" data-aos="zoom-in" data-aos-delay="200">
                  <div
                    className="rounded d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "var(--primary)",
                      color: "#fff",
                      fontSize: "28px",
                    }}
                  >
                    <MdConstruction />
                  </div>
                  <h4>Beyond Construction, Crafting Legacies</h4>
                  <p className="mb-0">
                    We don't just build structures; we craft legacies. Join us
                    in reshaping skylines and communities with forward-thinking
                    infratech solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
