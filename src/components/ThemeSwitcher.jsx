import React, { useEffect } from "react";

const DEFAULT_THEMES = [
  "theme-olive-wine",
  "theme-olive-wine-warm",
  "theme-olive-wine-bold"
];

export function ThemeProvider({
  children,
  theme = "theme-olive-wine",
  dark = false,

  // 🔓 extensibility hooks
  themes = DEFAULT_THEMES,
  target = document.documentElement
}) {
  useEffect(() => {
    if (!target) return;

    // Remove all known theme classes
    themes.forEach(t => target.classList.remove(t));
    target.classList.remove("dark");

    // Apply new theme
    if (dark) target.classList.add("dark");
    if (theme) target.classList.add(theme);
  }, [theme, dark, themes, target]);

  return children;
}
