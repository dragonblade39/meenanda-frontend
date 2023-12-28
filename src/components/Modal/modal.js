import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modal1(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: "#fff" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          <span
            style={{ color: "#007C02", fontWeight: "800", fontSize: "30px" }}
          >
            {props.heading}
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#fff" }}>
        <div>
          <span style={{ color: "black", fontWeight: "520", fontSize: "25px" }}>
            {props.title}
          </span>
          <p style={{ color: "black", fontWeight: "500", fontSize: "20px" }}>
            {props.content}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#fff" }}>
        <Button
          style={{ backgroundColor: "#091E3E", color: "#fff" }}
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modal1;
