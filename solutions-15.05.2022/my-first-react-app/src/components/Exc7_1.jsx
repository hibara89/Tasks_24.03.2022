import React, { Component } from "react";

export class Increment extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}
