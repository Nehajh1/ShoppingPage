import React from "react";
import "./CustomerReview.css";

const reviews = [
  {
    id: 1,
    name: "Ananya Sharma",
    rating: 5,
    comment: "Absolutely loved the fragrance! Long-lasting and premium quality."
  },
  {
    id: 2,
    name: "Rohit Verma",
    rating: 4,
    comment: "Very refreshing scent. Packaging was also excellent."
  },
  {
    id: 3,
    name: "Sneha Patel",
    rating: 5,
    comment: "Best perfume I’ve bought online. Will order again!"
  },
  {
    id: 4,
    name: "Amit Singh",
    rating: 4,
    comment: "Great value for money. The smell lasts all day."
  }
];

const CustomerReviews = () => {
  return (
    <section className="reviews">
      <h2>LOVED BY 2 LAKH+ CUSTOMERS</h2>

      <div className="reviewRow">
        {reviews.map((review) => (
          <div className="reviewCard" key={review.id}>
            <div className="stars">
              {"⭐".repeat(review.rating)}
            </div>
            <p className="comment">“{review.comment}”</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
