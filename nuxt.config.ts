import fs from 'fs-extra'
import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    '~/plugins/fontawesome.js'
  ],
  modules: ['@nuxt/content'],
  vite: {
    optimizeDeps: {
      exclude: ['#app-manifest']
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s | Dr. Kelsey Florek',
      meta: [
        { name: 'author', content: 'Dr. Kelsey Florek' },
        { property: 'og:site_name', content: 'Dr. Kelsey Florek' },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  }
})