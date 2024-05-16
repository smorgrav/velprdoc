import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "/favicon.ico",
      title: {
        en: "Velpr Online",
        "nb-NO": "Velpr Online",
      },
      social: {
        github: "https://github.com/smorgrav/velprdoc",
      },
      defaultLocale: "root",
      locales: {
        en: {
          label: "English",
        },
        root: {
          lang: "nb-NO",
          label: "Norsk",
        },
      },
      sidebar: [
        {
          label: "For brukere",
          translations: { "nb-NO": "For brukere", en: "For users" },
          autogenerate: { directory: "users" },
        },
        {
          label: "For admin",
          translations: { "nb-NO": "For admin", en: "For admins" },
          autogenerate: { directory: "admins" },
        },
        {
          label: "Endringslogg",
          translations: { "nb-NO": "Endringslogg", en: "Changelog" },
          autogenerate: { directory: "changelog" },
        },
      ],
    }),
  ],
});
