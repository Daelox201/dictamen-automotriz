import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: false,  // Esto asegura que el navegador no se abra automáticamente
    host: '0.0.0.0',
    port: 8100,
  },
});
