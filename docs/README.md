---
title: 归档
pageLayout: page
head:
  -
    - meta
    - http-equiv: refresh
      content: 0;url=/blog/archives/
---

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vuepress/client'

const router = useRouter()

onMounted(() => {
  router.replace('/blog/archives/')
})
</script>

正在跳转到 [归档](/blog/archives/)。
