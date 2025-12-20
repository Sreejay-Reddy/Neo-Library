import React from "react";

export function ImageBanner({
  image,
  title,
  subtitle,
  cta = "Explore",
  onClick
}) {
  return (
    <div className="neopop-image-banner" onClick={onClick}>
      <div className="neopop-image-wrapper">
        <img src={image} alt={title} />
      </div>

      <div className="neopop-image-overlay">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        <button className="neopop-banner-cta">{cta}</button>
      </div>
    </div>
  );
}
