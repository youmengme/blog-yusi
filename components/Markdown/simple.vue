<template>
  <div
    id="article-detail-container"
    class="simple markdown-preview md-dark"
    v-html="html"
  />
</template>

<script>
import markdown2html from '~/libs/marked'

export default {
  name: 'Simple',
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
.simple {
}
</style>
