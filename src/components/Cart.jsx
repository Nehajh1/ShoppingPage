import React from "react";
import "./Cart.css";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  if (cart.length === 0) {
    return ;
  }

  return (
    <div className="cartBox">
      <h3>Your Cart</h3>

      {cart.map((item) => (
        <div className="cartItem" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="details">
            <h4>{item.name}</h4>
            <p>{item.price}</p>

            <div className="qty">
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
