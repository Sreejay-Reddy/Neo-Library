import React from "react";
import "../styles/core.css";

export function ProductCard({ image, title, price, onClick }) {
  return (
    <div className="neopop-product-card" onClick={onClick}>
      <div className="product-img-wrap">
        <img src={image} alt={title} className="product-img" />
      </div>

      <div className="product-info">
        <h3>{title}</h3>
        <p className="product-price">₹ {price}</p>
      </div>
    </div>
  );
}
