import React from "react";
import "../styles/core.css";

export function SegmentedControl({ options, value, onChange }) {
  return (
    <div className="neopop-seg">
      {options.map(opt => (
        <button
          key={opt.value}
          className={value === opt.value ? "active" : ""}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
