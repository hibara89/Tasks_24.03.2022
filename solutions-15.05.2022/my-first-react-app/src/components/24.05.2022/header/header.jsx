import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const navstyle = {
  color: "white",
};

class Header extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav-links">
          <Link style={navstyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={navstyle} to="/products">
            <li>Products</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Header;
