import React, { useRef } from "react";
import "./Insta.css";

import icon from "./Images/instaicon.png";
import insta1 from "./Images/p1.jpg";
import insta2 from "./Images/p2.jpg";
import insta3 from "./Images/p3.jpg";
import insta4 from "./Images/p4.jpg";
import insta5 from "./Images/p5.jpg";
import insta6 from "./Images/p6.jpg";
import insta7 from "./Images/p7.jpg";

const instagramImages = [
  { id: 1, image: insta1 },
  { id: 2, image: insta2 },
  { id: 3, image: insta3 },
  { id: 4, image: insta4 },
  { id: 5, image: insta5 },
  { id: 6, image: insta6 },
  { id: 7, image: insta7 },
  { id: 8, image: insta4 },
  { id: 9, image: insta5 },
  { id: 10, image: insta2 },
];

const OurInstagram = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="instagramSection">
      <div className="instagramHeader">
        <h2>Our Instagram</h2>

        <div className="arrows">
          <button onClick={scrollLeft}>‹</button>
          <button onClick={scrollRight}>›</button>
        </div>
      </div>

      <div className="instagramRow" ref={sliderRef}>
        {instagramImages.map((item) => (
          <div className="instaCard" key={item.id}>
            <img src={item.image} alt="Instagram post" />

            <img
              src={icon}
              alt="Instagram"
              className="instaIcon"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurInstagram;
