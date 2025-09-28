import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://smartloansbackend.azurewebsites.net',
        changeOrigin: true,
        secure: true, // since backend is HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
});

