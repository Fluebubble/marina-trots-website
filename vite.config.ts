import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Checker from "vite-plugin-checker";
import eslint from "vite-plugin-eslint";
// import { resolve } from 'path';
// import stylelintPlugin from 'vite-plugin-stylelint';
// import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    eslint(),
  ],
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, 'src'), // '@' будет ссылаться на папку 'src'
  //   },
  // },
});
