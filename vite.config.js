import { defineConfig } from "vite";

export default defineConfig({
  root: "page1",
  base: "/",
  publicDir: "assets",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "page1/index.html",
        services: "page1/page1.html",
        group: "page1/page2.html",
      },
    },
  },
});
