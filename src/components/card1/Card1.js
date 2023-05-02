import React from "react";

export default function Card1() {
  var products = [
    {
      id: 101,
      title: "Camera",
      description:
        "1. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc:
        "https://cdn.pixabay.com/photo/2014/10/31/10/01/camera-510530_1280.jpg",
    },
    {
      id: 102,
      title: "Lens",
      description:
        "2. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc:
        "https://cdn.pixabay.com/photo/2014/10/31/10/01/camera-510530_1280.jpg",
    },
    {
      id: 103,
      title: "Cam Lens",
      description:
        "3. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc:
        "https://cdn.pixabay.com/photo/2014/10/31/10/01/lens-510535_1280.jpg",
    },
  ];
  return (
    <div className="container" style={{ paddingTop: "3px" }}>
      <div className="card-group">
      {products.map((element) => (
        <div className="card">
          <img src={element.imgSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.description}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
