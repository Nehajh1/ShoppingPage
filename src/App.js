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
  const [cart, setCart] = useState([]);

  // ✅ REAL ADD TO CART LOGIC
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  return (
    <>
    <PromoBanner/>
        <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cart={cart}
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
        addToCart={addToCart}
        activeType={activeType}
        
      />
      <Footer/>
    </>
  );
}

export default App;

