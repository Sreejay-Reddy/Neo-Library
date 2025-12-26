import React from "react";
import "../styles/core.css";
import clsx from "clsx";

export function Button({
  children,
  variant = "primary",
  size = "normal",
  fullWidth = false,
  className = "",
  style,
  ...rest
}) {
  return (
    <button
      className={clsx(
        "neopop-btn",
        variant,
        size,
        fullWidth && "full",
        className
      )}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
}
