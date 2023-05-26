import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiInvoke() {
  const [employees, setEmployees] = useState([]);

  let ShowPopUp = async (id) => {
    // var response = await fetch(`http://localhost:3002/employees/${id}`);
    // var data = await response.json();
    // console.log(data);

    let response = await axios.get(`http://localhost:3002/employees/${id}`);
    console.log(response.data);
  };

  //   useEffect(() => {
  //     fetch("http://localhost:3002/employees")
  //       .then((response) => response.json())
  //       .then((data) => setEmployees(data))
  //       .catch((err) => console.log(err));
  //   });

  const getEmps = async function () {
    let response = await axios.get("http://localhost:3002/employees");
    setEmployees(response.data);
  };

  useEffect(() => {
    getEmps();
  });

  return (
    <>
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Gender</th>
            <th>D.O.J</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr>
                <td>{emp.name}</td>
                <td>{emp.gender}</td>
                <td>{emp.doj}</td>
                <td>{emp.department}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => ShowPopUp(emp.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
