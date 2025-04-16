import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [
    react(),
    ghPages()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  root: './',
  publicDir: 'public',
  base: '/Color-Refresh/'
}); 


