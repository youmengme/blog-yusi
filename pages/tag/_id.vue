<template>
  <div class="page-tag">
    <Archive type="tag" type-name="标签" :name="tagInfo.name" v-if="tagInfo" />
    <ArticleList :list="list" :total="count" />
  </div>
</template>

<script>
import ArticleList from '../../components/ArticleList'
import Archive from '../../components/archive'
import { getTagArticle, getTagDetail } from '~/api'

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
    const [articleResult, tagResult] = await Promise.all([
      getTagArticle(params.id),
      getTagDetail(params.id)
    ])
    const { code, data, total } = articleResult
    const result = {}
    if (!code) {
      result.list = data
      result.count = total
    }
    if (!tagResult.code) {
      result.tagInfo = tagResult.data
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
