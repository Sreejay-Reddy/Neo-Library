import React from "react";
import "../styles/core.css";
import clsx from "clsx";

export function InputText({
  value,
  onChange,
  placeholder,
  size = "normal",   // small | normal | large

  // 🔓 styling hooks
  className = "",
  style,

  ...rest
}) {
  return (
    <input
      className={clsx("neopop-input", size, className)}
      style={style}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
}
