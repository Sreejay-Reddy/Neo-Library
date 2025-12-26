import React from "react";
import "../styles/core.css";
import clsx from "clsx";

export function ProductCard({
  image,
  title,
  price,
  onClick,

  // 🔓 styling hooks
  className = "",
  style,
  imageClassName = "",
  imageStyle,
  infoClassName = "",
  priceClassName = ""
}) {
  return (
    <div
      className={clsx("neopop-product-card", className)}
      style={style}
      onClick={onClick}
    >
      <div className="product-img-wrap">
        <img
          src={image}
          alt={title}
          className={clsx("product-img", imageClassName)}
          style={imageStyle}
        />
      </div>

      <div className={clsx("product-info", infoClassName)}>
        <h3>{title}</h3>
        <p className={clsx("product-price", priceClassName)}>
          ₹ {price}
        </p>
      </div>
    </div>
  );
}
