import React, { Component } from 'react'
import "./Card1.css"
export default class Card1 extends Component {
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
  
  increment = (elementId) => {
    var prd = this.productsCounter.find(ele => ele.id === elementId);
    if(prd.counter < 10)
    prd.counter++;
    this.forceUpdate();
  }

  decrement = (elementId) => {
    var prd = this.productsCounter.find(ele => ele.id === elementId);
    if(prd.counter > 0)
    prd.counter--;
    this.forceUpdate();
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: "3px" }}>
      <div className="card-group">
        {this.products.map((element) => (
          <div className="card" key={"cnt"+element.id} >
            <img key={"img"+element.id} src={element.imgSrc} className="card-img-top" alt="..." />
            <div key={"crd"+element.id} className="card-body">
              <h5 key={"tit"+element.id} className="card-title">{element.title}</h5>
              <p key={"desc"+element.id} className="card-text">{element.description}</p>
              <button key={"inc"+element.id} className="btn btn-success" onClick={()=> this.increment(element.id)}>+</button>
              <span key={"cnt"+element.id} className="badge bg-success counter" style={{ padding: "12px" }}>{this.productsCounter.find(ele => ele.id === element.id).counter}</span>
              <button key={"dec"+element.id} className="btn btn-success" onClick={()=> this.decrement(element.id)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  }
}
