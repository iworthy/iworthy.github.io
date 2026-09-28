<script setup lang="ts">
import { computed } from 'vue'
import VPShortPostList from 'vuepress-theme-plume/components/Posts/VPShortPostList.vue'
import { usePostsData } from 'vuepress-theme-plume/client'

interface ShortPost { title: string; path: string; createTime: string }
interface Archive { title: string; total: number; list: ShortPost[] }

const postsData = usePostsData()
const firstVisibleYear = 2022

const visiblePosts = computed(() => (postsData.value['/blog/'] || []).filter((post) => {
  const year = Number.parseInt(post.createTime?.slice(0, 4) || '', 10)
  return year >= firstVisibleYear
}))

const archives = computed<Archive[]>(() => {
  const groups = new Map<string, ShortPost[]>()
  for (const post of visiblePosts.value) {
    const createTime = post.createTime?.split(/\s|T/)[0] || ''
    const year = createTime.slice(0, 4)
    const list = groups.get(year) || []
    list.push({ title: post.title, path: post.path, createTime: createTime.slice(year.length + 1).replace(/\//g, '-') })
    groups.set(year, list)
  }
  return Array.from(groups, ([title, list]) => ({ title, total: list.length, list }))
})

</script>

<template>
  <main class="journal-home">
    <div class="journal-shell">
      <section id="archive-index" class="archive-index" aria-label="文章归档">
        <div v-if="archives.length" class="archive-list">
          <section v-for="archive in archives" :key="archive.title" class="archive-year">
            <header><h3>{{ archive.title }}</h3><span>{{ archive.total }} 篇</span></header>
            <VPShortPostList :post-list="archive.list" />
          </section>
        </div>
        <p v-else class="archive-empty">文章正在整理中。</p>
      </section>
    </div>
  </main>
</template>

<style scoped>
.journal-home { min-height: calc(100vh - var(--vp-nav-height)); padding: clamp(48px, 6vw, 76px) 24px 96px; }
.journal-shell { width: min(100%, 880px); margin: 0 auto; }
.archive-index { scroll-margin-top: 72px; }
.archive-year { display: grid; grid-template-columns: 120px minmax(0, 1fr); gap: 40px; padding: 0 0 52px; }
.archive-year + .archive-year { padding-top: 52px; border-top: 1px solid var(--vp-c-divider); }
.archive-year header { padding-top: 7px; }
.archive-year h3 { margin: 0 0 7px; color: var(--vp-c-text-1); font-size: 28px; font-weight: 600; letter-spacing: -.035em; }
.archive-year header span { color: var(--vp-c-text-3); font-size: 12px; }
:deep(.vp-short-post-list) { gap: 0; margin: 0; }
:deep(.vp-short-post-list li) { min-width: 0; min-height: 44px; padding: 10px 0; border-bottom: 1px solid var(--vp-c-divider); transition: border-color .2s ease; }
:deep(.vp-short-post-list li:first-child) { padding-top: 7px; }
:deep(.vp-short-post-list li:hover) { border-color: var(--vp-c-text-2); }
:deep(.vp-short-post-list .post-title) { min-width: 0; margin-right: 24px; font-size: 15px; font-weight: 480; }
:deep(.vp-short-post-list .post-link) { display: block; overflow: hidden; color: var(--vp-c-text-1); text-overflow: ellipsis; white-space: nowrap; }
:deep(.vp-short-post-list .post-link:hover) { color: var(--vp-c-brand-1); }
:deep(.vp-short-post-list .post-time) { color: var(--vp-c-text-3); font-size: 12px; font-variant-numeric: tabular-nums; }
.archive-empty { color: var(--vp-c-text-3); }
@media (max-width: 767px) {
  .journal-home { padding: 40px 20px 72px; }
  .archive-year { display: block; padding-bottom: 44px; }
  .archive-year + .archive-year { padding-top: 40px; }
  .archive-year header { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 18px; padding: 0; }
  .archive-year h3 { font-size: 24px; }
  :deep(.vp-short-post-list .post-title) { margin-right: 10px; font-size: 14px; }
}
</style>
