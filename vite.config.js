import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/bcp-ab-landing/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
