import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h4>{product.name}</h4>

      <div className="price">
        <span>{product.price}</span>
        <span className="mrp">{product.mrp}</span>
      </div>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
