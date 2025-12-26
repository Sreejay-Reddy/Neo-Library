import React, { useRef, useEffect, useState } from "react";
import "../styles/core.css";
import clsx from "clsx";

export function ImageCarousel({
  items,                 // [{ image, title, subtitle, cta }]
  interval = 5000,       // occasional scroll
  className = "",
  style
}) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto-scroll (occasional, not aggressive)
  useEffect(() => {
    if (!items || items.length <= 1) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);

    return () => clearInterval(id);
  }, [items, interval]);

  // Scroll when index changes
  useEffect(() => {
    if (!trackRef.current) return;
    const width = trackRef.current.clientWidth;
    trackRef.current.scrollTo({
      left: index * width,
      behavior: "smooth"
    });
  }, [index]);

  return (
    <div className={clsx("neopop-image-carousel", className)} style={style}>
      <div ref={trackRef} className="neopop-image-carousel-track">
        {items.map((item, i) => (
          <div key={i} className="neopop-image-carousel-slide">
            <div className="neopop-image-banner">
              <div className="neopop-image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="neopop-image-overlay">
                <h2>{item.title}</h2>
                {item.subtitle && <p>{item.subtitle}</p>}
                {item.cta && (
                  <button className="neopop-banner-cta">
                    {item.cta}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
