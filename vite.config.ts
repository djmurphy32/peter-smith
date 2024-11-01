import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import favicons from "@peterek/vite-plugin-favicons";

export default defineConfig({
  plugins: [vue(), favicons("./src/web-client/assets/favicon.png")],
  build: {
    target: "esnext",
    assetsInlineLimit: 0,
  },
  esbuild: {
    target: "esnext",
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src/web-client",
      },
    ],
  },
});
