import React from "react";
import "./Carousel.css";

export default function Carousel() {
  return (
    <div className="container">
      <div className="cold-md-4">
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-interval="true"  data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner  rounded">
            <div className="carousel-item active">
              <img
                src="https://cdn.pixabay.com/photo/2020/04/08/02/57/switch-5015530_1280.jpg"
                className="d-block w-100"
                alt="..."
                height={"300px"}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2020/04/08/02/57/switch-5015525_1280.jpg"
                className="d-block w-100"
                alt="..."
                height={"300px"}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2022/12/21/06/53/electronic-connector-7669297_1280.jpg"
                className="d-block w-100"
                alt="..."
                height={"300px"}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
