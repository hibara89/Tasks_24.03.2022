import React from "react";
import "./style2.css";
import SearchBar from "./SearchBar";
import { render } from "@testing-library/react";

class AppCar extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default AppCar;
