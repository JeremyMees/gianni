// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-aos',
    'nuxt-svgo',
    '@nuxthq/studio',
    '@nuxt/content',
    '@nuxt/image',
  ],
  runtimeConfig: {
    public: {
      url: process.env.PUBLIC_URL,
    },
  },
  eslint: {
    config: { stylistic: true },
  },
  googleFonts: {
    families: { 'DM Sans': true },
    download: true,
  },
  aos: {
    once: true,
    duration: 500,
  },
  image: { quality: 90 },
})
