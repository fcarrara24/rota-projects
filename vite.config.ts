import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '.',
          rename: '404.html'
        }
      ]
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
