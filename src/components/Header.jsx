import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="headerLeft">
        <h1 className="logo">FRAGANOTE</h1>

        <nav className="nav">
          <a href="#">Perfumes</a>
          <a href="#">New Arrivals</a>
          <a href="#">Gifting</a>
          <a href="#">Combos</a>
        </nav>
      </div>

      <div className="headerRight">
        <input type="text" placeholder="Search perfumes" />
        <span>👤</span>
        <span>🛒</span>
      </div>
    </header>
  );
};

export default Header;
