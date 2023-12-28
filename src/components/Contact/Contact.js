import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelopeOpen,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import Modal1 from "../Modal/modal";

function ContactScreen() {
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
    <div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5
              className="fw-bold  text-uppercase"
              style={{ color: "var(--primary" }}
            >
              Contact Us
            </h5>
            <h1 className="mb-0">
              If You Have Any Query, Feel Free To Contact Us
            </h1>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-6">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div
                  className=" d-flex align-items-center justify-content-center rounded"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "var(--primary",
                  }}
                >
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h5 className=" mb-0" style={{ color: "var(--primary" }}>
                    +91 99869 43389
                  </h5>
                  <h5 className="mb-0" style={{ color: "var(--primary" }}>
                    +91 72958 03413
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " style={{ top: "10px" }}>
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.4s"
              >
                <div
                  className=" d-flex align-items-center justify-content-center rounded"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "var(--primary)",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    className="text-white"
                  />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Email to get free quote</h5>
                  <h5 className=" mb-0" style={{ color: "var(--primary" }}>
                    meenandainfratech@gmail.com
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.8s"
              >
                <div
                  className=" d-flex align-items-center justify-content-center rounded"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "var(--primary)",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-white"
                  />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Visit our office</h5>
                  <h5 className=" mb-0" style={{ color: "var(--primary" }}>
                    #2/1, 1st Cross, 1st Main, Nethaji Layout, Vaderahalli,
                    Vidyaranyapura, Bengaluru - 560097
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
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
                      onChange={(event) => handleInputChange(event, "subject")}
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
                      onChange={(event) => handleInputChange(event, "message")}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn  w-100 py-3"
                      style={{
                        backgroundColor: "var(--primary)",
                        color: "#fff",
                      }}
                      type="submit"
                    >
                      <i class="fa-solid fa-paper-plane"></i>&nbsp;Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0545941583373!2d77.53816937562979!3d13.095726587231148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae238a3443c19d%3A0x1a17b88931d0bb3b!2sMEENANDA%20INFRATECH!5e0!3m2!1sen!2sin!4v1703772169556!5m2!1sen!2sin"
                width="100%"
                height="440"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
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
  );
}

export default ContactScreen;
