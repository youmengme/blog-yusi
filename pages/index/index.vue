<template>
  <div class="content">
    <swiper :list="swipes" />
    <ArticleList :list="list" :total="count" :active-index="1" />
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList/index'
import { getArticleList } from '@/api'
import swiper from '../../components/slider'

export default {
  name: 'Index',
  components: {
    swiper,
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
      getArticleList({
        type: 'view',
        size: 5
      })
    ])
    const result = {}
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
