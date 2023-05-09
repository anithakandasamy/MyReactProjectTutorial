import React, { Component } from "react";
import PropTypes from 'prop-types'

import './Category.css'
export default class Category extends Component {
  render() {
    let { imgSrc, title } = this.props;

    return (
      <div className="col-sm-1 category">
        <img src={imgSrc} alt="category" />
        <span className="d-block text-center text-primary fw-bold">{title}</span>
      </div>
    );
  }
}

Category.propTypes = {
    imgSrc: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired
  };

Category.defaultProps = {
    imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/1350e22cff9663e7.png?q=100",
    title: "default"
}