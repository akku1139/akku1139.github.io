import { defineConfig } from 'astro/config'


export default defineConfig({
  site: 'https://akku1139.github.io',
  base: '/',
  vite: {
    resolve: {
      alias: {
        '@/': '/src/',
      }
    }
  }
});
