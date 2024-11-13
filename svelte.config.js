import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex(mdsvexConfig),
  ],
  kit: {
    // https://kit.svelte.jp/docs/adapter-static
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'dist',
      assets: 'dist',
      fallback: "404.html",
      precompress: false,
      strict: true
    }),
    alias: {
      "~/*": "./src/*",
      "~raw/*": "./*"
    }
  }
}

export default config
