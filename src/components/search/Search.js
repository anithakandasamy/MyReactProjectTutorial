import React, { useState } from "react";
import SearchBar from "react-js-search";
import Products from "./productsInfo.json";

export default function Search() {
  let [initialData] = useState(Products);
  let [filteredProducts, setFilteredProduct] = useState(Products);

  let SearchChange = (searchText, filteredData) => {
    setFilteredProduct(filteredData);
  };

  let onSearchClick = (searchText) => {
    setFilteredProduct(
      initialData.filter((prd) => JSON.stringify(prd).includes(searchText))
    );
  };

  let sort = (orderby) => {
    let data = [...filteredProducts];
    data.sort((a, b) => a.price - b.price);
    if (orderby === "desc") data.reverse();
    setFilteredProduct(data);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <SearchBar
              onSearchTextChange={(searchText, filteredData) => {
                SearchChange(searchText, filteredData);
              }}
              onSearchButtonClick={onSearchClick}
              data={initialData}
            />
            <div className="text-primary text-center">
              {filteredProducts.length} items found out of {initialData.length}
            </div>
          </div>
          <div className="col-md-4">
            <button
              key="btnSortAsc"
              className="btn btn-primary bi bi-sort-up"
              style={{ backgroundColor: "#5EB5D4" }}
              onClick={() => {
                sort("asc");
              }}
            >
              Low to High
            </button>
          </div>
          <div className="col-md-4">
            <button
              key="btnSortDesc"
              className="btn btn-primary bi bi-sort-down"
              style={{ backgroundColor: "#5EB5D4" }}
              onClick={() => {
                sort("desc");
              }}
            >
              High to Low
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredProducts.map((element) => (
          <div className="col" key={"crd1" + element.id}>
            <div key={"crd2" + element.id} className="card h-100 text-justify">
              <img
                key={"img" + element.id}
                src={element.image}
                className="card-img-top"
                alt="..."
                style={{ height: "200px", width: "200px", marginLeft: "35%" }}
              />
              <div key={"crd3" + element.id} className="card-body">
                <h5
                  key={"tit1" + element.id}
                  className="card-title text-success text-center"
                >
                  {element.price} INR
                </h5>
                <h5
                  key={"tit" + element.id}
                  className="card-title text-primary text-center"
                >
                  {element.title}
                </h5>
                <p key={"desc" + element.id} className="card-text">
                  {element.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
