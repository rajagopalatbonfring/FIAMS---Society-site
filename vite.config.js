import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    sourcemap: false,          // disable in prod (smaller files, less leak risk)
    minify: 'esbuild',         // default, but explicit
    target: 'es2020',          // modern browsers (smaller bundles)
    rollupOptions: {
      output: {
        manualChunks: {
          // optional: split heavy deps
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },

})