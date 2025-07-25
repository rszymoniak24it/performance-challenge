import { defineConfig } from "vite";
import compression from "vite-plugin-compression";


export default defineConfig({
  build: {
    plugins: [compression()],
    minify: "esbuild",       
    cssCodeSplit: true, 
    sourcemap: false,          
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  server: {
    hmr: true,                
  },
});