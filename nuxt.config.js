export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '~/assets/styles/_colors.scss';`,
        },
      },
    },
  },
  css: ['bulma', '~/assets/styles/app.scss'],
})
