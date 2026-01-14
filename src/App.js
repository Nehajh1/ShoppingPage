import React, { useState } from "react";

import PromoBanner from "./components/PromoBanner";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeType, setActiveType] = useState("perfumes");

  return (
    <>
    <PromoBanner/>
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
      <Footer/>
    </>
  );
}

export default App;

