import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import {
  defineRobotsSchema,
  defineSchemaOrgSchema,
  defineSitemapSchema,
} from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        image: z
          .object({
            url: z.string(),
            alt: z.string().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
          })
          .optional(),
        sitemap: defineSitemapSchema(),
        robots: defineRobotsSchema(),
        schemaOrg: defineSchemaOrgSchema(),
      }),
    }),
  },
})
