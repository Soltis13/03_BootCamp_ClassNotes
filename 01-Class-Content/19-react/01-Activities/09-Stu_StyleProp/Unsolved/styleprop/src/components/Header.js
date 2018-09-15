import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads
const HeaderStyle = {
  backgroundcolor: 'red',
  fontsize: "100px"
};




const Header = () => (
  <header className="header">
    <h1 style={HeaderStyle}>Welcome</h1>
  </header>
);

export default Header;
