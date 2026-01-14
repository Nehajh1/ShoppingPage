import React, { useState } from "react";

import OfferBar from "./components/OfferBar";
import PromoBanner from "./components/PromoBanner";
import Header from "./components/Header";
import AdBanner from "./components/AdBanner";
import CategoryTabs from "./components/CategoryTabs";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import WatchBuy from "./components/Watch&Buy";
import NewLaunches from "./components/Newlaunches";
import CustomerReviews from "./components/CustomerReview";
import OurInstagram from "./components/Insta";




function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeType, setActiveType] = useState("perfumes");
  const [cart, setCart] = useState([]);

   const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);

      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === productId ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };
  return (
    <>
    <OfferBar/>
    <PromoBanner/>
        <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cart={cart}
        activeType={activeType}
        setActiveType={setActiveType}
      />

      <AdBanner/>
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
      <WatchBuy/>
      <NewLaunches
      addToCart={addToCart}
      />
      <Cart
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      />
      <CustomerReviews/>
      <OurInstagram/>
      <Footer/>
    </>
  );
}

export default App;

