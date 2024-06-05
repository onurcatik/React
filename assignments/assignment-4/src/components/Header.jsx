import React from "react";
import "./Header.css";
import NavBar from "./Navbar";

const Header = () => {
  return (
    <header>
      <NavBar />
      <div className="header-content">
        <h1>Welcome to Our Website</h1>
        <p>Discover our services and how we can assist you.</p>
        <button>Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
