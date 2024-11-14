import path, { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
      include: "**/*.tsx,.svg,.png,.jpg,.webp",
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icons")],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
