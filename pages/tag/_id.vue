<template>
  <div class="page-tag">
    <Archive type="tag" type-name="标签" name="Vue" />
    <ArticleList :list="list" :total="count" />
  </div>
</template>

<script>
import { getArticleList } from '@/api'
import ArticleList from '../../components/ArticleList'
import Archive from '../../components/archive'

export default {
  name: 'Tag',
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
      list: []
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
.page-tag {
}
</style>
