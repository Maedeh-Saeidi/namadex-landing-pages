import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginPrettier from "vite-plugin-prettier";


// https://vite.dev/config/
export default defineConfig({
  base:"/",
  plugins: [react(), vitePluginPrettier()],
  server: {
    host: true,
  },
});
