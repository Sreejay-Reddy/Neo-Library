import React from "react";
import "../styles/core.css";

export function LoadingScreen({ text = "Loading" }) {
  return (
    <div className="neopop-loading">
      <div className="loading-box">
        <span className="loading-text">{text}</span>
        <span className="loading-dots">
          <i></i><i></i><i></i>
        </span>
      </div>
    </div>
  );
}
