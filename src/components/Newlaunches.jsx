import React from "react";
import "./Newlaunches.css";

import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";
import img7 from "./Images/img7.jpg";
import img8 from "./Images/img8.jpg";

const newLaunches = [
  {
    id: 1,
    name: "Aqua Fresh",
    price: "₹899",
    mrp: "₹1499",
    image: img1
  },
  {
    id: 2,
    name: "Velvet Oud",
    price: "₹999",
    mrp: "₹1699",
    image: img2
  },
  {
    id: 3,
    name: "Floral Bloom",
    price: "₹799",
    mrp: "₹1399",
    image: img3
  },
  {
    id: 4,
    name: "Midnight Musk",
    price: "₹1099",
    mrp: "₹1799",
    image: img4
  },
  {
    id: 5,
    name: "Dusky",
    price: "₹567",
    mrp: "₹1678",
    image: img7
  },
  {
    id: 6,
    name: "Sunflower&orchid",
    price: "₹879",
    mrp: "₹1999",
    image: img8
  }
];

const NewLaunches = ({ addToCart }) => {
  return (
    <section className="newLaunches">
      <h2>New Launches</h2>

      <div className="launchGrid">
        {newLaunches.map((item) => (
          <div className="launchCard" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h4>{item.name}</h4>

            <div className="priceBox">
              <span className="sale">{item.price}</span>
              <span className="mrp">{item.mrp}</span>
            </div>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewLaunches;
