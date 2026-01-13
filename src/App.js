import React, { useState } from "react";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import ProductGrid from "./components/ProductGrid";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeType, setActiveType] = useState("perfumes");

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeType={activeType}
        setActiveType={setActiveType}
      />

      <CategoryTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <ProductGrid
        searchTerm={searchTerm}
        activeCategory={activeCategory}
        activeType={activeType}
      />
    </>
  );
}

export default App;

