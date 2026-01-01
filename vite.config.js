import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  // -------------------------
  // DEMO MODE
  // -------------------------
  if (mode === "demo") {
    return {
      root: "demo",
      plugins: [react()],
      build: {
        outDir: "../demo-dist",
        emptyOutDir: true
      }
    };
  }

  // -------------------------
  // LIBRARY MODE
  // -------------------------
  return {
    plugins: [react()],
    build: {
      outDir: "dist",
      lib: {
        entry: path.resolve(__dirname, "src/index.js"),
        name: "NeoLibrary",
        formats: ["es", "cjs"],
        fileName: (format) =>
          format === "es"
            ? "neo-library.es.js"
            : "neo-library.cjs.js"
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM"
          }
        }
      }
    }
  };
});
