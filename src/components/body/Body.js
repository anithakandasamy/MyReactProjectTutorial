import React from "react";
import "./Body.css";
import { Routes, Route } from "react-router-dom";
import EmployeesCrud from "../employeesCrud/EmployeesCrud";
import Card1 from "../card1/Card1";
import PropsCardParent from "../propsCardParent/PropsCardParent";
import Carousel from "../carousel/Carousel";
import Card from "../card/Card";
import Search from "../search/Search";
import SignIn from "../signIn/SignIn";
import StateCard from "../stateCard/StateCard";
import CardModalFunction from "../cardModalFunction/CardModalFunction";
import Comments from "../comments/Comments";
import NotFound from "../notFound/NotFound";
import Product from "../product/Product";

export default function Body() {
  return (
    <div className="container-fluid content border">
      <Routes>
        <Route exact path="/" element={<Card1></Card1>}></Route>
        <Route exact path="/Card" element={<Card></Card>}></Route>
        <Route
          exact
          path="/PropsDemo"
          element={<PropsCardParent></PropsCardParent>}
        ></Route>
        <Route
          exact
          path="/EmployeesCrud"
          element={<EmployeesCrud></EmployeesCrud>}
        ></Route>
        <Route
          exact
          path="/CardModalFunction"
          element={<CardModalFunction></CardModalFunction>}
        ></Route>
        <Route exact path="/Search" element={<Search></Search>}></Route>
        <Route exact path="/SignIn" element={<SignIn></SignIn>}></Route>
        <Route
          exact
          path="/StateCard"
          element={<StateCard></StateCard>}
        ></Route>
        <Route exact path="/Comments" element={<Comments></Comments>}></Route>
        <Route exact path="/Product/:id" element={<Product></Product>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}
