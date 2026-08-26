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
const firstVisibleYear = 2022

const visiblePosts = computed(() => (postsData.value['/blog/'] || []).filter((post) => {
  const year = Number.parseInt(post.createTime?.slice(0, 4) || '', 10)

  return year >= firstVisibleYear
}))

const postCount = computed(() => visiblePosts.value.length)

const archives = computed<Archive[]>(() => {
  const groups = new Map<string, ShortPost[]>()

  for (const post of visiblePosts.value) {
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
      <section class="terminal-hero" aria-labelledby="home-title">
        <div class="terminal-bar" aria-hidden="true">
          <span class="terminal-controls">
            <i />
            <i />
            <i />
          </span>
          <span class="terminal-path">worthy@blog:~/archives</span>
          <span class="terminal-state">online</span>
        </div>

        <div class="terminal-body">
          <h1 id="home-title" class="visually-hidden">WORTHY BLOG</h1>
          <p class="command-line" aria-hidden="true">
            <span class="prompt-user">worthy@blog</span><span class="prompt-path">:~$</span>
            <span>./boot.sh --archive</span>
          </p>

          <div class="boot-output" aria-label="System ready">
            <p><span>[ OK ]</span> mount /dev/notes -&gt; /archive</p>
            <p><span>[ OK ]</span> index {{ postCount }} entries</p>
            <p><span>[ OK ]</span> network ready</p>
          </div>

          <div class="shell-ready" aria-hidden="true">
            <span class="prompt-user">worthy@blog</span><span class="prompt-path">:~/archives$</span>
            <span class="cursor">_</span>
          </div>
        </div>
      </section>

      <section class="vp-archives" aria-label="WORTHY BLOG">
        <div v-if="archives.length" class="archives">
          <template v-for="archive in archives" :key="archive.title">
            <div class="archive">
              <h2 class="archive-title">
                <span><i aria-hidden="true">./</i>{{ archive.title }}</span>
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
  padding: 32px 16px 64px;
  overflow: hidden;
  background-color: transparent;
}

.posts-container {
  display: block;
  width: 100%;
  min-width: 0;
  max-width: 980px;
  margin: 0 auto;
}

.terminal-hero {
  position: relative;
  width: 100%;
  max-width: 100%;
  margin-bottom: 24px;
  overflow: hidden;
  background: var(--worthy-terminal-bg);
  border: 1px solid var(--worthy-terminal-border);
  border-radius: 12px;
  box-shadow: var(--worthy-panel-shadow);
}

.terminal-hero::after {
  position: absolute;
  right: -56px;
  bottom: -72px;
  width: 220px;
  height: 220px;
  pointer-events: none;
  content: "";
  background: radial-gradient(circle, var(--vp-c-brand-soft), transparent 68%);
}

.terminal-bar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 16px;
  align-items: center;
  min-height: 42px;
  padding: 0 16px;
  font-family: var(--worthy-font-mono);
  font-size: 11px;
  color: var(--worthy-terminal-muted);
  letter-spacing: 0.04em;
  background: var(--worthy-terminal-bar);
  border-bottom: 1px solid var(--worthy-terminal-border);
}

.terminal-controls {
  display: flex;
  gap: 7px;
}

.terminal-controls i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.terminal-controls i:nth-child(1) {
  background: #ff5f57;
}

.terminal-controls i:nth-child(2) {
  background: #febc2e;
}

.terminal-controls i:nth-child(3) {
  background: #28c840;
}

.terminal-state {
  justify-self: end;
  color: var(--worthy-terminal-accent);
  text-transform: uppercase;
}

.terminal-state::before {
  margin-right: 6px;
  content: "●";
  font-size: 8px;
}

.terminal-body {
  position: relative;
  z-index: 1;
  padding: 38px 48px 34px;
  font-family: var(--worthy-font-mono);
}

.command-line {
  margin: 0 0 22px;
  font-size: 13px;
  color: var(--worthy-terminal-text);
}

.prompt-user {
  color: var(--worthy-terminal-accent);
}

.prompt-path {
  margin-right: 10px;
  color: var(--worthy-terminal-cyan);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.cursor {
  margin-left: 2px;
  color: var(--worthy-terminal-accent);
  animation: cursor-blink 1.15s steps(1, end) infinite;
}

.boot-output {
  display: grid;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 13px;
  color: var(--worthy-terminal-muted);
}

.boot-output p {
  margin: 0;
}

.boot-output span {
  display: inline-block;
  width: 52px;
  color: var(--worthy-terminal-accent);
}

.shell-ready {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--worthy-terminal-text);
}

.vp-archives {
  flex: 1 2;
  min-width: 0;
}

.archive {
  position: relative;
  min-width: 0;
  padding: 20px 24px 22px;
  margin: 0 0 18px;
  overflow: hidden;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  box-shadow: var(--worthy-panel-shadow);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease, background-color var(--vp-t-color);
}

.archive::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 3px;
  content: "";
  background: var(--vp-c-brand-1);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.archive:hover {
  border-color: var(--worthy-border-active);
  box-shadow: var(--worthy-panel-shadow-hover);
  transform: translateY(-2px);
}

.archive:hover::before {
  opacity: 1;
}

.archive-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 14px;
  margin: 0;
  font-family: var(--worthy-font-mono);
  font-size: 17px;
  font-weight: 650;
  color: var(--vp-c-text-1);
  border-bottom: 1px dashed var(--vp-c-divider);
  transition: border-bottom var(--vp-t-color);
}

.archive-title i {
  margin-right: 2px;
  font-style: normal;
  color: var(--vp-c-brand-1);
}

.archive-title .total {
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border: 1px solid var(--worthy-border-active);
  border-radius: 999px;
}

:deep(.vp-short-post-list) {
  gap: 2px;
  margin-top: 12px;
}

:deep(.vp-short-post-list li) {
  position: relative;
  min-width: 0;
  min-height: 38px;
  padding: 7px 10px 7px 28px;
  border-radius: 6px;
  transition: background-color 0.18s ease, transform 0.18s ease;
}

:deep(.vp-short-post-list li::before) {
  position: absolute;
  left: 10px;
  font-family: var(--worthy-font-mono);
  color: var(--vp-c-brand-1);
  content: ">";
  opacity: 0.7;
}

:deep(.vp-short-post-list li:hover) {
  background: var(--vp-c-brand-soft);
  transform: translateX(3px);
}

:deep(.vp-short-post-list .post-title) {
  min-width: 0;
  font-size: 15px;
  font-weight: 520;
}

:deep(.vp-short-post-list .post-link) {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.vp-short-post-list .post-time) {
  font-family: var(--worthy-font-mono);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}

:deep(.vp-short-post-list .post-time::before) {
  margin-right: 7px;
  color: var(--vp-c-brand-1);
  content: "//";
}

@media (min-width: 960px) {
  .vp-posts {
    min-height: calc(100vh - var(--vp-nav-height) - var(--vp-footer-height, 0px));
    padding: 48px 24px 72px;
  }
}

@media (max-width: 767px) {
  .vp-posts {
    padding-top: 18px;
    padding-right: 12px;
    padding-bottom: 48px;
    padding-left: 12px;
  }

  .terminal-hero {
    margin-bottom: 18px;
    border-radius: 9px;
  }

  .terminal-bar {
    grid-template-columns: 1fr auto;
  }

  .terminal-path {
    display: none;
  }

  .terminal-body {
    padding: 30px 22px 26px;
  }

  .command-line {
    font-size: 11px;
  }

  .boot-output,
  .shell-ready {
    font-size: 11px;
  }

  .archive {
    padding: 18px 12px;
    border-radius: 8px;
  }

  .archive-title {
    padding-right: 4px;
    padding-left: 4px;
  }

  :deep(.vp-short-post-list li) {
    align-items: flex-start;
    padding-right: 4px;
    padding-left: 24px;
  }

  :deep(.vp-short-post-list li::before) {
    left: 7px;
  }

  :deep(.vp-short-post-list .post-title) {
    margin-right: 8px;
    font-size: 14px;
  }

  :deep(.vp-short-post-list .post-time::before) {
    display: none;
  }
}

@keyframes cursor-blink {
  0%, 48% {
    opacity: 1;
  }

  49%, 100% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cursor {
    animation: none;
  }

  .archive,
  :deep(.vp-short-post-list li) {
    transition: none;
  }
}
</style>
