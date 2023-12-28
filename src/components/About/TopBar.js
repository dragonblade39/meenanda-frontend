import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/styles.css";
import "../../css/bootstrap.min.css";

function TopBar() {
  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/place/MEENANDA+INFRATECH/@13.0957266,77.5381694,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae238a3443c19d:0x1a17b88931d0bb3b!8m2!3d13.0957266!4d77.5407443!16s%2Fg%2F11j37jd1s5?entry=ttu",
      "_blank"
    );
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:meenandainfratech@gmail.com";
  };
  const handlePhoneClick = () => {
    window.location.href = "tel:+917295803413";
  };
  const handlePhoneClick1 = () => {
    window.location.href = "tel:+919986943389";
  };
  return (
    <div
      className="container-fluid px-5 d-none d-lg-block"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div class="row gx-0">
        <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div
            class="d-inline-flex align-items-center"
            style={{ height: "45px" }}
          >
            <small
              class="me-3 text-light"
              onClick={handleLocationClick}
              style={{ cursor: "pointer", fontSize: "15px", fontWeight: "500" }}
            >
              <i class="fa fa-map-marker-alt me-2"></i>
              Vaderahalli, Vidyaranyapura, Bengaluru - 560097
            </small>
            <small
              class="me-3 text-light"
              onClick={handlePhoneClick1}
              style={{ cursor: "pointer", fontSize: "15px", fontWeight: "500" }}
            >
              <i class="fa fa-phone-alt me-2 rotate-icon"></i>
              <i
                class="fa fa-brands fa-whatsapp me-2"
                style={{ fontSize: "15px", fontWeight: "500" }}
              ></i>{" "}
              +91 99869 43389
            </small>
            {/* <small
              className="me-3 text-light"
              onClick={handlePhoneClick}
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-phone-alt me-2 rotate-icon"></i>+91 72958
              03413
            </small> */}
            <small
              className="text-light"
              onClick={handleEmailClick}
              style={{ cursor: "pointer", fontSize: "15px", fontWeight: "500" }}
            >
              <i className="fa fa-envelope-open me-2"></i>
              meenandainfratech@gmail.com
            </small>
          </div>
        </div>
        <div class="col-lg-4 text-center text-lg-end">
          <div
            class="d-inline-flex align-items-center"
            style={{ height: "45px" }}
          >
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
            >
              <i class="fab fa-twitter fw-normal"></i>
            </a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
            >
              <i class="fab fa-facebook-f fw-normal"></i>
            </a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
            >
              <i class="fab fa-linkedin-in fw-normal"></i>
            </a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
            >
              <i class="fab fa-instagram fw-normal"></i>
            </a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
              href=""
            >
              <i class="fab fa-youtube fw-normal"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
