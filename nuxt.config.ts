// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  components: [
    {
      global: true,
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: [
    '~/assets/scss/style.scss'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})
