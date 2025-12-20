import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const { url } = useRuntimeConfig().public

  const docs = await queryCollection(event, 'content').all()
  const sitemap = new SitemapStream({
    hostname: url as string,
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc.path,
      changefreq: 'monthly',
    })
  }

  sitemap.end()

  return streamToPromise(sitemap)
})
