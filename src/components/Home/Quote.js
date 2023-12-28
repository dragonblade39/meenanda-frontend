import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelopeOpen,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import Modal1 from "../Modal/modal";
const Quote = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [modal, setModal] = useState({
    title: "",
    heading: "",
    content: "",
  });

  const handleInputChange = (event, field) => {
    setMessage((prevMessage) => ({
      ...prevMessage,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(message);

    try {
      const response = await axios.post(
        "https://meenanda-backend.onrender.com/data/create",
        message
      );

      if (response.status === 200) {
        setModalShow(true);
        setModal({
          content: "Thank you for reaching out to us!!",
          title: "Message sent successfully",
          heading: "Success",
        });
      } else if (response.status === 400) {
        setModalShow(true);
        setModal({
          content: response.data.error,
          title: "Query sending was unsuccessful",
          heading: "Error",
        });
      } else {
        setModalShow(true);
        setModal({
          content: response.data.error,
          title: "Query sending was unsuccessful",
          heading: "Error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        className="container-fluid py-5"
        data-aos="fade-in-up"
        data-aos-delay="100"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5
                  className="fw-bold  text-uppercase"
                  style={{ color: "var(--primary)" }}
                >
                  Request A Quote
                </h5>
                <h1 className="mb-0">
                  Need A Free Quote? Please Feel Free to Contact Us
                </h1>
              </div>
              <div className="row gx-3">
                <div
                  className="col-sm-6"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <h5 className="mb-4">
                    <i
                      className="fa fa-reply  me-3"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    Reply within 24 hours
                  </h5>
                </div>
                <div
                  className="col-sm-6"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <h5 className="mb-4">
                    <i
                      className="fa fa-phone-alt  me-3 rotate-icon"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    24 hrs telephone support
                  </h5>
                </div>
              </div>
              <p className="mb-4">
                Ready to transform your vision into reality? Request a quote
                today, and let our expert team tailor a solution that aligns
                with your unique project needs. Experience the seamless blend of
                innovation, quality, and commitment that defines our services.
                Your journey towards exceptional infrastructure begins here.
              </p>
              <div
                className="d-flex align-items-center mt-2"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "var(--primary)",
                  }}
                >
                  <i className="fa fa-phone-alt text-white rotate-icon"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className=" mb-0" style={{ color: "var(--primary)" }}>
                    +91 99869 43389
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="rounded h-100 d-flex align-items-center p-5"
                data-aos="zoom-in"
                data-aos-delay="900"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control border-0  px-4"
                        placeholder="Your Name"
                        style={{
                          height: "55px",
                          backgroundColor: "var(--light-pink)",
                          color: "var(--black)",
                        }}
                        onChange={(event) => handleInputChange(event, "name")}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control border-0  px-4"
                        placeholder="Your Email"
                        style={{
                          height: "55px",
                          backgroundColor: "var(--light-pink)",
                          color: "var(--black)",
                        }}
                        onChange={(event) => handleInputChange(event, "email")}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control border-0  px-4"
                        placeholder="Subject"
                        style={{
                          height: "55px",
                          color: "var(--black)",
                          backgroundColor: "var(--light-pink)",
                        }}
                        onChange={(event) =>
                          handleInputChange(event, "subject")
                        }
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0  px-4 py-3"
                        style={{
                          backgroundColor: "var(--light-pink)",
                          color: "var(--black)",
                        }}
                        rows="8"
                        placeholder="Message"
                        onChange={(event) =>
                          handleInputChange(event, "message")
                        }
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-dark w-100 py-3" type="submit">
                        Request A Quote
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {modalShow && (
          <Modal1
            content={modal.content}
            title={modal.title}
            heading={modal.heading}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        )}
      </div>
    </>
  );
};

export default Quote;
