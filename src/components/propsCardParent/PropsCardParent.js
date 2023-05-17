import React, { useCallback, useState } from "react";
import PropsCard from "../propsCard/PropsCard";
import prd from "./productsInfo.json";

export default function PropsCardParent() {

  let [products, setProducts] = useState(prd);

  let [productsCounter, setProductsCounter] = useState(
    products.map((ele) => ({ id: ele.id, counter: 0 }))
  );
  
  let increment = (eleId) => {
    var prdIndex = productsCounter.findIndex((ele) => ele.id === eleId);
    var element = productsCounter[prdIndex];
    element.counter += 1;
    productsCounter.splice(prdIndex,1,element);
    setProductsCounter(productsCounter);
    console.table(productsCounter);
  };

  let decrement = useCallback((eleId) => {
    var prdIndex = productsCounter.findIndex((ele) => ele.id === eleId);
    var element = productsCounter[prdIndex];
    element.counter -= 1;
    productsCounter.splice(prdIndex,1,element);
    setProductsCounter(productsCounter);
    console.table(productsCounter);
  }, [productsCounter]);

  return(
    <div className="container-fluid" style={{ paddingTop: "3px" }}>
      <div className="card-group">
        {products.map((ele) => (
          <PropsCard
            inc = {increment}
            dec = {decrement}
            key={"propsCard" + ele.id}
            id={ele.id}
            imgSrc={ele.imgSrc}
            title={ele.title}
            desc={ele.description}
            counter={
              productsCounter.find((e) => e.id === ele.id).counter
            }
          ></PropsCard>
        ))}
      </div>
    </div>);
}
