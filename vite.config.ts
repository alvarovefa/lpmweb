import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react(), tailwindcss()],
    base: command === 'build' ? '/lpmweb/' : '/',
    server: {
      host: '0.0.0.0',
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
  }
})