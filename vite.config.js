import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';
 
export default defineConfig({
  server: {
    port: process.env.PORT || 3000,
  },
  plugins: [vercel()],
  define: {
    'process.env.PORT': process.env.PORT || 3000,
  }
});

