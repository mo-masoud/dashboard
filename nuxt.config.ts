// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  publicRuntimeConfig: {
    APP_NAME: process.env.APP_NAME,
  },
});
