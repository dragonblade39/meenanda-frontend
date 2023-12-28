import React from "react";

function Footer() {
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
                <a href="/" className="navbar-brand">
                  <h1 className="m-0 text-white"> Meenanda </h1>
                  <h1 className="m-0 text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Infratech{" "}
                  </h1>
                </a>
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
                  >
                    <i class="fa-solid fa-paper-plane"></i> CONTACT US
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
                    <p class="mb-0">
                      #2/1, 1st Cross, 1st Main, Nethaji Layout, Vaderahalli,
                      Vidyaranyapura, Bengaluru - 560097
                    </p>
                  </div>
                  <div class="d-flex mb-2">
                    <i
                      class="bi bi-envelope-open  me-2"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    <p class="mb-0">meenandainfratech@gmail.com</p>
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
                    <p class="mb-0">+91 99869 43389</p>
                  </div>
                  <div class="d-flex mb-2">
                    <i
                      class="bi bi-telephone  me-2"
                      style={{ color: "var(--primary)" }}
                    ></i>
                    <p class="mb-0">+91 72958 03413</p>
                  </div>
                  <div class="d-flex mt-4">
                    <a
                      class="btn  btn-square me-2"
                      href="#"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <i class="fab fa-twitter fw-normal text-white"></i>
                    </a>
                    <a
                      class="btn  btn-square me-2"
                      href="#"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <i class="fab fa-facebook-f fw-normal text-white"></i>
                    </a>
                    <a
                      class="btn  btn-square me-2"
                      href="#"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <i class="fab fa-linkedin-in fw-normal text-white"></i>
                    </a>
                    <a
                      class="btn  btn-square"
                      href="#"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <i class="fab fa-instagram fw-normal text-white"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div class="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 class="text-light mb-0">Quick Links</h3>
                  </div>
                  <div class="link-animated d-flex flex-column justify-content-start">
                    <a class="text-light mb-2" href="#">
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Home
                    </a>
                    <a class="text-light mb-2" href="#">
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      About Us
                    </a>
                    <a class="text-light mb-2" href="#">
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Our Services
                    </a>
                    <a class="text-light mb-2" href="#">
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Meet The Team
                    </a>
                    <a class="text-light" href="#">
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Contact Us
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div class="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 class="text-light mb-0">Popular Links</h3>
                  </div>
                  <div class="link-animated d-flex flex-column justify-content-start">
                    <a class="text-light mb-2" href="#">
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Home
                    </a>
                    <a class="text-light mb-2" href="#">
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      About Us
                    </a>
                    <a class="text-light mb-2" href="#">
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Our Services
                    </a>
                    <a class="text-light mb-2" href="#">
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Meet The Team
                    </a>
                    <a class="text-light" href="#">
                      <i
                        class="bi bi-arrow-right  me-2"
                        style={{ color: "var(--primary)" }}
                      ></i>
                      Contact Us
                    </a>
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
                  <a className="text-white border-bottom" href="/">
                    Meenanda Infratech
                  </a>
                  .&nbsp;&nbsp; All Rights Reserved.
                  <a
                    className="text-white border-bottom"
                    href="https://htmlcodex.com"
                  ></a>
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
