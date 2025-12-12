import React from "react";
import "../styles/core.css";

export function Switch({ checked = false, onChange }) {
  return (
    <div
      className={`neopop-switch ${checked ? "checked" : ""}`}
      onClick={() => onChange(!checked)}
    >
      <div className="knob" />
    </div>
  );
}
