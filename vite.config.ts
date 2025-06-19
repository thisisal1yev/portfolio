import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // it's not working
    alias: {
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@': path.resolve(__dirname, 'src'),
      '@app': path.resolve(__dirname, 'src/app'),
    },
  },
})
