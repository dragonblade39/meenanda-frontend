import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/styles.css";
import "../../css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarHeader from "../Home/Navbar";
function Navbar1() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // Set the duration for the animation
    });
  });

  return (
    // <div
    //   class="container-fluid position-relative p-0"
    //   style={{ marginTop: "90px" }}
    // >
    //   <Navbar
    //     expand="lg"
    //     variant="dark"
    //     className={`px-5 py-3 py-lg-0 ${isScrolled ? "fixed-top" : ""}`}
    //     style={{
    //       backgroundColor:
    //         isScrolled || window.innerWidth <= 992 ? "#fff" : "transparent",
    //       position: isScrolled ? "fixed" : "absolute",
    //       zIndex: 999,
    //     }}
    //     data-aos={isScrolled ? "fade-down" : ""}
    //   >
    //     <Navbar.Brand
    //       href="index.html"
    //       data-aos={isScrolled ? "fade-down" : ""}
    //     >
    //       <h1 className="m-0">
    //         <i className="fa fa-user-tie me-2"></i>MEENANDA
    //       </h1>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarCollapse">
    //       <span className="fa fa-bars"></span>
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="navbarCollapse">
    //       <Nav className="ms-auto py-0">
    //         <Nav.Link href="index.html" className="nav-item nav-link ">
    //           Home
    //         </Nav.Link>
    //         <Nav.Link href="/about" className="nav-item nav-link active">
    //           About
    //         </Nav.Link>
    //         <Nav.Link href="service.html" className="nav-item nav-link">
    //           Services
    //         </Nav.Link>
    //         {/* <NavDropdown title="Blog" id="blog-dropdown">
    //           <NavDropdown.Item href="blog.html">Blog Grid</NavDropdown.Item>
    //           <NavDropdown.Item href="detail.html">
    //             Blog Detail
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //         <NavDropdown title="Pages" id="pages-dropdown">
    //           <NavDropdown.Item href="price.html">
    //             Pricing Plan
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="feature.html">
    //             Our features
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="team.html">Team Members</NavDropdown.Item>
    //           <NavDropdown.Item href="testimonial.html">
    //             Testimonial
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="quote.html">Free Quote</NavDropdown.Item>
    //         </NavDropdown> */}
    //         <Nav.Link href="contact.html" className="nav-item nav-link">
    //           Contact
    //         </Nav.Link>
    //       </Nav>
    //       {/* <Button
    //         type="button"
    //         className="btn text-primary ms-3"
    //         data-bs-toggle="modal"
    //         data-bs-target="#searchModal"
    //       >
    //         <i className="fa fa-search"></i>
    //       </Button> */}
    //     </Navbar.Collapse>
    //   </Navbar>
    //   <div
    //     class="container-fluid bg-primary py-5 bg-header"
    //     style={{ marginBottom: "90px" }}
    //   >
    //     <div class="row py-5">
    //       <div class="col-12 pt-lg-5 mt-lg-5 text-center">
    //         <h1 class="display-4 animated zoomIn" style={{ color: "#e5508b" }}>
    //           About Us
    //         </h1>
    //         <a href="" class="h5 text-white">
    //           Home
    //         </a>
    //         <i className="far fa-circle  px-2" style={{ color: "#e5508b" }}></i>

    //         <a href="" class="h5 text-white">
    //           About
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid position-relative p-0">
      <NavbarHeader />
      <div className="item" data-aos="fade-up" data-aos-delay="600">
        {/* Rest of the code remains the same */}
        <img
          className="w-100"
          style={{ height: "40vh" }}
          src="https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg"
          alt="Image"
        />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: "900px" }}>
            <div class="row py-5">
              <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1
                  class="display-4 animated zoomIn"
                  style={{ color: "#e5508b" }}
                >
                  About Us
                </h1>
                <a href="" class="h5 text-white">
                  Home
                </a>
                <i
                  className="far fa-circle  px-2"
                  style={{ color: "#e5508b" }}
                ></i>

                <a href="" class="h5 text-white">
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
