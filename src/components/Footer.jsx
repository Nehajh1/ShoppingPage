import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerOverlay">
        <div className="footerContainer">

          {/* SUPPORT */}
          <div className="footerColumn">
            <h4>Support</h4>
            <ul>
              <li>About Us</li>
              <li>Terms & Services</li>
              <li>About</li>
              <li>Forgiveness</li>
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div className="footerColumn">
            <h4>Subscribe</h4>
            <p>
              Enter your email below to be the first to know about new collections
              and product launches.
            </p>

            <div className="subscribeBox">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

          {/* ORDER & SHIPPING */}
          <div className="footerColumn">
            <h4>Order & Shipping</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Delivery & Returns Policy</li>
              <li>Shipping Policy</li>
              <li>Track My Order</li>
            </ul>
          </div>

        </div>

        <div className="footerBottom">
          © 2026 FragaNote. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
