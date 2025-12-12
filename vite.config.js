import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "NeoLibrary",
      fileName: (format) => `neo-library.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // React should NOT be bundled inside your library
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
