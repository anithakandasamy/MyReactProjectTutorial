import React, { Component } from "react";

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maxCharacters: 200,
    };
  }
  maxLimit = 200;

  CalculateRemainingLength = (e) => {
    var comments = e.target.value;
    if(e.keyCode !== 8 && e.keyCode !== 17 && e.keyCode !== 46 && comments.length>200){
      e.preventDefault();
      return;
    }    
    this.setState({ maxCharacters: this.maxLimit - comments.length });
  };

  render() {
    return (
      <div
        className="container border rounded"
        style={{
          margin:"5px",
          minHeight: "250px",
          marginLeft:"0px",
          marginRight:"2px"
        }}
      >
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="inputComments" className="form-label">
              Comments
            </label>
            <textarea
              className="form-control"
              id="inputComments"
              rows="3"
              maxLength={this.maxLimit}
              onKeyUp={(e) => {
                this.CalculateRemainingLength(e);
              }}
            ></textarea>
          </div>
        </div>
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-md-12">
            {this.state.maxCharacters} characters remaining
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
