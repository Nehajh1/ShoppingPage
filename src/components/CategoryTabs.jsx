import React from "react";
import "./CategoryTabs.css";

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="categoryTabs">
      <button className={activeCategory === "all" ? "active" : ""} onClick={() => setActiveCategory("all")}>
        All
      </button>
      <button className={activeCategory === "men" ? "active" : ""} onClick={() => setActiveCategory("men")}>
        Men
      </button>
      <button className={activeCategory === "women" ? "active" : ""} onClick={() => setActiveCategory("women")}>
        Women
      </button>
      <button className={activeCategory === "unisex" ? "active" : ""} onClick={() => setActiveCategory("unisex")}>
        Unisex
      </button>
    </div>
  );
};

export default CategoryTabs;
