// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change this if deploying to a subfolder, e.g., '/my-app/'
const BASE_PATH = '/'

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,          // ensures assets are loaded correctly in production
  server: {
    port: 5173,             // dev server port
    open: true,             // auto-open browser on npm run dev
  },
  build: {
    outDir: 'dist',         // output folder for production build
    sourcemap: true,        // optional, helpful for debugging build issues
  },
})