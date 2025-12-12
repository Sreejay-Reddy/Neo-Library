import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  server: {
    open: "/demo/index.html",   // auto-open demo
    port: 5174
  },

  // Vite must serve project root so /demo works
  root: ".",

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "NeopopUI",
      fileName: (format) => `neopop-ui.${format}.js`,
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
});
