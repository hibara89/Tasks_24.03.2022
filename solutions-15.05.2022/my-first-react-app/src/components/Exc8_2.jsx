import React, { Component } from "react";
import "./style.css";

export class Exc82 extends Component {
  constructor() {
    super();
    this.state = { box: "unvisible" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ box: "visible" });
    }, 1000);
  }
  componentWillUnmount() {
    setTimeout(() => {
      this.setState({ box: "unvisible" });
    }, 4000);
  }

  render() {
    return (
      <div>
        <div id="box1" className={this.state.box}></div>
        <div id="box2" className={this.state.box}></div>
        <div id="box3" className={this.state.box}></div>
      </div>
    );
  }
}
