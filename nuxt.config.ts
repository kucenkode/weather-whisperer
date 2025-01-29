// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    private: {
      weatherAPIkey: process.env.WEATHER_API_KEY
    }
  }
})
