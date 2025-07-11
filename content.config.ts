import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'talks',
            source: 'collections/talks.json',
            schema: z.object({
                talk: z.object({
                    title: z.string(),
                    subtitle: z.string(),
                    date: z.string(),
                    url: z.string()
                })
            })
        })
    }
})