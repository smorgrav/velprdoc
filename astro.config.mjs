import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "/favicon.ico",
      title: {
        en: "Velpr documentation",
        no: "Velpr dokumentasjon",
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      defaultLocale: "root",
      locales: {
        en: {
          label: "English",
        },
        root: {
          lang: "no",
          label: "Norsk",
        },
      },
      sidebar: [
        {
          label: "For brukere",
          translations: { no: "For brukere", en: "For users" },
          autogenerate: { directory: "users" },
        },
        {
          label: "For admin",
          translations: { no: "For admin", en: "For admins" },
          autogenerate: { directory: "admins" },
        },
        {
          label: "Endringslogg",
          translations: { no: "Endringslogg", en: "Changelog" },
          autogenerate: { directory: "changelog" },
        },
      ],
    }),
  ],
});
