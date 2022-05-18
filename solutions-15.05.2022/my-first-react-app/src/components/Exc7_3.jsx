import React, { Component } from "react";
import "./style.css";

export class Exc73 extends Component {
  constructor() {
    super();
    this.state = { counter: 1 };
    console.log(this.state);
  }
  Add = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  Dec = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <button onClick={this.Add}>Add</button>
        <div className="num">{this.state.counter}</div>
        <button onClick={this.Dec}>Decrement</button>
      </div>
    );
  }
}
