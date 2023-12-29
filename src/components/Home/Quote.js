import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import ReactLoading from "react-loading";
import Modal1 from "../Modal/modal";
import Modal2 from "../Modal/modal1";

const Quote = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
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
  const [modal1, setModal1] = useState({
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
    setLoading(true);
    event.preventDefault();

    // Validation checks
    if (message.subject.split(" ").length < 4) {
      setModalShow1(true);
      setModal1({
        content: "Subject should have at least 4 words.",
        title: "Validation Error",
        heading: "Error",
      });
      setLoading(false);
      return;
    }

    if (!/^[a-zA-Z\s]*$/.test(message.name)) {
      setModalShow1(true);
      setModal1({
        content: "Name should not contain numbers or special characters.",
        title: "Validation Error",
        heading: "Error",
      });
      setLoading(false);
      return;
    }

    if (message.message.split(" ").length < 10) {
      setModalShow1(true);
      setModal1({
        content: "Message should have at least 10 words.",
        title: "Validation Error",
        heading: "Error",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://meenanda-backend.onrender.com/data/create",
        message
      );

      console.log("API Response:", response);

      if (response.status === 200) {
        setModalShow(true);
        setModal({
          content: "Thank you for reaching out to us!!",
          title: "Message sent successfully",
          heading: "Success",
        });
        setLoading(false);
        setMessage({ name: "", email: "", subject: "", message: "" });
      } else if (response.status === 400) {
        setModalShow1(true);
        setModal1({
          content: response.data.error,
          title: "Query sending was unsuccessful",
          heading: "Error",
        });
        setLoading(false);
        setMessage({ name: "", email: "", subject: "", message: "" });
      } else {
        setModalShow1(true);
        setModal1({
          content: response.data.error,
          title: "Query sending was unsuccessful",
          heading: "Error",
        });
        setLoading(false);
        setMessage({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
      setModalShow1(true);
      setModal1({
        content: "An error occurred while sending the message.",
        title: "Error",
        heading: "Error",
      });
      setLoading(false);
      setMessage({ name: "", email: "", subject: "", message: "" });
    } finally {
      console.log("Setting loading to false");
    }
  };

  return (
    <>
      <div
        className="container-fluid py-5"
        data-aos="fade-in-up"
        data-aos-delay="20"
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
                  data-aos-delay="70"
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
                  data-aos-delay="120"
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
                data-aos-delay="150"
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
                data-aos-delay="170"
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
        {loading && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              zIndex: "999",
              color: "#e5508b",
            }}
          >
            <ReactLoading
              type="spinningBubbles"
              color="#e5508b"
              style={{
                width: "70px",
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                stroke: "#e5508b",
              }}
            />
          </div>
        )}
        {modalShow && (
          <Modal1
            content={modal.content}
            title={modal.title}
            heading={modal.heading}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        )}
        {modalShow1 && (
          <Modal2
            content={modal1.content}
            title={modal1.title}
            heading={modal1.heading}
            show={modalShow1}
            onHide={() => setModalShow1(false)}
          />
        )}
      </div>
    </>
  );
};

export default Quote;
