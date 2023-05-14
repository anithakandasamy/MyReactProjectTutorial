import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";
import "./Employee.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

export default function Employee() {
  let [employees, setEmployee] = useState([
    {
      Id: 101,
      Name: "Anitha K",
      Department: "Technology",
      EmployeeType: "Full Time",
    },
    {
      Id: 103,
      Name: "Bhanu Chandar V",
      Department: "RCC",
      EmployeeType: "Part Time",
    },
    { Id: 102, Name: "Lithisha V", Department: "HR", EmployeeType: "Contract" },
  ]);

  const [Id, setId] = useState();
  const [Name, setName] = useState();
  const [Department, setDepartment] = useState("Select Department");
  const [EmployeeType, setEmployeeType] = useState("Select EmployeeType");
  const [itemOffset, setItemOffset] = useState(0);
  const [show, setShow] = useState(false);
  const [create, setCreate] = useState(true);

  const handleClose = () => {
    setShow(false);
    setId("");
    setName("");
    setDepartment("Select Department");
    setEmployeeType("Select EmployeeType");
  };

  const handleShow = (emp) => {
    if (emp === null) setCreate(true);
    else {
      setId(emp.Id);
      setName(emp.Name);
      setDepartment(emp.Department);
      setEmployeeType(emp.EmployeeType);
      setCreate(false);
    }
    setShow(true);
  };

  const itemsPerPage = 2;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = employees
    .sort((emp) => emp.Name)
    .slice(itemOffset, endOffset);
  const pageCount = Math.ceil(employees.length / itemsPerPage);

  let GetId = (e) => {
    setId(e.target.value);
  };

  let GetName = (e) => {
    setName(e.target.value);
  };

  let GetDepartment = (e) => {
    setDepartment(e.target.value);
  };

  let GetEmployeeType = (e) => {
    setEmployeeType(e.target.value);
  };

  let AddEmployee = () => {
    debugger
    let newEmployees = [...employees];
    let emp = {
      Id: Id,
      Name: Name,
      Department: Department,
      EmployeeType: EmployeeType,
    };
    newEmployees.push(emp);
    setEmployee(newEmployees);
    showAlert(
      `${emp.Id} - ${emp.Name}`,
      "Employee added successfully",
      "success"
    );
    handleClose();
  };

  let UpdateEmployee = () => {
    let empIndex = employees.findIndex((emp) => emp.Id === Id);
    if (empIndex !== -1) {
      let emp = Object.assign({}, employees[empIndex]);
      [emp.Id, emp.Name, emp.Department, emp.EmployeeType] = [
        Id,
        Name,
        Department,
        EmployeeType,
      ];
      let refreshedEmployees = [].concat(
        employees.slice(0, empIndex),
        emp,
        employees.slice(empIndex + 1)
      );
      setEmployee(refreshedEmployees);
      showAlert(
        `${emp.Id} - ${emp.Name}`,
        "Employee details updated successfully",
        "success"
      );
    } else {
      showAlert(
        `Employee ${Id} not found`,
        "Please Try after some time",
        "error"
      );
    }
    handleClose();
  };

  let RemoveEmployee = (empId) => {
    let empIndex = employees.findIndex((emp) => emp.Id === empId);
    if (empIndex !== -1) {
      let empName = employees[empIndex].Name;
      let refreshedEmployees = [].concat(
        employees.slice(0, empIndex),
        employees.slice(empIndex + 1)
      );
      setEmployee(refreshedEmployees);
      showAlert(
        `${empId} - ${empName}`,
        "Employee removed successfully",
        "success"
      );
    } else {
      showAlert(
        `Employee ${empId} not found`,
        "Please Try after some time",
        "error"
      );
    }
  };

  let showAlert = (title, text, icon) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      imageHeight: 100,
      imageAlt: "Product",
    });
  };

  let handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % employees.length;
    setItemOffset(newOffset);
  };

  return (
    <div style={{ minHeight: "200px" }}>
      <div className="container">
        <div className="row">
          <div className="col" style={{ marginTop: "10px" }}>
            <button
              className="btn bi bi-person-plus-fill border btn-primary"
              onClick={() => {
                handleShow(null);
              }}
              style={{ backgroundColor: "#5EB5D4" }}
            >
              {" "}
              Add New
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col text-left">
            <table
              className="table table-striped border"
              style={{ marginTop: "10px" }}
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>EmployeeType</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems
                  .sort((emp) => emp.Name)
                  .map((emp) => (
                    <tr key={"tr" + emp.Id}>
                      <td>{emp.Id}</td>
                      <td>{emp.Name}</td>
                      <td>{emp.Department}</td>
                      <td>{emp.EmployeeType}</td>
                      <td>
                        <button
                          onClick={() => {
                            handleShow(emp);
                          }}
                          className="btn bi bi-pencil-fill border"
                          style={{ marginRight: "3px" }}
                        ></button>
                        <button
                          onClick={() => {
                            RemoveEmployee(emp.Id);
                          }}
                          className="btn bi bi-person-x-fill border"
                        ></button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div>
              <ReactPaginate
                breakLabel={"..."}
                nextLabel="next >"
                previousLabel="< previous"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                containerClassName={"container pagination"}
                pageClassName={"item pagination-page "}
                previousClassName={"item previous"}
                nextClassName={"item next "}
                disabledClassName={"disabled-page"}
                activeClassName={"item active"}
                breakClassName={"item break-me "}
              ></ReactPaginate>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton data-toggle="validator" role="form">
            <Modal.Title>Employee Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col">
                  <label htmlFor="txtId" className="form-label">
                    Id
                  </label>
                  <input
                    type="number"
                    name="Id"
                    onChange={(e) => {
                      GetId(e);
                    }}
                    className="form-control"
                    id="txtId"
                    value={Id}
                    disabled={!create}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="txtName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      GetName(e);
                    }}
                    name="Name"
                    className="form-control"
                    id="txtName"
                    value={Name}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="drpDept" className="form-label">
                    Department
                  </label>
                  <select
                    id="drpDept"
                    name="Department"
                    className="form-select form-select-lg mb-3"
                    value={Department}
                    onChange={(e) => {
                      GetDepartment(e);
                    }}
                  >
                    <option disabled>Select Department</option>
                    <option>HR</option>
                    <option>RCC</option>
                    <option>Technology</option>
                    <option>BillPay</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="drpEmpType" className="form-label">
                    EmployeeType
                  </label>
                  <select
                    className="form-select form-select-lg mb-3"
                    id="drpEmpType"
                    name="EmployeeType"
                    value={EmployeeType}
                    onChange={(e) => {
                      GetEmployeeType(e);
                    }}
                  >
                    <option disabled>Select EmployeeType</option>
                    <option>Contract</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                  </select>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn" style={{ backgroundColor: "#5EB5D4" }} onClick={handleClose}>
              Close
            </button>
            <button
              onClick={() => {
                create === true ? AddEmployee() : UpdateEmployee();
              }}
              className="btn"
              style={{ backgroundColor: "#5EB5D4" }}
            >
              {create === true ? "Add Employee" : "Update Employee"}
            </button>
          </Modal.Footer>
      </Modal>
    </div>
  );
}
