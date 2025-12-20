import React, { useEffect } from "react";

const THEMES = [
  "theme-olive-wine",
  "theme-olive-wine-warm",
  "theme-olive-wine-bold"
];

export function ThemeProvider({
  children,
  theme = "theme-olive-wine",
  dark = false
}) {
  useEffect(() => {
    const root = document.documentElement;

    // Remove all known theme classes
    THEMES.forEach(t => root.classList.remove(t));
    root.classList.remove("dark");

    // Apply new theme
    if (dark) root.classList.add("dark");
    root.classList.add(theme);
  }, [theme, dark]);

  return children;
}
