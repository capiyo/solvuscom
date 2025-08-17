import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
export default defineConfig({
plugins: [react()],
  css: {
   postcss: {
    plugins: [tailwindcss()],
     server: {
            proxy: {
              '/api': { // requests to /api will be proxied
                target: 'https://solvus-api-4.onrender.com', // Replace with your API server URL
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
              },
            },
          },
   },
  },
});