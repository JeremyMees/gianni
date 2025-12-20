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
  ],
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  runtimeConfig: {
    public: {
      url: process.env.PUBLIC_URL,
    },
  },
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  aos: {
    once: true,
    duration: 500,
  },
  eslint: {
    config: { stylistic: true },
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
