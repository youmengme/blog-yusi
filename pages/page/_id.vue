<template>
  <div class="page-tag">
    <Archive type="page" :type-name="`第${activeIndex}页`" />
    <ArticleList
      :list="list"
      :total="count"
      :active-index="activeIndex"
      @pagination="changePageIndex"
    />
  </div>
</template>

<script>
import { getArticleList } from '@/api'
import ArticleList from '../../components/ArticleList'
import Archive from '../../components/archive'

export default {
  name: 'Page',
  layout: context => {
    return context.deviceType.platform === 'pc' ? 'pc' : 'mobile'
  },
  components: {
    ArticleList,
    Archive
  },
  head() {
    return {
      title: '首页'
    }
  },
  async asyncData({ params }) {
    const page = parseInt(params.id) - 1
    const { code, data } = await getArticleList({
      type: 'new',
      count: true,
      page: page > -1 ? page : 0
    })
    if (code || !data) return
    const { rows = [], count = 0 } = data
    return {
      list: rows,
      count,
      activeIndex: params.id * 1 || 1
    }
  },
  data() {
    return {
      list: [],
      count: 0,
      activeIndex: 1
    }
  },
  methods: {
    changePageIndex(index) {
      this.$router.push({
        name: 'page-id',
        params: {
          id: index
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.page-tag {
}
</style>
