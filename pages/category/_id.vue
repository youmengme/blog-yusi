<template>
  <div class="page-category">
    <Archive type="category" type-name="分类" name="Vue" />
    <ArticleList :list="list" :total="count" />
  </div>
</template>

<script>
import { getArticleList } from '@/api'
import ArticleList from '../../components/ArticleList'
import Archive from '../../components/archive'

export default {
  name: 'Category',
  components: {
    ArticleList,
    Archive
  },
  async asyncData() {
    const { code, data } = await getArticleList({})
    if (code || !data) return
    const { list = [], count = 0 } = data
    return {
      list,
      count
    }
  },
  data() {
    return {
      list: [],
      count: 0
    }
  },
  head() {
    return {
      title: '首页'
    }
  }
}
</script>

<style scoped lang="less">
.page-category {
}
</style>
