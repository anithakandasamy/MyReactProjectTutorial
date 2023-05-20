import React from "react";
import { useState } from "react";

export default function EmployeesCrudAddEmp({addEmployee}) {
  let SubmitHandler = (event) => {
    event.preventDefault();
    addEmployee(employee);
    setEmployee(getDefault);
  };

  let getDefault = () => {
    return {
      Id: "",
      Name: "",
      Department: "",
      Gender: "Male",
      Doj: "",
      OptedFor: [],
    };
  };

  let handleGenderChange = (e) => {
    setEmployee({ ...employee, Gender: e.target.value });
  };

  let handleOptedForChange = (e) => {
    let options = [...employee.OptedFor];
    if (!e.target.checked) {
      var index = options.findIndex((o) => o === e.target.value);
      if (index !== -1) options.splice(index, 1);
    } else options.push(e.target.value);
    setEmployee({ ...employee, OptedFor: options });
  };

  const [employee, setEmployee] = useState(getDefault);

  return (
    <form className="row g-3" onSubmit={SubmitHandler}>
      <div className="col-sm-4">
        <label className="col-form-label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="name"
          value={employee.Name}
          onChange={(e) => setEmployee({ ...employee, Name: e.target.value })}
        ></input>
      </div>
      <div className="col-sm-4">
        <label className="col-form-label" htmlFor="doj">
          Date of Joining
        </label>
        <input
          type="date"
          className="form-control form-control-sm"
          id="doj"
          value={employee.Doj}
          onChange={(e) => setEmployee({ ...employee, Doj: e.target.value })}
        ></input>
      </div>
      <div className="col-sm-4">
        <label className="col-form-label" htmlFor="department">
          Department
        </label>
        <select
          id="department"
          className="form-select"
          value={employee.Department}
          onChange={(e) => {
            setEmployee({ ...employee, Department: e.target.value });
          }}
        >
          <option selected>Select Department</option>
          <option value="Technology">Technology</option>
          <option value="RCC">RCC</option>
          <option value="BillPay">BillPay</option>
          <option value="IST">IST</option>
        </select>
      </div>
      <div className="col-sm-4">
        <div className="form-check form-check-inline">
          <input
            type="radio"
            className="form-check-input"
            id="gender1"
            value="Male"
            name="gender"
            onChange={handleGenderChange}
            checked={employee.Gender === "Male" ? true : false}
          ></input>
          <label className="form-check-label" htmlFor="gender1">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            className="form-check-input"
            id="gender2"
            value="Female"
            name="gender"
            onChange={handleGenderChange}
            checked={employee.Gender === "Female" ? true : false}
          ></input>
          <label className="form-check-label" htmlFor="gender2">
            Female
          </label>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="optedfor1"
            value="Cab"
            onChange={handleOptedForChange}
            checked={employee.OptedFor.findIndex((o) => o === "Cab") !== -1}
          ></input>
          <label className="form-check-label" htmlFor="optedfor1">
            Cab
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="optedfor2"
            value="Food"
            onChange={handleOptedForChange}
            checked={employee.OptedFor.findIndex((o) => o === "Food") !== -1}
          ></input>
          <label className="form-check-label" htmlFor="optedfor2">
            Food
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="optedfor3"
            value="Sodexo"
            onChange={handleOptedForChange}
            checked={employee.OptedFor.findIndex((o) => o === "Sodexo") !== -1}
          ></input>
          <label className="form-check-label" htmlFor="optedfor3">
            Sodexo
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="optedfor4"
            value="FlexiPay"
            onChange={handleOptedForChange}
            checked={
              employee.OptedFor.findIndex((o) => o === "FlexiPay") !== -1
            }
          ></input>
          <label className="form-check-label" htmlFor="optedfor4">
            FlexiPay
          </label>
        </div>
      </div>
      <div className="col-sm-4">
        <input
          type="submit"
          value="Add Employee"
          className="btn btn-primary"
        ></input>
      </div>
    </form>
  );
}
