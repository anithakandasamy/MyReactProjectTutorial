import React, { Component } from "react";
import categories from "./Categories.json";
import Category from "../category/Category";
export default class Categories extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {categories.map((category) => (
            <Category
              imgSrc={category.imgSrc}
              title={category.title}
            ></Category>
          ))}
           <Category></Category>
        </div>
      </div>
    );
  }
}
