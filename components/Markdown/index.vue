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
      default: '',
      validator: value => {
        // 这个值必须匹配下列字符串中的一个
        if (typeof value !== 'string') {
          throw new TypeError(
            'Parameter error: [markdown], Please pass in a string'
          )
        }
        return true
      }
    }
  }
}
</script>

<style scoped></style>
