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
  ],
  eslint: {
    config: { stylistic: true },
  },
  googleFonts: {
    families: {
      'DM Sans': true,
    },
  },
  aos: {
    once: true,
    duration: 500,
  },
})
