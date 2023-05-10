import React, { Component } from "react";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
    };
  }

  TogglePassword = (e) => {
    console.log(e.target.checked)
    this.setState({ flag: e.target.checked });
  };

  render() {
    return (
      <div
        className="container border rounded"
        style={{
          margin: "5px",
          marginLeft: "12px",
          marginRight: "12px",
          width: "50%",
          minHeight: "250px",
          padding: "30px",
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <label for="inputEmail" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="name@example.com"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label for="inputPassword" class="form-label">
              Password
            </label>
            <input
              type={this.state.flag ? "text" : "password"}
              class="form-control"
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
              for="checkPassword"
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
