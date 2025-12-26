import React from "react";
import "../styles/core.css";
import clsx from "clsx";

export function Card({
  children,
  className = "",
  style,
  ...rest
}) {
  return (
    <div
      className={clsx("neopop-card", className)}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
