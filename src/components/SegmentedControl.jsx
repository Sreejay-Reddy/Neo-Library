import React from "react";
import "../styles/core.css";
import clsx from "clsx";

export function SegmentedControl({
  options,
  value,
  onChange,

  // 🔓 styling hooks
  className = "",
  style,
  buttonClassName = "",
  activeButtonClassName = ""
}) {
  return (
    <div
      className={clsx("neopop-seg", className)}
      style={style}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          className={clsx(
            value === opt.value && "active",
            buttonClassName,
            value === opt.value && activeButtonClassName
          )}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
