import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const NavbarStyle ={
  backgroundcolor: 'green',
  justifycontent:"flex-end"
};

const Navbar = () => (
  <nav style={NavbarStyle} className="navbar">
    <a style={NavbarStyle} href="/">Welcome</a>
  </nav>
);

export default Navbar;
