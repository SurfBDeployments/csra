import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: '/',
  envDir: false,
  server: {
    port: 5173,
    strictPort: true,
  },
  plugins: [tailwindcss(), reactRouter()],
  
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    // Tells Vitest to search your outside test folder AND your app directory
    include: [
      'tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}', 
      'app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
    ],
  },

});
