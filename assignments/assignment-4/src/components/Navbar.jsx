import React from "react";
import "./Navbar.css"; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navStyle">
      <a href="/" className="linkStyle">
        Home
      </a>
      <a href="/" className="linkStyle">
        About
      </a>
      <a href="/" className="linkStyle">
        Contact
      </a>
    </nav>
  );
};

export default NavBar;
