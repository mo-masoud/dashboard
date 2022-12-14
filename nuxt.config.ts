// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  publicRuntimeConfig: {
    APP_NAME: process.env.APP_NAME,
  },
  css: ["~/assets/css/main.css"],
});
