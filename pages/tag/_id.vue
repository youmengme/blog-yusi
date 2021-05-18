<template>
  <div class="page-tag">
    <Archive type="tag" type-name="标签" :name="tagInfo.name" v-if="tagInfo" />
    <ArticleList :list="list" :total="count" />
  </div>
</template>

<script>
import { getArticleList, getTagDetail } from '@/api'
import ArticleList from '../../components/ArticleList'
import Archive from '../../components/archive'

export default {
  name: 'Tag',
  layout: context => {
    return context.deviceType.platform === 'pc' ? 'pc' : 'mobile'
  },
  components: {
    ArticleList,
    Archive
  },
  async asyncData({ params }) {
    const [articleResult, categoryDetail] = await Promise.all([
      getArticleList({
        categoryId: params.id,
        count: true
      }),
      getTagDetail(params.id)
    ])
    const result = {}
    if (!categoryDetail.code && categoryDetail.data) {
      result.tagInfo = categoryDetail.data
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
      tagInfo: null
    }
  },
  head() {
    const title = `${this.tagInfo?.name} - 标签`
    return {
      title
    }
  }
}
</script>

<style scoped lang="scss">
.page-tag {
}
</style>
