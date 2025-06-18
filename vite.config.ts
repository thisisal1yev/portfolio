import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // it's not working
    alias: {
      '@shared': './src/shared',
      '@widgets': './src/widgets',
      '@': './src',
    },
  },
})
