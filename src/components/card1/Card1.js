import React, { Component } from "react";
import "./Card1.css";
import products from "./productsInfo.json";

export default class Card1 extends Component {
  productsCounter = products.map((ele) => ({ id: ele.id, counter: 0 }));

  increment = (elementId) => {
    var prd = this.productsCounter.find((ele) => ele.id === elementId);
    if (prd.counter < 10) prd.counter++;
    this.forceUpdate();
  };

  decrement = (elementId) => {
    var prd = this.productsCounter.find((ele) => ele.id === elementId);
    if (prd.counter > 0) prd.counter--;
    this.forceUpdate();
  };

  render() {
    return (
      <div className="container-fluid" style={{ paddingTop: "3px" }}>
        <div className="card-group">
          {products.map((element) => (
            <div className="card" key={"cnt" + element.id}>
              <img
                key={"img" + element.id}
                src={element.imgSrc}
                className="card-img-top"
                alt="..." />
              <div key={"crd" + element.id} className="card-body">
                <h5 key={"tit" + element.id} className="card-title text-primary">
                  Using ForceUpdate - {element.title}
                </h5>
                <p key={"desc" + element.id} className="card-text">
                  {element.description}
                </p>
                <button
                  key={"dec" + element.id}
                  className="btn btn-success"
                  onClick={() => this.decrement(element.id)}
                >
                  -
                </button>
                <span
                  key={"cnt" + element.id}
                  className="badge bg-success counter"
                  style={{ padding: "12px" }}
                >
                  {this.productsCounter.find((ele) => ele.id === element.id)
                    .counter}
                </span>
                <button
                  key={"inc" + element.id}
                  className="btn btn-success"
                  onClick={() => this.increment(element.id)}
                >
                  +
                </button>
                <button
                  type="button"
                  key={"btnAdd" + element.id}
                  className="btn btn-success bi bi-bag-heart"
                  style={{ marginLeft: "20px" }}
                  onClick={() => alert("Added to cart")}
                >
                  {" "}
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
