import React from "react";

export default function CrudAxiosListing({ data, getbyId, removeEmployee }) {
  let retrieveInfo = (id) => {
    debugger
    getbyId(id);
  };

  let remove = (id) => {
    removeEmployee(id);
  };

  return (
    <>
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Name</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => {
            return (
              <tr key={"tr" + emp.id}>
                <td key={"id" + emp.id}>{emp.id}</td>
                <td key={"name" + emp.id}>{emp.name}</td>
                <td key={"dept" + emp.id}>{emp.department}</td>
                <td>
                  <button
                    className="btn bi bi-pen-fill"
                    onClick={() => {
                      retrieveInfo(emp.id);
                    }}
                  ></button>
                  <button
                    className="btn bordered bi bi-archive-fill"
                    onClick={() => {
                      remove(emp.id);
                    }}
                  ></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
