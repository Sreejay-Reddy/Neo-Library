import React from "react";
import "../styles/core.css";

export function Card({ children, className = "", ...rest }) {
  return (
    <div className={`neopop-card ${className}`} {...rest}>
      {children}
    </div>
  );
}
