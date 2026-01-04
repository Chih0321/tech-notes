// src/content.config.ts
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(), // Astro 5 必須顯式使用 loader
    schema: docsSchema({
      extend: (context) => blogSchema(context),
    }),
  }),
};