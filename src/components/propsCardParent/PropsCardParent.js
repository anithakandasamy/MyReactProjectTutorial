import React, { Component } from "react";
import PropsCard from '../propsCard/PropsCard'
import products from "./productsInfo.json";

export default class PropsCardParent extends Component {

  productsCounter = products.map(ele => ({id:ele.id, counter:0}));

  render() {
    return (
      <div className="container-fluid" style={{ paddingTop: "3px" }}>
        <div className="card-group">
          {products.map((ele) => (
            <PropsCard
              key={"propsCard" + ele.id}
              id={ele.id}
              imgSrc={ele.imgSrc}
              title={ele.title}
              desc={ele.description}
              counter = {this.productsCounter.find(e => e.id === ele.id).counter}
            ></PropsCard>
          ))}
        </div>
      </div>
    );
  }
}
