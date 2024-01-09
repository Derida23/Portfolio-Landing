// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: 'Arian Derida Hamami',
    }
  },
  css: ['~/assets/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
  ],
  svgo: {
    componentPrefix: 'icon',
  },
})
