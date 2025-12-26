import React, { useRef } from "react";
import "../styles/core.css";
import clsx from "clsx";

export function Carousel({
  children,

  // behavior
  step = 300,

  // styling hooks
  className = "",
  style,
  trackClassName = "",
  arrowClassName = ""
}) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: dir * step,
      behavior: "smooth"
    });
  };

  return (
    <div className={clsx("neopop-carousel", className)} style={style}>
      <button
        className={clsx("neopop-carousel-arrow left", arrowClassName)}
        onClick={() => scroll(-1)}
      >
        ‹
      </button>

      <div
        ref={trackRef}
        className={clsx("neopop-carousel-track", trackClassName)}
      >
        {children}
      </div>

      <button
        className={clsx("neopop-carousel-arrow right", arrowClassName)}
        onClick={() => scroll(1)}
      >
        ›
      </button>
    </div>
  );
}
