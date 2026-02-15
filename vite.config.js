import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: process.env.GITHUB_PAGES ? '/vue-spa-learn/' : '/',
  base: '/vue-spa-learn/',
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      // Создаем алиас для node_modules
      'node_modules': path.resolve(__dirname, 'node_modules'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Позволяет использовать переменные Bootstrap в компонентах без @import
        additionalData: `
          @import "bootstrap/scss/functions";
          @import "bootstrap/scss/variables";
          @import "bootstrap/scss/mixins";
        `,
        // Отключает предупреждения о старом синтаксисе в самом Bootstrap
        quietDeps: true,
        // 2. Явно отключает уведомления по конкретным категориям
        silenceDeprecations: [
          'if-function',
          'color-functions', // Скроет green(), red(), etc.
          'import',          // Скроет предупреждения об @import
          'slash-div',        // Скроет предупреждения о делении через /
          'global-builtin'        // Скроет предупреждения о делении через /
        ],
      }
    }
  }
})
