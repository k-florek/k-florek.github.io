import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: 'blog/**.md',
            schema: z.object({
                title: z.string(),
                date: z.date(),
                description: z.string(),
                tags: z.array(z.string()).default([]),
                draft: z.boolean().default(false),
                cover: z.string().optional(),
                coverCredit: z.string().optional(),
                coverDarken: z.number().min(0).max(1).default(0)
            })
        }),
        talks: defineCollection({
            type: 'data',
            source: 'talks/**.json',
            schema: z.object({
                title: z.string(),
                subtitle: z.string(),
                date: z.date(),
                url: z.string()
            })
        }),
        lectures: defineCollection({
            type: 'data',
            source: 'lectures/**.json',
            schema: z.object({
                title: z.string(),
                subtitle: z.string(),
                date: z.date(),
                url: z.string()
            })
        }),
        publications: defineCollection({
            type: 'data',
            source: 'publications/**.json',
            schema: z.object({
                title: z.string(),
                journal: z.string(),
                j_info: z.string(),
                date: z.date(),
                url: z.string()
            })
        })
    }
})