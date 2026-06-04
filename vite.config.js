import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        modules: resolve(__dirname, 'Modules/index.html'),
        news: resolve(__dirname, 'Modules/news.html'),
        runtimes: resolve(__dirname, 'Runtimes/index.html'),
      },
    },
  },
});
