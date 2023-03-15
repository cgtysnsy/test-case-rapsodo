import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssModules from "vite-plugin-css-modules";
import VueLayouts from "vite-plugin-vue-layouts";
import sass from "sass";

export default defineConfig({
  base: "/test-case-rapsodo/",
  plugins: [
    vue(),
    cssModules(),
    VueLayouts({
      // add options as needed
    }),
  ],

  css: {
    modules: {
      // enable CSS module support
      localsConvention: "camelCaseOnly",
    },
    // tell Vite to treat .css files as valid module sources
    preprocessorOptions: {
      css: {
        additionalData: `@import "./src/styles/variables.css";`,
      },
      sass: {
        implementation: sass,
      },
    },
  },
});
