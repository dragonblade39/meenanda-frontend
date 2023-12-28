import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
const NavbarHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    AOS.init({
      duration: 800, // Set the duration for the animation
    });
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Set initial active state based on window location
    const path = window.location.pathname;
    const activePath = path.substring(1, path.length);
    setActive(activePath || "home");
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        className={`px-5 py-3 py-lg-0 ${isScrolled ? "fixed-top" : ""}`}
        style={{
          backgroundColor:
            isScrolled || window.innerWidth <= 992 ? "#fff" : "transparent",
          position: isScrolled ? "fixed" : "absolute",
          zIndex: 999,
        }}
        data-aos={isScrolled ? "fade-down" : ""}
      >
        <Navbar.Brand
          href="index.html"
          data-aos={isScrolled ? "fade-down" : ""}
        >
          <h1
            className="m-0"
            style={{
              color:
                isScrolled || window.innerWidth <= 992
                  ? "var(--primary)"
                  : "#fff",
            }}
          >
            <i
              className="fa fa-user-tie me-2"
              style={{
                color:
                  isScrolled || window.innerWidth <= 992
                    ? "var(--primary)"
                    : "#fff",
              }}
            ></i>
            MEENANDA
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse">
          <span className="fa fa-bars"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto py-0">
            <Nav.Link
              href="/"
              className={`nav-item nav-link ${
                active === "home" ? "active" : ""
              }`}
              style={{
                color:
                  isScrolled || window.innerWidth <= 992
                    ? "var(--primary)"
                    : "#fff",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={`nav-item nav-link ${
                active === "about" ? "active" : ""
              }`}
              style={{
                color:
                  isScrolled || window.innerWidth <= 992
                    ? "var(--primary)"
                    : "#fff",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/service"
              className={`nav-item nav-link ${
                active === "service" ? "active" : ""
              }`}
              style={{
                color:
                  isScrolled || window.innerWidth <= 992
                    ? "var(--primary)"
                    : "#fff",
              }}
            >
              Services
            </Nav.Link>

            <Nav.Link
              href="/contact"
              className={`nav-item nav-link ${
                active === "contact" ? "active" : ""
              }`}
              style={{
                color:
                  isScrolled || window.innerWidth <= 992
                    ? "var(--primary)"
                    : "#fff",
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarHeader;
