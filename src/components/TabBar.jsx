import React from "react";
import "../styles/core.css";

export function TabBar({ tabs, active, onChange }) {
  return (
    <div className="neopop-tabbar">
      {tabs.map(tab => (
        <button
          key={tab.key}
          className={active === tab.key ? "active" : ""}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
