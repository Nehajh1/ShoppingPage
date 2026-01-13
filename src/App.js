import { useState } from "react";
import PromoBanner from "./components/PromoBanner";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <PromoBanner />
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryTabs />
      <ProductGrid searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default App;
