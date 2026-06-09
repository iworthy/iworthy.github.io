<script setup lang="ts">
import { computed } from 'vue'
import VPShortPostList from 'vuepress-theme-plume/components/Posts/VPShortPostList.vue'
import { usePostsData } from 'vuepress-theme-plume/client'

interface ShortPost {
  title: string
  path: string
  createTime: string
}

interface Archive {
  title: string
  total: string
  list: ShortPost[]
}

const postsData = usePostsData()

const archives = computed<Archive[]>(() => {
  const groups = new Map<string, ShortPost[]>()

  for (const post of postsData.value['/blog/'] || []) {
    const createTime = post.createTime?.split(/\s|T/)[0] || ''
    const year = createTime.split('/')[0]
    const list = groups.get(year) || []

    list.push({
      title: post.title,
      path: post.path,
      createTime: createTime.slice(year.length + 1).replace(/\//g, '-'),
    })

    groups.set(year, list)
  }

  return Array.from(groups, ([title, list]) => ({
    title,
    total: `${list.length} 篇`,
    list,
  }))
})
</script>

<template>
  <div class="vp-posts" vp-posts>
    <div class="posts-container">
      <section class="vp-archives" aria-label="WORTHY BLOG">
        <div v-if="archives.length" class="archives">
          <template v-for="archive in archives" :key="archive.title">
            <div class="archive">
              <h2 class="archive-title">
                {{ archive.title }}
                <span class="total">{{ archive.total }}</span>
              </h2>
              <VPShortPostList :post-list="archive.list" />
            </div>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.vp-posts {
  position: relative;
  min-height: calc(100vh - var(--vp-footer-height, 0px));
  padding: calc(var(--vp-nav-height) + 32px) 16px 32px;
  background-color: var(--vp-c-bg-alt);
  transition: background-color var(--vp-t-color);
}

.posts-container {
  display: block;
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
}

.vp-archives {
  flex: 1 2;
}

.archive {
  padding: 16px;
  margin: 0 -16px 24px;
  background-color: var(--vp-c-bg);
  transition: background-color var(--vp-t-color);
}

.archive-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  margin: 0 -16px;
  font-size: 18px;
  font-weight: 700;
  border-bottom: solid 1px var(--vp-c-divider);
  transition: border-bottom var(--vp-t-color);
}

.archive-title .total {
  font-size: 16px;
  font-weight: normal;
  line-height: 16px;
}

@media (min-width: 768px) {
  .archive {
    padding: 20px 24px;
    margin: 0 0 24px;
    border-radius: 8px;
    box-shadow: var(--vp-shadow-1);
    transition: var(--vp-t-color);
    transition-property: box-shadow, background-color;
  }

  .archive:hover {
    box-shadow: var(--vp-shadow-2);
  }

  .archive-title {
    padding-right: 24px;
    padding-left: 24px;
    margin: 0 -24px;
    border-bottom: solid 1px var(--vp-c-divider);
    transition: border-bottom var(--vp-t-color);
  }
}

@media (min-width: 960px) {
  .vp-posts {
    min-height: calc(100vh - var(--vp-nav-height) - var(--vp-footer-height, 0px));
    padding: 32px 24px;
  }
}
</style>
