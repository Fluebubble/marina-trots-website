import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
// import stylelintPlugin from 'vite-plugin-stylelint';
// import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Checker({
      typescript: true, eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
      // stylelint: {
      //   lintCommand: 'stylelint "**/*.{css,scss}"', // Команда для запуска Stylelint
      //   // dev: true, // Проверять в режиме разработки
      // }
    }),
    eslint(),
    // stylelintPlugin({
    //   files: ['**/*.{css,scss}'], // Файлы для проверки
    // })
    // eslintPlugin({
    //   cache: false, // Отключить кэширование, чтобы получать все предупреждения каждый раз
    //   emitWarning: true, // Включить вывод предупреждений в консоль
    //   emitError: true, // Включить вывод ошибок
    // })
  ],

})
