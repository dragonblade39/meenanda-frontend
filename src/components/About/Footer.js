import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import TeamStart from "./TeamStart";

function Footer(teamRef) {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (to) => {
    scrollToTop();
    navigate(to);
  };

  const handleLinkClick1 = (to) => {
    const targetElement = document.getElementById(to.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = () => {
    window.open(
      "https://www.google.com/maps/place/MEENANDA+INFRATECH/@13.0957266,77.5381694,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae238a3443c19d:0x1a17b88931d0bb3b!8m2!3d13.0957266!4d77.5407443!16s%2Fg%2F11j37jd1s5?entry=ttu",
      "_blank"
    );
  };
  const email = () => {
    window.location.href = "mailto:meenandainfratech@gmail.com";
  };
  const phone1 = () => {
    window.location.href = "tel:+917295803413";
  };
  const phone2 = () => {
    window.location.href = "tel:+919986943389";
  };

  return (
    <>
      <div
        className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center h-10 p-4"
                style={{ background: "#e5508b" }}
              >
                <RouterLink href="/" className="navbar-brand">
                  <h1 className="m-0 text-white"> Meenanda </h1>
                  <h1 className="m-0 text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Infratech{" "}
                  </h1>
                </RouterLink>
                <p className="mt-3 mb-4">
                  We are more than just interior designers, we are storytellers.
                  Our journey began with a simple mission - to create spaces
                  that tell your unique story. With a team of seasoned
                  professionals, we bring a wealth of experience and a fresh
                  perspective to every project.
                </p>
                <p>
                  {" "}
                  Feel free to adapt and expand upon this content to better suit
                  the unique identity and services of your interior designing
                  company.
                </p>
                <form action="">
                  <button
                    className="btn btn-dark "
                    style={{
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      borderRadius: "5px",
                    }}
                    onClick={() => handleLinkClick("/contact")}
                  >
                    CONTACT US&nbsp;&nbsp;
                    <i class="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
                <br />
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div class="row gx-5">
                <div class="col-lg-4 col-md-12 pt-5 mb-5">
                  <div class="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 class="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div class="d-flex mb-2">
                    <i
                      class="bi bi-geo-alt  me-2"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    <p
                      class="mb-0"
                      style={{ cursor: "pointer" }}
                      onClick={location}
                    >
                      #2/1, 1st Cross, 1st Main, Nethaji Layout, Vaderahalli,
                      Vidyaranyapura, Bengaluru - 560097
                    </p>
                  </div>
                  <div class="d-flex mb-2">
                    <i
                      class="bi bi-envelope-open  me-2"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    <p
                      onClick={email}
                      style={{ cursor: "pointer" }}
                      class="mb-0"
                    >
                      meenandainfratech@gmail.com
                    </p>
                  </div>
                  <div class="d-flex mb-2">
                    <i
                      class="bi bi-telephone  me-2"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    <i
                      class="bi bi-whatsapp  me-2"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    <p
                      onClick={phone1}
                      style={{ cursor: "pointer" }}
                      class="mb-0"
                    >
                      +91 99869 43389
                    </p>
                  </div>
                  <div class="d-flex mb-2">
                    <i
                      class="bi bi-telephone  me-2"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    <p
                      onClick={phone2}
                      style={{ cursor: "pointer" }}
                      class="mb-0"
                    >
                      +91 72958 03413
                    </p>
                  </div>
                  <div class="d-flex mt-4">
                    <RouterLink
                      class="btn  btn-square me-2"
                      href="#"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <i class="fab fa-twitter fw-normal text-white"></i>
                    </RouterLink>
                    <RouterLink
                      class="btn  btn-square me-2"
                      href="#"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <i class="fab fa-facebook-f fw-normal text-white"></i>
                    </RouterLink>
                    <RouterLink
                      class="btn  btn-square me-2"
                      href="#"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <i class="fab fa-linkedin-in fw-normal text-white"></i>
                    </RouterLink>
                    <RouterLink
                      class="btn  btn-square"
                      href="#"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <i class="fab fa-instagram fw-normal text-white"></i>
                    </RouterLink>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div class="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 class="text-light mb-0">Quick Links</h3>
                  </div>
                  <div class="link-animated d-flex flex-column justify-content-start">
                    <RouterLink
                      to="/"
                      class="text-light mb-2"
                      onClick={() => handleLinkClick("/")}
                    >
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Home
                    </RouterLink>
                    <RouterLink
                      to="/about"
                      class="text-light mb-2"
                      onClick={() => handleLinkClick("/about")}
                    >
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      About Us
                    </RouterLink>
                    <RouterLink
                      to="/service"
                      class="text-light mb-2"
                      onClick={() => handleLinkClick("/service")}
                    >
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Our Services
                    </RouterLink>
                    <RouterLink
                      to="/about#team"
                      class="text-light mb-2"
                      onClick={() => {
                        handleLinkClick1("/about#team");
                      }}
                    >
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Meet The Team
                    </RouterLink>
                    <RouterLink
                      to="/contact"
                      class="text-light"
                      onClick={() => handleLinkClick("/contact")}
                    >
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Contact Us
                    </RouterLink>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div class="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 class="text-light mb-0">Popular Links</h3>
                  </div>
                  <div class="link-animated d-flex flex-column justify-content-start">
                    <RouterLink
                      to="/"
                      class="text-light mb-2"
                      onClick={() => handleLinkClick("/")}
                    >
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Home
                    </RouterLink>
                    <RouterLink
                      to="/about"
                      class="text-light mb-2"
                      onClick={() => handleLinkClick("/about")}
                    >
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      About Us
                    </RouterLink>
                    <RouterLink
                      to="/service"
                      class="text-light mb-2"
                      onClick={() => handleLinkClick("/service")}
                    >
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Our Services
                    </RouterLink>
                    <RouterLink
                      to="/about#team"
                      class="text-light mb-2"
                      onClick={() => {
                        handleLinkClick1("/about#team");
                      }}
                    >
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Meet The Team
                    </RouterLink>
                    <RouterLink
                      to="/contact"
                      class="text-light"
                      onClick={() => handleLinkClick("/contact")}
                    >
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Contact Us
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-white"
        style={{ background: "#061429" }}
      >
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "75px" }}
              >
                <p className="mb-0">
                  &copy;{" "}
                  <RouterLink className="text-white border-bottom" href="/">
                    Meenanda Infratech
                  </RouterLink>
                  .&nbsp;&nbsp; All Rights Reserved.
                  <RouterLink
                    className="text-white border-bottom"
                    href="https://htmlcodex.com"
                  ></RouterLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
