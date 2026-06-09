import { defineClientConfig } from 'vuepress/client'
import HomeArchives from './theme/components/HomeArchives.vue'

import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('HomeArchives', HomeArchives)
  },
})
