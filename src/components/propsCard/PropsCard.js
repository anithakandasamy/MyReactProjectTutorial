import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PropsCard extends Component {
  render() {
    let { id, imgSrc, title, desc, counter, inc, dec } = this.props;
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
            <h5 key={"tit" + id} className="card-title text-primary">
              Using Props - {title}
            </h5>
            <p key={"desc" + id} className="card-text text-muted">
              {desc}
            </p>
            <button
              key={"dec" + id}
              className="btn btn-success"
               onClick={() => dec(id)}
            >
              -
            </button>
            <span
              key={"cnt" + id}
              className="badge bg-success counter"
              style={{ padding: "12px" }}
            >
              {counter}
            </span>
            <button
              key={"inc" + id}
              className="btn btn-success"
              onClick={() => inc(id)}
            >
              +
            </button>
          </div>
        </div>
      </>
    );
  }
}

PropsCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  desc: PropTypes.string.isRequired, 
  counter: PropTypes.number.isRequired
};
