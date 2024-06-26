import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import UnoCSS from 'unocss/astro'
import vue from '@astrojs/vue'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://p2p-learning.netlify.app/',
  output: 'server',
  server: {
    port: 1977,
  },
  integrations: [mdx(), sitemap(), UnoCSS({
    injectReset: true,
  }), vue(), react()],
})
