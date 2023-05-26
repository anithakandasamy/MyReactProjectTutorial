import React from "react";
import { memo } from "react";

function EmployeesCrudCard({ employees }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {employees.map((emp) => (
        <div className="col" key={"crd1" + emp.Id}>
          <div className="card text-center">
            <div>Id: {emp.Id}</div>
            <div>Name: {emp.Name}</div>
            <div>Gender: {emp.Gender}</div>
            <div>Department: {emp.Department}</div>
            <div>
              D.O.J:{" "}
              {new Date(emp.Doj).getDate() +
                "-" +
                new Date(emp.Doj).getMonth() +
                "-" +
                new Date(emp.Doj).getFullYear()}
            </div>
            <div>opted For: {emp.OptedFor.join(", ")}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(EmployeesCrudCard);
