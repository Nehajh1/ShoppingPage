import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="cols">
        <div>
          <h3>FRAGANOTE</h3>
          <p>Premium fragrances crafted for every moment.</p>
        </div>

        <div>
          <h4>SHOP</h4>
          <a>Perfumes</a>
          <a>New Arrivals</a>
          <a>Gifting</a>
        </div>

        <div>
          <h4>SUPPORT</h4>
          <a>FAQs</a>
          <a>Contact</a>
          <a>Shipping</a>
        </div>
      </div>

      <p className="copy">© 2026 Fraganote</p>
    </footer>
  );
};

export default Footer;
