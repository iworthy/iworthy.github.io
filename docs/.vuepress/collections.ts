import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const blog = defineCollection({
  type: 'post',
  dir: 'blog',
  title: 'Blog',
  link: '/blog/',
  postList: false,
  tags: false,
  archives: false,
  categories: false,
})

export default defineCollections([
  blog,
])
