<template>
  <div
    id="article-detail-container"
    class="full markdown-preview md-dark"
    v-html="html"
  />
</template>

<script>
import { markdown2html } from '~/plugins/markdown2html'

export default {
  name: 'Full',
  props: {
    markdown: {
      type: String,
      default: ''
    }
  },
  computed: {
    html() {
      const result = markdown2html(this.markdown)
      return result.content
    }
  }
}
</script>

<style scoped lang="scss">
@import './markdown';
.full {
}
</style>
