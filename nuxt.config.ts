import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/icon", "@nuxt/image", "@nuxt/eslint"],
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
      ],
    },
  },
});
