// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-github-pages/' // baseURL: '/<repository>/'
  },
  nitro: {
    output: {
      publicDir: './dist', // This setting can avoid that the packed dist file is a soft connection
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },
})
