import { defineConfig } from "vite";
import { browserslistToTargets } from "lightningcss";
import browserslist from 'browserslist'; 
import react from "@vitejs/plugin-react";
import KumaUI from "@kuma-ui/vite";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist(">= 0.25%")),
    },
  },
  plugins: [react(), KumaUI()],
  build: {
    cssMinify: "lightningcss",
  },
});
