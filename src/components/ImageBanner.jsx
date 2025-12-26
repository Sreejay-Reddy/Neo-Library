import React from "react";
import "../styles/core.css";
import clsx from "clsx";

export function ImageBanner({
  image,
  title,
  subtitle,
  cta = "Explore",
  onClick,

  className = "",
  style,

  ctaClassName = "",
  ctaStyle
}) {
  return (
    <div
      className={clsx("neopop-image-banner", className)}
      style={style}
      onClick={onClick}
    >
      <div className="neopop-image-wrapper">
        <img src={image} alt={title} />
      </div>

      <div className="neopop-image-overlay">
        <h2>{title}</h2>

        {subtitle && <p>{subtitle}</p>}

        <button
          className={clsx("neopop-banner-cta", ctaClassName)}
          style={ctaStyle}
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
