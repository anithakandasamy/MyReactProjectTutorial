import React from "react";

export default function EmployeesCrudTable({employees}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <table className="table border striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>D.O.J</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Opted For</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => {
                var doj = new Date(emp.Doj);
                return (
                  <tr key={"tr" + emp.id}>
                    <td key={"id" + emp.id}>{emp.Id}</td>
                    <td key={"name" + emp.id}>{emp.Name}</td>
                    <td key={"doj" + emp.id}>{doj.getDate() + "-" + doj.getMonth() + "-" + doj.getFullYear()}</td>
                    <td key={"gender" + emp.id}>{emp.Gender}</td>
                    <td key={"dept" + emp.id}>{emp.Department}</td>
                    <td key={"opt" + emp.id}>{emp.OptedFor.join(", ")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
