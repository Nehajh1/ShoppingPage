import React from "react";
import "./Header.css";

const Header = ({ searchTerm, setSearchTerm,activeType, setActiveType, cart }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="header">
      <h2>Fraganote</h2>
      <nav className="nav">
        <span className={activeType === "perfumes" ? "active" : ""} onClick={() => setActiveType("perfumes")}>
          Perfumes
        </span>
        <span className={activeType === "new" ? "active" : ""} onClick={() => setActiveType("new")}>
          New Arrivals
        </span>
        <span className={activeType === "gifting" ? "active" : ""} onClick={() => setActiveType("gifting")}>
          Gifting
        </span>
        <span className={activeType === "combos" ? "active" : ""} onClick={() => setActiveType("combos")}>
          Combos
        </span>
      </nav>


      <input
        type="text"
        placeholder="Search perfumes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="cart">
        🛒 Cart ({totalItems})
      </div>
    </header>
  );
};

export default Header;

