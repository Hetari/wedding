import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wedding/',
  build: {
    sourcemap: true,
    // terserOptions:
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
