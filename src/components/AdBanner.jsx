import React from "react";
import "./AdBanner.css";
import banner from "./Images/ad1.webp";

const AdBanner = () => {
  return (
    <div className="adBanner">
      <img src={banner} alt="Advertisement Banner" />
    </div>
  );
};

export default AdBanner;
