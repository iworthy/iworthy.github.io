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
    const year = createTime.slice(0, 4)
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
        <div class="terminal-bar">
          <span class="system-label">W / KNOWLEDGE SYSTEM</span>
          <span class="terminal-path">PERSONAL ARCHIVE — EST. 2022</span>
          <span class="terminal-state">系统就绪</span>
        </div>
        <div class="hero-main">
          <div class="hero-copy">
            <p class="hero-eyebrow">THINK. BUILD. EVOLVE.</p>
            <h1 id="home-title">WORTHY<span>BLOG<span class="title-dot">.</span></span></h1>
            <p class="hero-description">记录技术，连接灵感。<br />在代码与思考之间，探索更多可能。</p>
            <a class="explore-link" href="#archive-index">探索文章 <span aria-hidden="true">↗</span></a>
          </div>
          <div class="core-visual" aria-hidden="true">
            <div class="core-grid" />
            <div class="orbit orbit-outer" />
            <div class="orbit orbit-middle" />
            <div class="orbit orbit-inner" />
            <div class="core-axis axis-x" /><div class="core-axis axis-y" />
            <div class="core-center">W<span>KNOWLEDGE CORE</span></div>
            <span class="core-coordinate coordinate-top">NODE / 001</span>
            <span class="core-coordinate coordinate-bottom">IDEAS → INFINITY</span>
          </div>
        </div>
        <div class="hero-metrics">
          <div><span class="metric-label">ARCHIVED / 文章</span><strong>{{ String(postCount).padStart(3, '0') }}<small>篇记录</small></strong></div>
          <div><span class="metric-label">TIMELINE / 时间</span><strong>{{ archives.length }}<small>个年度</small></strong></div>
          <div class="metric-signal"><span class="metric-label">MINDSET / 探索</span><strong>持续进化<span class="signal-bars" aria-hidden="true"><i /><i /><i /><i /><i /></span></strong></div>
        </div>
      </section>

      <div id="archive-index" class="index-heading">
        <div><span class="hero-eyebrow">THE KNOWLEDGE BASE</span><h2>文章归档<span> / ARCHIVES</span></h2></div>
        <span class="index-count">{{ postCount }} ENTRIES</span>
      </div>
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
  overflow: hidden;
  color: #e9f5ff;
  background: radial-gradient(ellipse at 80% 35%, #103b594d, transparent 60%), #080f20;
  border: 1px solid #2d5673;
  border-radius: 16px;
  box-shadow: 0 24px 80px #020b2526, inset 0 1px #79ddff1a;
}
.terminal-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 26px;
  border-bottom: 1px solid #65cfff26;
  font: 10px var(--worthy-font-mono);
  letter-spacing: .1em;
  color: #8ba6bd;
}
.system-label { color: #a8c7db; }
.terminal-state { color: #6df5d2; white-space: nowrap; }
.terminal-state::before { content: ""; display: inline-block; width: 5px; height: 5px; margin-right: 8px; border-radius: 50%; background: currentColor; box-shadow: 0 0 12px #6df5d2; }
.hero-main { display: grid; grid-template-columns: 1.1fr 1fr; align-items: center; padding: 48px 48px 44px; }
.hero-eyebrow { margin: 0 0 18px; color: var(--vp-c-brand-1); font: 10px var(--worthy-font-mono); letter-spacing: .18em; }
.hero-copy .hero-eyebrow { color: #6edfff; }
h1 { margin: 0; font: 800 clamp(48px, 6vw, 76px)/.98 var(--vp-font-family-base); letter-spacing: -.065em; }
h1 > span { display: block; color: #7de5ff; }
.title-dot { color: #8f8cff; }
.hero-description { margin: 24px 0; color: #a6bad0; font-size: 14px; line-height: 1.9; letter-spacing: .04em; }
.explore-link { display: inline-flex; align-items: center; gap: 38px; padding: 12px 18px; color: #bceeff; font-size: 13px; background: #57cfff0d; border: 1px solid #57cfff66; border-radius: 4px; transition: background .2s, box-shadow .2s; }
.explore-link:hover { color: white; background: #57cfff26; box-shadow: 0 0 24px #57cfff20; }
.core-visual { position: relative; width: 100%; aspect-ratio: 1; max-width: 340px; justify-self: end; }
.core-grid { position: absolute; inset: -8%; background-image: linear-gradient(#54b4e012 1px, transparent 1px), linear-gradient(90deg, #54b4e012 1px, transparent 1px); background-size: 24px 24px; mask-image: radial-gradient(circle, black, transparent 70%); }
.orbit { position: absolute; border-radius: 50%; }
.orbit-outer { inset: 3%; border: 1px dashed #4e97bc66; animation: orbit-spin 90s linear infinite; }
.orbit-middle { inset: 12%; border: 2px solid #59dfff20; border-top-color: #76e6ff; border-bottom-color: #8880ff; box-shadow: 0 0 28px #3bd4ff0d, inset 0 0 28px #3bd4ff0d; animation: orbit-spin 28s linear infinite; }
.orbit-middle::after { content: ""; position: absolute; top: 13%; right: 12%; width: 7px; height: 7px; border-radius: 50%; background: #9af3ff; box-shadow: 0 0 20px #66e4ff; }
.orbit-inner { inset: 23%; border: 1px solid #6ddfff50; outline: 6px solid #6ddfff08; background: radial-gradient(circle, #27aaf222, transparent 70%); }
.core-axis { position: absolute; background: #70c7ff26; }
.axis-x { left: 0; right: 0; top: 50%; height: 1px; }
.axis-y { top: 0; bottom: 0; left: 50%; width: 1px; }
.core-center { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; font: 300 80px var(--worthy-font-mono); color: #d2f7ff; text-shadow: 0 0 35px #5cdcff88; }
.core-center span { margin-top: 8px; font-size: 8px; letter-spacing: .16em; color: #8bc1db; }
.core-coordinate { position: absolute; font: 8px var(--worthy-font-mono); letter-spacing: .12em; color: #8ba6bd; background: #080f20; padding: 6px; }
.coordinate-top { top: 1%; left: 0; }.coordinate-bottom { bottom: 0; right: 0; }
.hero-metrics { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #65cfff26; background: #79bdff04; }
.hero-metrics > div { padding: 20px 28px; }
.hero-metrics > div + div { border-left: 1px solid #65cfff26; }
.metric-label { display: block; font: 9px var(--worthy-font-mono); color: #8ba6bd; letter-spacing: .08em; }
.hero-metrics strong { display: flex; align-items: center; gap: 12px; margin-top: 10px; font: 26px var(--worthy-font-mono); }
.hero-metrics small { font: 11px var(--vp-font-family-base); color: #8ba6bd; }
.metric-signal strong { font: 17px var(--vp-font-family-base); padding-top: 5px; }
.signal-bars { display: flex; gap: 3px; align-items: end; height: 19px; margin-left: auto; }
.signal-bars i { width: 3px; height: 30%; background: #6ddfff; box-shadow: 0 0 8px #6ddfff40; }
.signal-bars i:nth-child(2) { height: 50%; }.signal-bars i:nth-child(3) { height: 70%; }.signal-bars i:nth-child(4) { height: 85%; }.signal-bars i:nth-child(5) { height: 100%; }
.index-heading { display: flex; align-items: end; justify-content: space-between; gap: 12px; margin: 38px 0 20px; scroll-margin-top: 90px; }
.index-heading .hero-eyebrow { font-size: 9px; }
.index-heading h2 { margin: 8px 0 0; font-size: 21px; font-weight: 600; }
.index-heading h2 span { margin-left: 6px; font: 11px var(--worthy-font-mono); color: var(--vp-c-text-3); letter-spacing: .1em; }
.index-count { font: 10px var(--worthy-font-mono); color: var(--vp-c-text-2); }
@keyframes orbit-spin { to { transform: rotate(360deg); } }

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
  background: linear-gradient(115deg, var(--vp-c-brand-soft), transparent 45%), var(--vp-c-bg);
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
  border-bottom: 1px solid var(--vp-c-divider);
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

  .terminal-bar { padding: 14px 18px; font-size: 9px; }
  .terminal-path { display: none; }
  .hero-main { padding: 32px 24px; grid-template-columns: 1fr; }
  .hero-copy { position: relative; z-index: 1; }
  h1 { font-size: 62px; }
  .core-visual { width: 240px; justify-self: center; margin-top: 30px; }
  .hero-metrics > div { padding: 16px 12px; }
  .metric-label { font-size: 8px; letter-spacing: 0; }
  .hero-metrics strong { gap: 6px; font-size: 23px; }
  .hero-metrics small { font-size: 10px; }
  .metric-signal strong { font-size: 13px; }
  .signal-bars { display: none; }
  .index-heading h2 span { font-size: 9px; }
  .index-count { font-size: 9px; }

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
  .orbit {
    animation: none;
  }

  .archive,
  :deep(.vp-short-post-list li) {
    transition: none;
  }
}
</style>
