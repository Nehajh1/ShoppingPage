import React from "react";
import "./Header.css";

const Header = ({
  searchTerm,
  setSearchTerm,
  activeType,
  setActiveType,
  cartItems
}) => {
  const cartCount = (cartItems || []).reduce(
  (total, item) => total + item.quantity,
  0
);

  return (
    <header className="header">
      <h2 className="logo">FragaNote</h2>

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

      <div className="cart">👤 {cartCount}</div>
      <div className="cart">🛒 {cartCount}</div>
    </header>
  );
};

export default Header;
