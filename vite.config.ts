import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import favicons from "@peterek/vite-plugin-favicons";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss(), favicons("./src/web-client/public/logo.jpg")],
  publicDir: "./src/web-client/public",
  server: {
    port: 5173,
    host: "0.0.0.0",
  },
  build: {
    target: "esnext",
    assetsInlineLimit: 0,
  },
  esbuild: {
    target: "esnext",
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
