import React, { Component } from "react";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
    };
  }

  TogglePassword = (e) => {
    this.setState({ flag: e.target.checked });
  };

  render() {
    return (
      <div
        className="container border rounded"
        style={{
          margin: "5px",
          minHeight: "250px",
          marginRight:"0px",
          marginLeft:"12px",
        }}
      >
        <h3 className="text-center">Simple state implementation - Toggle masked input</h3>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="name@example.com"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              type={this.state.flag ? "text" : "password"}
              className="form-control"
              id="inputPassword"
            ></input>
          </div>
        </div>
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-md-6">
            <input
              className="form-check-input"
              id="checkPassword"
              type="checkbox"
              onChange={(e) => {
                this.TogglePassword(e);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="checkPassword"
              style={{ paddingLeft: "5px" }}
            >
              Show Password
            </label>
          </div>
        </div>
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-md-6">
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
