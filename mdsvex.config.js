// https://github.com/mvasigh/sveltekit-mdsvex-blog/blob/34acd87ffbf26ad63b66efb169a76fbbc50c1b48/mdsvex.config.js
import { join } from "node:path"

//import remarkGithub from 'remark-github';
//import remarkAbbr from 'remark-abbr';
//import rehypeSlug from 'rehype-slug';
//import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { defineMDSveXConfig as defineConfig } from 'mdsvex';

import { enhancedImages } from "mdsvex-enhanced-images"

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  remarkPlugins: [
    enhancedImages,
  ],

  // layout: {
    // "": join(import.meta.dirname, "./src/layouts/leaf.svelte")
  // }

//  smartypants: {
//    dashes: 'oldschool'
//  },

//  remarkPlugins: [
//    [
//      remarkGithub,
//      {
//        // TODO: Replace with your own repository
//        repository: 'https://github.com/mvasigh/sveltekit-mdsvex-blog.git'
//      }
//    ],
//    remarkAbbr
//  ],
//  rehypePlugins: [
//    rehypeSlug,
//    [
//      rehypeAutolinkHeadings,
//      {
//        behavior: 'wrap'
//      }
//    ]
//  ]
});

export default config;
