import fs from 'fs-extra'
import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    '~/plugins/fontawesome.js'
  ],
  modules: ['@nuxt/content'],
  hooks: {
    async 'nitro:build:before'() {
      // copy reveal into public
      let src = path.resolve('node_modules/reveal.js/dist')
      let dest = path.resolve('public/vendor/reveal')
      await fs.copy(src, dest)
      // copy reveal default plugins
      src = path.resolve('node_modules/reveal.js/plugin')
      dest = path.resolve('public/vendor/reveal-plugins')
      await fs.copy(src, dest)
      // copy reveal extra plugins
      src = path.resolve('node_modules/reveal.js-plugins')
      dest = path.resolve('public/vendor/reveal-plugins')
      await fs.copy(src, dest)
      // copy jquery plugins
      src = path.resolve('node_modules/jquery/dist')
      dest = path.resolve('public/vendor/jquery')
      await fs.copy(src, dest)
    }
  }
})