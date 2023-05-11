import React, { useState } from "react";
import products from "./productsInfo.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

export default function CardBootstrapModal() {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({});
  const handleClose = () => setShow(false);

  const handleShow = (prd) => {
    setProduct({ ...prd });
    setShow(true);
  };

  return (
    <div className="container-fluid" style={{ paddingTop: "3px" }}>
      <div className="card-group">
        {products.map((element) => (
          <div className="card" key={"cnt" + element.id}>
            <img
              key={"img" + element.id}
              src={element.imgSrc}
              className="card-img-top"
              alt="..."
            />
            <div key={"crd" + element.id} className="card-body">
              <h5 key={"tit" + element.id} className="card-title text-primary">
                Using Bootstrap Modal - {element.title}
              </h5>
              <p key={"desc" + element.id} className="card-text">
                {element.description}
              </p>
              <button
                type="button"
                key={"btnAdd" + element.id}
                className="btn btn-success bi bi-bag-heart"
                style={{ marginLeft: "20px" }}
                onClick={() => {
                  handleShow(element);
                }}
              >
                {" "}
                View
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Product Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div
                    style={{ paddingTop: "10px" }}
                    className="card text-center rounded mx-auto d-block"
                    key={"cnt" + product.id}
                  >
                    <img
                      key={"img" + product.id}
                      src={product.imgSrc}
                      alt="..."
                      width={"150px"}
                      height={"150px"}
                      className="rounded"
                    />
                    <div key={"crd" + product.id} className="card-body">
                      <h5
                        key={"tit" + product.id}
                        className="card-title text-primary"
                      >
                        Using Bootstrap Modal - {product.title}
                      </h5>
                      <p key={"desc" + product.id} className="card-text">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
