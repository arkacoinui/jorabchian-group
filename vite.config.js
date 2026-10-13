import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  // public/ now only holds .htaccess (SPA routing for the cPanel host) and
  // is copied into dist/ as-is by Vite's default publicDir behavior.
})