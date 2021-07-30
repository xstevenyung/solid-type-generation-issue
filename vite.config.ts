import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";
import pkg from "./package.json";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      name: pkg.name,
      fileName: "index",
      entry: resolve(__dirname, "src/index.ts"),
    },

    rollupOptions: {
      external: [
        "solid-js",
        "solid-js/web",
        "solid-styled-components",
        "solid-js/store",
      ],

      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "solid-js": "Solid",
          "solid-js/web": "SolidWeb",
          "solid-styled-components": "SolidStyledComponent",
          "solid-js/store": "SolidStore",
        },
      },
    },
  },
});
