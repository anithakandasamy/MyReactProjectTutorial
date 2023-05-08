import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PropsCard extends Component {
  render() {
    let { id, imgSrc, title, desc, cntr } = this.props;
    return (
      <>
        <div className="card" key={"cnt" + id}>
          <img
            key={"img" + id}
            src={imgSrc}
            className="card-img-top"
            alt="..."
          />
          <div key={"crd" + id} className="card-body">
            <h5 key={"tit" + id} className="card-title">
              {title}
            </h5>
            <p key={"desc" + id} className="card-text">
              {desc}
            </p>
            <button
              key={"inc" + id}
              className="btn btn-success"
              // onClick={() => this.increment(id)}
            >
              +
            </button>
            <span
              key={"cnt" + id}
              className="badge bg-success counter"
              style={{ padding: "12px" }}
            >
              {cntr}
            </span>
            <button
              key={"dec" + id}
              className="btn btn-success"
              // onClick={() => this.decrement(id)}
            >
              -
            </button>
          </div>
        </div>
      </>
    );
  }
}

PropsCard.propTypes = {
  id: PropTypes.number.isRequired,
};
