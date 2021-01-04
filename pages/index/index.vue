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
        count: true
      }),
      getIndexPageSwiper()
    ])
    const result = {}
    console.log('swipes', swipes)
    if (!articles.code && articles.data) {
      result.list = articles.data.rows
      result.count = articles.data.count
    }
    if (!swipes.code && swipes.data) {
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
