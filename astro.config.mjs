import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable static site generation
  output: 'static',

  // Build configuration
  build: {
    inlineStylesheets: 'auto'
  },

  // Server configuration for development
  server: {
    port: 4321,
    host: true
  }
});
