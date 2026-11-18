import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-aos',
    'nuxt-svgo',
    '@nuxt/content',
    'nuxt-studio',
    '@nuxt/image',
    '@sentry/nuxt/module',
    '@nuxtjs/seo',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  site: {
    url: process.env.PUBLIC_URL || 'https://www.kamino-media.be',
    name: 'Kamino Media',
    description:
      'Videograaf en fotograaf in Limburg voor bruiloften, communies, lentefeesten en andere feestelijke momenten.',
    defaultLocale: 'nl-BE',
  },
  ogImage: { enabled: false },
  schemaOrg: { defaults: true },
  runtimeConfig: {
    public: {
      sentry: {
        dsn: '',
        environment: process.env.VERCEL_ENV ?? 'development',
      },
    },
  },
  sourcemap: { client: 'hidden' },
  sentry: {
    org: 'kees',
    project: 'kamino-media',
    authToken: process.env.SENTRY_AUTH_TOKEN,
    release: { name: process.env.SENTRY_RELEASE },
    sourcemaps: { disable: !process.env.SENTRY_AUTH_TOKEN },
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
    vercel: {
      config: { images: { minimumCacheTTL: 2678400 } },
    },
  },
  routeRules: {
    '/img/**': {
      headers: {
        'cache-control': 'public, max-age=86400, stale-while-revalidate=604800',
      },
    },
    '/videos/**': {
      headers: {
        'cache-control': 'public, max-age=86400, stale-while-revalidate=604800',
      },
    },
  },
  vite: {
    optimizeDeps: {
      include: ['aos'],
    },
    plugins: [tailwindcss()],
  },
  aos: {
    once: true,
    duration: 500,
  },
  googleFonts: {
    families: { 'DM Sans': true },
    download: true,
  },
  image: { quality: 90 },
  studio: {
    route: '/_studio',
    repository: {
      provider: 'github',
      owner: 'JeremyMees',
      repo: 'gianni',
      branch: 'main',
    },
  },
})
