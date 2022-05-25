import React from "react";

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index} onClick={this.props.deleteTask.bind(this, index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
