import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import favicons from "@peterek/vite-plugin-favicons";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss(), favicons("./src/web-client/public/logo.jpg")],
  publicDir: "./src/web-client/public",
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
