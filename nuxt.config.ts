import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/icon", "@nuxt/image", "@nuxt/eslint", "@pinia/nuxt"],
  app: {
    head: {
      title: "ramamimu",
      meta: [
        { name: "description", content: "Ahmad Ferdiansyah Ramadhani" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#ffffff" },
        { name: "og:title", content: "Ahmad Ferdiansyah Ramadhani" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/ramamimu.png",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },
});