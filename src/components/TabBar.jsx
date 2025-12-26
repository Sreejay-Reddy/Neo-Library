import React from "react";
import "../styles/core.css";
import clsx from "clsx";

export function TabBar({
  tabs,
  active,
  onChange,

  // 🔓 styling hooks
  className = "",
  style,
  tabClassName = "",
  activeTabClassName = ""
}) {
  return (
    <div
      className={clsx("neopop-tabbar", className)}
      style={style}
    >
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={clsx(
            active === tab.key && "active",
            tabClassName,
            active === tab.key && activeTabClassName
          )}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
