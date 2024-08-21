import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Корневая папка
  build: {
    outDir: 'dist', // Папка для сборки
  },
});
