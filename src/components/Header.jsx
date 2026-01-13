import React from "react";
import "./Header.css";

const Header = ({ searchTerm, setSearchTerm, activeType, setActiveType }) => {
  return (
    <header className="header">
      <div className="headerLeft">
        <h1 className="logo">FRAGANOTE</h1>

       <nav className="nav">
        <span
          className={activeType === "perfumes" ? "active" : ""}
          onClick={() => setActiveType("perfumes")}
        >
          Perfumes
        </span>

        <span
          className={activeType === "new" ? "active" : ""}
          onClick={() => setActiveType("new")}
        >
          New Arrivals
        </span>

        <span
          className={activeType === "gifting" ? "active" : ""}
          onClick={() => setActiveType("gifting")}
        >
          Gifting
        </span>

        <span
          className={activeType === "combos" ? "active" : ""}
          onClick={() => setActiveType("combos")}
        >
          Combos
        </span>
      </nav>
      </div>

      <div className="headerRight">
        <input
          type="text"
          placeholder="Search perfumes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span>👤</span>
        <span>🛒</span>
      </div>
    </header>
  );
};

export default Header;

