<template>
  <div class="content">
    <Swiper :list="swipes" />
    <ArticleList :list="list" :total="count" :active-index="1" />
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList/index'
import { getArticleList, getIndexPageSwiper } from '@/api'
import Swiper from './components/slider'

export default {
  name: 'Index',
  layout: context => {
    return context.deviceType.platform === 'pc' ? 'pc' : 'mobile'
  },
  components: {
    Swiper,
    ArticleList
  },
  head() {
    return {
      title: '首页'
    }
  },
  async asyncData() {
    const [articles, swipes] = await Promise.all([
      getArticleList({
        type: 'date',
        pageSize: 10
      }),
      getIndexPageSwiper()
    ])
    const result = {}
    if (articles) {
      const { code, data, count } = articles
      result.list = []
      result.count = 0
      if (!code && data) {
        result.list = data
        result.count = count
      }
    }
    if (!swipes.code && Array.isArray(swipes.data)) {
      result.swipes = swipes.data
    }
    return result
  },
  data() {
    return {
      list: [],
      count: 0,
      swipes: []
    }
  }
}
</script>
