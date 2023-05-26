import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CrudAxiosListing from "../crudAxiosListing/CrudAxiosListing";
import CrudAxiosOperation from "../crudAxiosOperation/CrudAxiosOperation";
import Swal from "sweetalert2";

export default function CrudAxios() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState({});

  let showAlert = (msg) => {
    Swal.fire({
      title: "Employee Info",
      text: msg,
      icon: "success"
    });
  };

  let addEmployee = async (emp) => {
    try {
      emp.id = employees.sort(e => e.id).reverse()[0].id + 1
      var response = await axios.post("http://localhost:3002/employees",emp);
      showAlert(`Employee ${response.data.name} added successfully`)
    } catch (err) {
      console.log(`Add new employee failed ${err}`);
    }
  };

  let updateEmployee = async (emp) => {
    try {
      var response = await axios.put("http://localhost:3002/employees",emp);
    } catch (err) {
      console.log(`Update employee ${emp.id} failed ${err}`);
    }
  };

  let removeEmployee = async (id) => {
    try {
      var response = await axios.delete(`http://localhost:3002/employees/${id}`);
      console.log(response.data);
    } catch (err) {
      console.log(`Remove employee ${id} failed ${err}`);
    }
  };

  let getbyId = async (id) => {
    try {
      var response = await axios.get(`http://localhost:3002/employees/${id}`);
      console.log(response.data);
      setEditEmployee(Object.assign({},response.data));
    } catch (err) {
      console.log(`Get by employee id ${id} failed ${err}`);
    }
  };

  let getAll = async () => {
    try {
      var response = await axios.get("http://localhost:3002/employees");
      setEmployees(response.data);
    } catch (err) {
      console.log(`Get all employees failed ${err}`);
    }
  };

  useEffect(() => {
    getAll();
  });

  return (
    <>
      <CrudAxiosOperation data={editEmployee} addEmployee={addEmployee} updateEmployee={updateEmployee} ></CrudAxiosOperation>
      <hr />
      <CrudAxiosListing data={employees} removeEmployee={removeEmployee} getbyId={getbyId}></CrudAxiosListing>
    </>
  );
}
