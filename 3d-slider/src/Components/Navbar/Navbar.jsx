import React from "react";
import "./Navbar.css";

const Navbar = ({ headerColor }) => {
  return (
    <div className="navbar">
      <div className="left-navbar-div" style={{ color: headerColor }}>
        <h1 className="clash-display">Fruity</h1>
      </div>
      <div className="center-navbar-div">
        <ul className="navbar-middle-list">
          <li>Shop</li>
          <li>About</li>
          <li>Careers</li>
          <li>Partnership</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="right-navbar-div">
        <ul className="navbar-right-list">
          <li>My Cart</li>
          <li>|</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
