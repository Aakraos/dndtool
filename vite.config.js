import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dndtool/',  // Modifica '/dndtool/' con il nome del tuo repository su GitHub
})