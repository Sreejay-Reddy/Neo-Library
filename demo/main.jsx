import React from "react";
import ReactDOM from "react-dom/client";
import Demo from "./Demo";
import { ToastProvider } from "../src/index.js";  // MUST import from src/index.js

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <Demo />
    </ToastProvider>
  </React.StrictMode>
);
