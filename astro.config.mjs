// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://raccoon-notes.vercel.app', // Replace with your actual site URL
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { output: 'html' }]],
    }),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});