export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  ssr: true,

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@mockline/utils",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxthq/studio",
    "nuxt-gtag",
  ],

  routeRules: {
    "/": { isr: true, prerender: true },
  },

  colorMode: {
    preference: "light",
    fallback: "light",
    storageKey: "cv-color-mode",
  },

  studio: {
    enabled: true,
  },

  gtag: {
    id: "G-KKZ2LVSCMS",
  },
});
