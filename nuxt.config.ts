// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: 'Arian Derida Hamami',
    }
  },
  imports: {
    dirs: ['stores', 'composables/api'],
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-svgo',
  ],
  svgo: {
    componentPrefix: 'icon',
  },
})
