import React from "react";
import "../styles/core.css";
import clsx from "clsx";

export function Switch({
  checked = false,
  onChange,

  // 🔓 styling hooks
  className = "",
  style,
  knobClassName = "",
  knobStyle
}) {
  return (
    <div
      className={clsx(
        "neopop-switch",
        checked && "checked",
        className
      )}
      style={style}
      onClick={() => onChange(!checked)}
    >
      <div
        className={clsx("knob", knobClassName)}
        style={knobStyle}
      />
    </div>
  );
}
