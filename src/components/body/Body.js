import React from "react";
import "./Body.css";
import EmployeesCrud from "../employeesCrud/EmployeesCrud";

export default function Body() {
  return (
    <div className="container-fluid" style={{ marginTop: "2px" }}>
      <div className="row">
        <div
          className="col text-justify border rounded content"
          style={{ padding: "5px" }}
        >
         <EmployeesCrud></EmployeesCrud>
        </div>
      </div>
    </div>
  );
}
