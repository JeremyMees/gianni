import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const { url } = useRuntimeConfig().public

  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: url as string,
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly',
    })
  }

  sitemap.end()

  return streamToPromise(sitemap)
})
