import React from "react";
import "../styles/core.css";
import clsx from "clsx";

export function LoadingScreen({
  text = "Loading",

  // 🔓 styling hooks
  className = "",
  style,

  // optional inner overrides
  boxClassName = "",
  boxStyle,
  textClassName = "",
  dotsClassName = ""
}) {
  return (
    <div
      className={clsx("neopop-loading", className)}
      style={style}
    >
      <div
        className={clsx("loading-box", boxClassName)}
        style={boxStyle}
      >
        <span className={clsx("loading-text", textClassName)}>
          {text}
        </span>

        <span className={clsx("loading-dots", dotsClassName)}>
          <i></i><i></i><i></i>
        </span>
      </div>
    </div>
  );
}
