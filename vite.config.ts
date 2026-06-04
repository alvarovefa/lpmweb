import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [tailwindcss()],
    base: command === 'build' ? './' : '/',
    server: {
      host: '0.0.0.0',
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
  }
})