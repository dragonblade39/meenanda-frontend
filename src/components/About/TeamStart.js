import React from "react";
import image3 from "../../img/team-3.jpg";
import image2 from "../../img/team-2.jpg";
import image1 from "../../img/team-1.jpg";
function TeamStart() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5
            className="fw-bold  text-uppercase"
            style={{ color: "var(--primary)" }}
          >
            Team Members
          </h5>
          <h1 className="mb-0">
            Professional Stuffs Ready to Help Your Business
          </h1>
        </div>
        <div className="row g-5">
          {/* Team Member 1 */}
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src={image1}
                  alt="Team Member 1"
                />
                <div className="team-social">
                  <a
                    className="btn btn-lg  btn-lg-square rounded"
                    style={{ backgroundColor: "var(--primary)", color: "#fff" }}
                    href="/#"
                  >
                    <i className="fab fa-twitter fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg  btn-lg-square rounded"
                    style={{ backgroundColor: "var(--primary)", color: "#fff" }}
                    href="/#"
                  >
                    <i className="fab fa-facebook-f fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg  btn-lg-square rounded"
                    style={{ backgroundColor: "var(--primary)", color: "#fff" }}
                    href="/#"
                  >
                    <i className="fab fa-instagram fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg  btn-lg-square rounded"
                    style={{ backgroundColor: "var(--primary)", color: "#fff" }}
                    href="/#"
                  >
                    <i className="fab fa-linkedin-in fw-normal"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="" style={{ color: "var(--primary)" }}>
                  John Doe
                </h4>
                <p className="text-uppercase m-0">Designation 1</p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src={image2}
                  alt="Team Member 2"
                />
                <div className="team-social">
                  <a
                    className="btn btn-lg  btn-lg-square rounded"
                    style={{ backgroundColor: "var(--primary)", color: "#fff" }}
                    href="/#"
                  >
                    <i className="fab fa-twitter fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg  btn-lg-square rounded"
                    style={{ backgroundColor: "var(--primary)", color: "#fff" }}
                    href="/#"
                  >
                    <i className="fab fa-facebook-f fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg  btn-lg-square rounded"
                    style={{ backgroundColor: "var(--primary)", color: "#fff" }}
                    href="/#"
                  >
                    <i className="fab fa-instagram fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg  btn-lg-square rounded"
                    style={{ backgroundColor: "var(--primary)", color: "#fff" }}
                    href="/#"
                  >
                    <i className="fab fa-linkedin-in fw-normal"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="" style={{ color: "var(--primary)" }}>
                  Jane Doe
                </h4>
                <p className="text-uppercase m-0">Designation 2</p>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src={image3}
                  alt="Team Member 3"
                />
                <div className="team-social">
                  <a
                    className="btn btn-lg  btn-lg-square rounded"
                    style={{ backgroundColor: "var(--primary)", color: "#fff" }}
                    href="/#"
                  >
                    <i className="fab fa-twitter fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg  btn-lg-square rounded"
                    style={{ backgroundColor: "var(--primary)", color: "#fff" }}
                    href="/#"
                  >
                    <i className="fab fa-facebook-f fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg  btn-lg-square rounded"
                    style={{ backgroundColor: "var(--primary)", color: "#fff" }}
                    href="/#"
                  >
                    <i className="fab fa-instagram fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg  btn-lg-square rounded"
                    style={{ backgroundColor: "var(--primary)", color: "#fff" }}
                    href="/#"
                  >
                    <i className="fab fa-linkedin-in fw-normal"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="" style={{ color: "var(--primary)" }}>
                  Alan Smith
                </h4>
                <p className="text-uppercase m-0">Designation 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamStart;
