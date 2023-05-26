import React, { Component } from "react";
import EmployeesCrudTable from "../employeesCrudTable/EmployeesCrudTable";
import EmployeesCrudCard from "../employeesCrudCard/EmployeesCrudCard";
import EmployeesCrudAddEmp from "../employeesCrudAddEmp/EmployeesCrudAddEmp";

export default class EmployeesCrud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          Id: 101,
          Name: "Anitha",
          Gender: "Female",
          Department: "Technology",
          OptedFor: ["Cab", "Food", "Sodexo"],
          Doj: "12/02/2023",
        },
        {
          Id: 102,
          Name: "Bhanu Chandar",
          Gender: "Male",
          Department: "RCC",
          OptedFor: ["Food", "Cab"],
          Doj: "03/09/2021"
        },
        {
          Id: 103,
          Name: "Lithisha Virigineni",
          Gender: "Female",
          Department: "BillPay",
          OptedFor: ["Sudexo", "Cab"],
          Doj: "03/23/2023"
        }
      ],
      showCard: true,
    };
  }

  addEmployee = (employee) => {
    var currentData = [...this.state.employees];
    employee.Id = currentData.length + 101;
    currentData.push(employee);
    this.setState({employees: currentData});
  }

  render() {
    return (
      <>
        <EmployeesCrudAddEmp
          addEmployee={this.addEmployee}
        ></EmployeesCrudAddEmp>
        <hr />
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onChange={(e) => {
              this.setState({ showCard: e.target.checked });
            }}
            checked={this.state.showCard}
          ></input>
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            View as Cards
          </label>
        </div>
        <hr />
        {this.state.showCard ? (
          <EmployeesCrudCard
            key={"emp_card"}
            employees={this.state.employees}
          ></EmployeesCrudCard>
        ) : (
          <EmployeesCrudTable
            key={"emp_table"}
            employees={this.state.employees}
          ></EmployeesCrudTable>
        )}
      </>
    );
  }
}
