import React from "react";
import "../styles/core.css";
import clsx from "clsx";

export function Button({
  children,
  variant = "primary",
  size = "normal",
  fullWidth = false,
  ...rest
}) {
  return (
    <button
      className={clsx(
        "neopop-btn",
        variant,
        size,
        fullWidth && "full"
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
