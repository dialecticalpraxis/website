// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)

// Portfolio items — one .mdx per project in src/content/projects
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    // Optional: when set, used to sort "latest" on the Projects page
    publishDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
})

// Blog essays — one .mdx per essay in src/content/blog
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects, blog }
