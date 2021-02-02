<template>
  <Full v-if="type === 'full'" :markdown="markdown" />
  <Simple v-else :markdown="markdown" />
</template>

<script>
import Full from './full'
import Simple from './simple'

export default {
  name: 'IndexVue',
  components: {
    Full,
    Simple
  },
  props: {
    type: {
      type: String,
      default: 'full'
    },
    markdown: {
      type: String,
      default: ''
    }
  }
}
</script>
