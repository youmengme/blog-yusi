<template>
  <div></div>
</template>

<script>
export default {
  name: 'Full',
  props: {
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
