<template>
  <header class="archive-header">
    <h1>
      <i class="iconfont" :class="className" /> <span>{{ typeName }}</span>
      <span v-if="name">：{{ name }}</span>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Archive',
  props: {
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    typeName: {
      type: String,
      default: '标签'
    }
  },
  computed: {
    className() {
      const mapping = {
        tag: 'icon-tag',
        category: 'icon-category1',
        page: 'icon-article'
      }
      return mapping[this.type] || ''
    }
  }
}
</script>
<style lang="less" scoped>
.archive-header {
  display: flex;
  align-items: center;
  width: auto;
  height: 65px;
  margin-bottom: 10px;
  padding: 0 15px;
  color: var(--brown);
  background: var(--white);

  h1 {
    font-size: 22px;
    font-weight: bolder;

    .iconfont {
      font-size: 22px;
      margin-right: 5px;
    }
  }
}
</style>
