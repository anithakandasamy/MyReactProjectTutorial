import React from "react";
import "./Body.css";
import CrudAxios from "../crudAxios/CrudAxios";
import { Routes, Route } from "react-router-dom";
// import ApiInvoke from "../apiInvoke/ApiInvoke";
// import EmployeesCrud from "../employeesCrud/EmployeesCrud";
import Card1 from "../card1/Card1";
import Carousel from "../carousel/Carousel"

export default function Body() {
  return (
    <Routes>
      <Route exact path="/" element={<Card1></Card1>}></Route>
      <Route path="*" element={<Carousel></Carousel>}></Route>
    </Routes>
  );
}
