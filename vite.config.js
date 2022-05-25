import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(/* options */)],
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
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
