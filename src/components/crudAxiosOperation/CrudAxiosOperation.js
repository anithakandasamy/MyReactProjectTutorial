import React, { useEffect } from "react";
import { useState } from "react";

export default function CrudAxiosOperation({
  data,
  addEmployee,
  updateEmployee,
}) {
  let [name, setName] = useState("");
  let [department, setDepartment] = useState("");
  let [id, setId] = useState(0);

  let SaveEmployee =() => {
    id > 0 ? updateEmployee({id, name, department}) : addEmployee({id, name, department});
    setId(0);
    setName('');
    setDepartment('');
  }

  useEffect((data) => {
    if (data != null) {
        setName(data.name);
        setDepartment(data.department);
        setId(data.id);
    }
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <label htmlFor="name" className="col-form-label">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange = {(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="col-4">
            <label htmlFor="department" className="col-form-label">
              Department
            </label>
            <select name="department" value={department} className="form-select"
            onChange = {(e) => setDepartment(e.target.value)}>
              <option>Select Department</option>
              <option>Bill Pay</option>
              <option>Technology</option>
              <option>IST</option>
            </select>
          </div>
          <div className="col-4">
            <br></br>
            <button className="btn btn-success" onClick={() => SaveEmployee()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
