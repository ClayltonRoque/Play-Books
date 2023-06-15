export default defineNuxtConfig({
  modules: [
    // https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '~/assets/styles/_colors.scss';`,
        },
      },
    },
  },
  css: ['~/assets/styles/app.scss'],
})
