import React, { useState } from "react";
import "./CategoryTabs.css";

const CategoryTabs = () => {
  const [active, setActive] = useState("HIM");

  return (
    <div className="tabs">
      {["HIM", "HER", "UNISEX"].map((tab) => (
        <button
          key={tab}
          className={active === tab ? "active" : ""}
          onClick={() => setActive(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
