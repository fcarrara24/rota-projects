import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const require = createRequire(import.meta.url);
// vite-plugin-prerender currently exposes only CommonJS entry points
const prerender = require('vite-plugin-prerender');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
        },
        {
          src: 'sitemap.xml',
          dest: '.'
        },
        {
          src: 'CNAME',
          dest: '.'
        },
        {
          src: 'robots.txt',
          dest: '.'
        }
      ]
    }),
    prerender({
      staticDir: resolve(__dirname, 'dist'),
      routes: ['/', '/about', '/materials', '/machinery', '/contacts']
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
