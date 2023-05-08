import React, { Component } from "react";
import PropsCard from '../propsCard/PropsCard'

export default class PropsCardParent extends Component {
  products = [
    {
      id: 101,
      title: "Camera",
      description:
        "1. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc:
        "https://cdn.pixabay.com/photo/2014/10/31/10/01/camera-510530_1280.jpg"
    },
    {
      id: 102,
      title: "Lens",
      description:
        "2. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc:
        "https://cdn.pixabay.com/photo/2014/10/31/10/01/lens-510535_1280.jpg"
    },
    {
      id: 103,
      title: "Cam Lens",
      description:
        "3. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc:
        "https://cdn.pixabay.com/photo/2014/10/31/10/01/lens-510535_1280.jpg"
    },
  ];

  productsCounter = this.products.map(ele => ({id:ele.id, counter:0}));

  render() {
    return (
      <div className="container" style={{ paddingTop: "3px" }}>
        <div className="card-group">
          {this.products.map((ele) => (
            <PropsCard
              key={"propsCard" + ele.id}
              id={ele.id}
              imgSrc={ele.imgSrc}
              title={ele.title}
              desc={ele.description}
              cntr = {this.productsCounter.find(e => e.id === ele.id).counter}
            ></PropsCard>
          ))}
        </div>
      </div>
    );
  }
}
