import React, { createContext, useContext, useState } from "react";
import "../styles/core.css";
import clsx from "clsx";

const ToastContext = createContext(undefined);

export function ToastProvider({
  children,

  // 🔓 styling hooks
  wrapClassName = "",
  wrapStyle,
  toastClassName = "",
  toastStyle
}) {
  const [toasts, setToasts] = useState([]);

  const addToast = (text, duration = 3000) => {
    const id = Math.random().toString(36).slice(2);

    setToasts((prev) => [...prev, { id, text }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      <div
        className={clsx("neopop-toast-wrap", wrapClassName)}
        style={wrapStyle}
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className={clsx("neopop-toast", toastClassName)}
            style={toastStyle}
          >
            {t.text}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    console.error("❌ useToast() used outside <ToastProvider>");
  }
  return ctx;
}
