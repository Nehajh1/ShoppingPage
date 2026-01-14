import React, { useRef } from "react";
import "./Watch&Buy.css";

import video1 from "./Videos/video1.mp4";
import video2 from "./Videos/video2.mp4";
import video3 from "./Videos/video3.mp4";
import video4 from "./Videos/video4.mp4";
import video5 from "./Videos/video5.mp4";
import video6 from "./Videos/video6.mp4";
import video7 from "./Videos/video7.mp4";
import video8 from "./Videos/video8.mp4";
import video9 from "./Videos/video9.mp4";
import video10 from "./Videos/video10.mp4"; 

const watchBuyItems = [
  { id: 1, src: video1, name: "Luxury Fragrance", price: "₹899", mrp: "₹1499" },
  { id: 2, src: video2, name: "Daily Wear Perfume", price: "₹999", mrp: "₹1699" },
  { id: 3, src: video3, name: "Premium Collection", price: "₹799", mrp: "₹1399" },
  { id: 4, src: video4, name: "Limited Edition", price: "₹1099", mrp: "₹1799" },
  { id: 5, src: video5, name: "Evening Bliss", price: "₹1299", mrp: "₹2199" },
  { id: 6, src: video6, name: "Morning Fresh", price: "₹699", mrp: "₹1199" },
  { id: 7, src: video7, name: "Velvet Aura", price: "₹1009", mrp: "₹1400" },
  { id: 8, src: video8, name: "Mystic Mists", price: "₹700", mrp: "₹1000" },
  { id: 9, src: video9, name: "Lancôme", price: "₹2078", mrp: "₹4999" },
  { id: 10, src: video10, name: "Davidoff", price: "₹1899", mrp: "₹2799" }
];

const WatchBuy = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const getDiscount = (price, mrp) => {
    const p = parseInt(price.replace(/₹|,/g, ""));
    const m = parseInt(mrp.replace(/₹|,/g, ""));
    return Math.round(((m - p) / m) * 100);
  };

  return (
    <section className="watchBuy">
      <div className="watchHeader">
        <h2>Watch & Buy</h2>
        <div className="arrows">
          <button onClick={scrollLeft}>‹</button>
          <button onClick={scrollRight}>›</button>
        </div>
      </div>

      <div className="watchSlider" ref={sliderRef}>
        {watchBuyItems.map((item) => (
          <div className="watchCard" key={item.id}>
            <video src={item.src} autoPlay loop muted playsInline controls />
            <div className="videoInfo">
              <h4>{item.name}</h4>
              <div className="prices">
                <span className="sale">{item.price}</span>
                <span className="mrp">{item.mrp}</span>
                <span className="discount">{getDiscount(item.price, item.mrp)}% off</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WatchBuy;
