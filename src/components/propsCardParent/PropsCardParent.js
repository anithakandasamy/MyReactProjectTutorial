import React, { useCallback, useMemo, useState } from "react";
import PropsCard from "../propsCard/PropsCard";
import prd from "./productsInfo.json";

export default function PropsCardParent() {
  function loadInitialData() {
    return prd.map((ele) => {
      let p = ele;
      p.counter = 0;
      return p;
    });
  }

  let data = useMemo(() => loadInitialData(),[]);
  
  let [products, setProducts] = useState(data);

  let increment = (eleId) => {
    var prdIndex = products.findIndex((ele) => ele.id === eleId);
    var element = Object.assign({}, products[prdIndex]);
    if (element.counter < 10) element.counter += 1;
    let newProducts = [...products];
    newProducts.splice(prdIndex, 1, element);
    setProducts(newProducts);
  };

  let decrement = useCallback(
    (eleId) => {
      var prdIndex = products.findIndex((ele) => ele.id === eleId);
      var element = Object.assign({}, products[prdIndex]);
      if (element.counter > 0) element.counter -= 1;
      let newProducts = [...products];
      newProducts.splice(prdIndex, 1, element);
      setProducts(newProducts);
    },
    [products]
  );

  return (
    <div className="container-fluid" style={{ paddingTop: "3px" }}>
      <h3 className="text-center">Demo using Props - Child to Parent communication</h3>
      <div className="card-group">
        {products.map((ele) => (
          <PropsCard
            inc={increment}
            dec={decrement}
            key={"propsCard" + ele.id}
            id={ele.id}
            imgSrc={ele.imgSrc}
            title={ele.title}
            desc={ele.description}
            counter={ele.counter}
          ></PropsCard>
        ))}
      </div>
    </div>
  );
}
