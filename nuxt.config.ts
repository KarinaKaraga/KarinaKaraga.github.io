// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-github-pages/' // baseURL: '/<repository>/'
  },
  css: ['~/assets/css/main.css'],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },
})
