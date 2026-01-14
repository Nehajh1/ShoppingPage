import React, { useState } from "react";
import "./Header.css";

const Header = ({
  searchTerm,
  setSearchTerm,
  activeType,
  setActiveType,
  cart
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleMenuClick = (type) => {
    setActiveType(type);
    setMenuOpen(false); // close menu after click
  };

  return (
    <header className="header">
      {/* Logo */}
      <h2 className="logo">Fraganote</h2>

      {/* Desktop Navigation */}
      <nav className="nav">
        <span
          className={activeType === "perfumes" ? "active" : ""}
          onClick={() => handleMenuClick("perfumes")}
        >
          Perfumes
        </span>
        <span
          className={activeType === "new" ? "active" : ""}
          onClick={() => handleMenuClick("new")}
        >
          New Arrivals
        </span>
        <span
          className={activeType === "gifting" ? "active" : ""}
          onClick={() => handleMenuClick("gifting")}
        >
          Gifting
        </span>
        <span
          className={activeType === "combos" ? "active" : ""}
          onClick={() => handleMenuClick("combos")}
        >
          Combos
        </span>
      </nav>

      {/* Search */}
      <input
        className="searchInput"
        type="text"
        placeholder="Search perfumes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Cart */}
      <div className="cart">🛒 Cart ({totalItems})</div>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobileMenu">
          <span onClick={() => handleMenuClick("perfumes")}>Perfumes</span>
          <span onClick={() => handleMenuClick("new")}>New Arrivals</span>
          <span onClick={() => handleMenuClick("gifting")}>Gifting</span>
          <span onClick={() => handleMenuClick("combos")}>Combos</span>
        </div>
      )}
    </header>
  );
};

export default Header;
