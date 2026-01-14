import React from "react";

const Cart = ({ cartItems }) => {
  if (!cartItems.length) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h3>Cart Items</h3>
      {cartItems.map((item) => (
        <p key={item.id}>
          {item.name} × {item.quantity}
        </p>
      ))}
    </div>
  );
};

export default Cart;
