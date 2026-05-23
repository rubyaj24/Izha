import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'figma:asset/e85c781d2e12fe9265c58aa9c75b7ae97e9f530e.png': path.resolve(__dirname, './src/assets/e85c781d2e12fe9265c58aa9c75b7ae97e9f530e.png'),
      'figma:asset/d14a40fe41784861ec7f21d1f7fb0713de4b2d65.png': path.resolve(__dirname, './src/assets/d14a40fe41784861ec7f21d1f7fb0713de4b2d65.png'),
      'figma:asset/78c11120a480ed9adea0f06b220bd2e06ffd98aa.png': path.resolve(__dirname, './src/assets/78c11120a480ed9adea0f06b220bd2e06ffd98aa.png'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    chunkSizeWarningLimit: 800,
  },
  server: {
    port: 3000,
  },
});
