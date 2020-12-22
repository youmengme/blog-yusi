<template>
  <div>
    <ArticleItem v-for="(item, index) in list" :key="index" :article="item" />
    <Pagination
      :total="total"
      :active="activeIndex"
      @change="handleChangePageIndex"
    />
  </div>
</template>

<script>
import ArticleItem from './Article/index'
import Pagination from './pagination'

export default {
  components: {
    ArticleItem,
    Pagination
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => []
    },
    activeIndex: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleChangePageIndex(index) {
      this.$emit('pagination', index)
    }
  }
}
</script>
