import React, { useRef, useEffect } from "react";
import "../styles/core.css";
import clsx from "clsx";

export function MovingBanner({
  text = "Free shipping on orders over ₹999 • Vintage drops every Friday",
  speed = 30, // lower = faster
  onClick,

  // 🔓 styling hooks
  className = "",
  style,
  trackClassName = "",
  trackStyle
}) {
  const bannerRef = useRef(null);

  // Magnetic hover effect
  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      el.style.transform = `translateX(${x * 0.05}px)`;
    };

    const reset = () => {
      el.style.transform = "translateX(0)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div
      className={clsx("neopop-banner", className)}
      style={style}
      onClick={onClick}
    >
      <div
        ref={bannerRef}
        className={clsx("neopop-banner-track", trackClassName)}
        style={{
          animationDuration: `${speed}s`,
          ...trackStyle
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
