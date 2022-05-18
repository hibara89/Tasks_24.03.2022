import React, { Component } from "react";
import "./style.css";

export class Exc83 extends Component {
  state = {
    colors: ["yellow", "green", "blue", "aqua", "pink"],
    counter: 0,
    radius: "0%",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.colors.length - 1 < this.state.counter) {
      this.setState({ counter: 0, radius: "50%" });
    }

    setTimeout(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return (
      <div
        className="colorfulBox"
        style={{
          backgroundColor: this.state.colors[this.state.counter],
          borderRadius: this.state.radius,
        }}
      ></div>
    );
  }
}
