import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  // -------------------------
  // DEMO MODE (Vercel)
  // -------------------------
  if (mode === "demo") {
    return {
      root: "demo",
      plugins: [react()],
      build: {
        outDir: "../dist",
        emptyOutDir: true
      }
    };
  }

  // -------------------------
  // LIBRARY MODE (npm)
  // -------------------------
  return {
    plugins: [react()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.js"),
        name: "NeoLibrary",
        fileName: (format) => `neo-library.${format}.js`,
        formats: ["es", "cjs"]
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
