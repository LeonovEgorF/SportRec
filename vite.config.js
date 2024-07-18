import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import createSvgSpritePlugin from "vite-plugin-svg-spriter";
import path from "path";

const SRC_PATH = path.resolve(__dirname, "src");
const SVG_FOLDER_PATH = path.resolve(SRC_PATH, "assets", "svg-sprite");

export default defineConfig({
  plugins: [
    react(),
    createSvgSpritePlugin({
      svgFolder: SVG_FOLDER_PATH,
      svgSpriteConfig: {
        shape: {
          transform: ["svgo"],
        },
      },
      transformIndexHtmlTag: {
        injectTo: "body",
      },
    }),
  ],
});
