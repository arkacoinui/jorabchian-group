import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  // public/ holds unused assets from the old Joorabchian scaffold (not
  // referenced by ProductionSupportGroup). Keep the files in the repo but
  // stop Vite from copying ~112MB of them into every dist build.
  publicDir: false,
})