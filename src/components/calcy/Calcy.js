import React, { Component } from "react";

export default class Calcy extends Component {
  counter = 0;
  increment = () => {
    this.counter++;
    this.forceUpdate();
  };
  decrement = () => {
    if (this.counter > 0) {
      this.counter--;
      this.forceUpdate();
    }
  };
  render() {
    return (
      <>
        <div>Counter info {this.counter}</div>
        <button id="increment" onClick={() => this.increment()}>
          ++
        </button>
        <button id="decrement" onClick={() => this.decrement()}>
          --
        </button>
      </>
    );
  }
}
