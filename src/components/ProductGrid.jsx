import React from "react";
import "./ProductGrid.css";
import Laura from "./Images/laura.jpg"

const products = [
  {
    id: 1,
    name: "Aqua Wave",
    price: "₹899",
    mrp: "₹1499",
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f"
  },
  {
    id: 2,
    name: "Woody Musk",
    price: "₹999",
    mrp: "₹1699",
    image:
      Laura
  },
  {
    id: 3,
    name: "Floral Rush",
    price: "₹799",
    mrp: "₹1399",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539"
  },
  {
    id: 4,
    name: "Amber Night",
    price: "₹1099",
    mrp: "₹1799",
    image:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de"
  }
];

const ProductGrid = () => {
  return (
    <section className="products">
      <h2>New Launches</h2>

      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <div className="imageBox">
              <img src={p.image} alt={p.name} />
            </div>

            <h4>{p.name}</h4>

            <div className="price">
              <span className="sale">{p.price}</span>
              <span className="mrp">{p.mrp}</span>
            </div>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
