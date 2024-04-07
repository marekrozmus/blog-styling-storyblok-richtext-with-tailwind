import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@astrojs/react";
const env = loadEnv("", process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      // Add your components here
      page: 'storyblok/Page',
      pageSection: 'storyblok/PageSection',
    },
    apiOptions: {
      // Choose your Storyblok space region
      region: 'eu' // optional,  or 'eu' (default)
    }
  }), tailwind(), react()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});