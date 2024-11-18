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
    '@nuxtjs/color-mode',
    "@nuxtjs/i18n"
  ],

  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },

  svgo: {
    componentPrefix: 'icon',
  },

  i18n: {
    // detectBrowserLanguage: {
    // useCookie: true,
    // cookieKey: 'i18n_redirected',
    // redirectOn: 'root',
    // },
    // strategy: 'prefix_except_default ',
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    customRoutes: 'config',
    baseUrl: 'http://localhost:3000',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.ts' },
      { code: 'id', iso: 'id-ID', name: 'Bahasa', file: 'id.ts', isCatchallLocale: true }
    ],
  },

  compatibilityDate: '2024-11-13',
})