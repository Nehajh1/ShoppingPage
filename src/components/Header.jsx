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

  const handleClick = (type) => {
    setActiveType(type);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        {/* LEFT */}
        <div className="headerLeft">
          <div
            className="hamburger"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </div>
          <h2 className="logo">Fraganote</h2>
        </div>

        {/* CENTER (DESKTOP ONLY) */}
        <nav className="nav">
          <span className={activeType === "perfumes" ? "active" : ""} onClick={() => handleClick("perfumes")}>Perfumes</span>
          <span className={activeType === "new" ? "active" : ""} onClick={() => handleClick("new")}>New Arrivals</span>
          <span className={activeType === "gifting" ? "active" : ""} onClick={() => handleClick("gifting")}>Gifting</span>
          <span className={activeType === "combos" ? "active" : ""} onClick={() => handleClick("combos")}>Combos</span>
        </nav>

        {/* RIGHT */}
        <div className="headerRight">
          <input
            type="text"
            placeholder="Search perfumes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="cart">🛒 ({totalItems})</div>
        </div>
      </header>

      {/* MOBILE SLIDE MENU */}
      {menuOpen && (
        <div className="mobileMenu">
          <div className="close" onClick={() => setMenuOpen(false)}>✕</div>
          <span onClick={() => handleClick("perfumes")}>Perfumes</span>
          <span onClick={() => handleClick("new")}>New Arrivals</span>
          <span onClick={() => handleClick("gifting")}>Gifting</span>
          <span onClick={() => handleClick("combos")}>Combos</span>
        </div>
      )}
    </>
  );
};

export default Header;
