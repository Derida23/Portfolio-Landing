// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: 'Arian Derida Hamami',
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    'nuxt-svgo',
    '@nuxt/ui',
  ],
  svgo: {
    componentPrefix: 'icon',
  },
})
