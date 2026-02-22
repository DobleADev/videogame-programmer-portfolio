// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel";

const isGithubPages = import.meta.env.PROD === true;

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },

  // output: "server",

  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true,
  //   },
  // }),

  site: 'https://dobleadev.github.io',
  base: isGithubPages ? '/videogame-programmer-portfolio' : undefined,
  
});
