import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [createVuePlugin()],
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
  esbuild: {
    target: 'esnext',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/web-client/styles/functions/_layout";@import "./src/web-client/styles/variables/_all"; `,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src/web-client',
      },
    ],
  },
})
