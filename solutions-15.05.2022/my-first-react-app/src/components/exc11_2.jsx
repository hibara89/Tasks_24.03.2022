import React from "react";
import "./style.css";

class CheckBox extends React.Component {
  state = { isChecked: this.props.isChecked };
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={() => {
            this.setState({ isChecked: !this.props.isChecked });
          }}
        />
        <label>{this.props.content}</label>
      </div>
    );
  }
}

export class Exc112 extends React.Component {
  state = { checked: "true" };
  render() {
    return (
      <div>
        <CheckBox content="I read the term of the app" />
        <CheckBox content="I accept the term of the app" />
        <CheckBox
          content="I want to get the weekly news letter"
          isChecked={this.state.checked}
        />
        <CheckBox
          content="I want to get sales and offers"
          isChecked={this.state.checked}
        />
      </div>
    );
  }
}
