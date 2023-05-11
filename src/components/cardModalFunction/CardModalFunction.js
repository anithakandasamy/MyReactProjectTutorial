import React, { useState } from "react";
import products from "./productsInfo.json";
import Modal from "react-modal";
import "./CardModalFunction.css";

export default function CardModalFunction() {
  let [product, SetProduct] = useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal(product) {
    SetProduct({ ...product });
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
                Using React Modal - {element.title}
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
                  openModal(element);
                }}
              >
                {" "}
                View
              </button>
              <Modal
                style={customStyles}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Product Information"
              >
                <div style={{paddingTop:"10px"}} className="card text-center rounded mx-auto d-block" key={"cnt" + product.id}>
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
                      className = "card-title text-primary"
                    >
                      Using React Modal - {product.title}
                    </h5>
                    <p key={"desc" + product.id} className="card-text">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
