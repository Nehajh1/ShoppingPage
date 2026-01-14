import React from "react";
import "./ProductGrid.css";

import Laura from "./Images/laura.jpg"
import chanel from "./Images/chanel.jpg"
import perfume from "./Images/perfume.jpg"
import perfume1 from "./Images/perfume1.jpg"
import perfume2 from "./Images/perfume2.jpg"
import perfume3 from "./Images/perfume3.jpg"
import perfume4 from "./Images/perfume4.jpg"
import perfume5 from "./Images/perfume5.jpg"
import perfume6 from "./Images/perfume6.jpg"

const products = [
  { id: 1, name: "Aqua Wave", category: "men",type: "perfumes", price: "₹899", mrp: "₹1499", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f" },
  { id: 2, name: "Woody Musk", category: "unisex",type: "perfumes", price: "₹999", mrp: "₹1699", image: Laura },
  { id: 3, name: "Floral Rush", category: "women",type: "new", price: "₹799", mrp: "₹1399", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539" },
  { id: 4, name: "Amber Night", category: "women",type: "combos", price: "₹1099", mrp: "₹1799", image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de" },
  { id: 5, name: "Chanel",category: "unisex",type: "combos", price: "₹1029", mrp: "₹1899", image: chanel },
  { id: 6, name: "EAU DE",category: "men",type: "perfumes", price: "₹1000", mrp: "₹1500", image: perfume },
  { id: 7, name: "Bella Vita",category: "unisex",type: "gifting", price: "₹1399", mrp: "₹1999", image: perfume1 },
  { id: 8, name: "Velvet Aura",category: "women",type: "new", price: "₹1009", mrp: "₹1400", image: perfume2 },
  { id: 9, name: "Mystic Mists",category: "men",type: "perfumes", price: "₹700", mrp: "₹1000", image: perfume3 },
  { id: 10, name: "Lancôme",category: "women",type: "gifting", price: "₹2078", mrp: "₹4999", image: perfume4 },
  { id: 11, name: "Carolina Herrera",category: "men",type: "combos", price: "₹3033", mrp: "₹7087", image: perfume5 },
  { id: 12, name: "Davidoff",category: "unisex",type: "combos", price: "₹1899", mrp: "₹2799", image: perfume6 }
];


const ProductGrid = ({ searchTerm, activeCategory, activeType, addToCart }) => {
 const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;

    const matchesType =
      activeType === "perfumes" || product.type === activeType;

    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <section className="products">
      <div className="grid">
        {filteredProducts.length ? (
          filteredProducts.map((p) => (
            <div className="card" key={p.id}>
              <img src={p.image} alt={p.name} />
              <h4>{p.name}</h4>
              <p>{p.price} <span>{p.mrp}</span></p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No perfumes found</p>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
