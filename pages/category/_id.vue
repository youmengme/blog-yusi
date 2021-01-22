<template>
  <div class="page-category">
    <Archive
      type="category"
      type-name="分类"
      :name="categoryInfo.name"
      v-if="categoryInfo"
    />
    <ArticleList :list="list" :total="count" />
  </div>
</template>

<script>
import { getCategoryArticle, getCategoryDetail } from '@/api'
import ArticleList from '../../components/ArticleList'
import Archive from '../../components/archive'

export default {
  name: 'Category',
  layout: context => {
    return context.deviceType.platform === 'pc' ? 'pc' : 'mobile'
  },
  components: {
    ArticleList,
    Archive
  },
  async asyncData({ params }) {
    const [articleResult, categoryDetail] = await Promise.all([
      getCategoryArticle(params.id, {
        count: true
      }),
      getCategoryDetail(params.id)
    ])
    const result = {}
    if (!categoryDetail.code && categoryDetail.data) {
      result.categoryInfo = categoryDetail.data
    }

    if (!articleResult.code && articleResult.data) {
      const { rows = [], count = 0 } = articleResult.data
      result.list = rows
      result.count = count
    }

    return result
  },
  data() {
    return {
      list: [],
      count: 0,
      categoryInfo: null
    }
  },
  head() {
    return {
      title: '首页'
    }
  }
}
</script>
