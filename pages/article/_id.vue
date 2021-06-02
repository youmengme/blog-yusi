<template>
  <div class="page-article">
    <BasicInfo :detail="articleInfo" />
    <Markdown type="full" :markdown="articleInfo.content" />
    <div class="article-extends">
      <div class="tips">
        <i class="fa fa-bullhorn" />
        如果你觉得这篇文章对你有所帮助，请点击下方[喜欢]按钮支持我继续更新网站！
      </div>
      <div class="actions">
        <div class="like"><i class="fa fa-heart-o" /> 喜欢</div>
        <span>OR</span>
        <div class="share"><i class="fa fa-share-alt" /> 分享</div>
      </div>
    </div>
    <Tags :list="articleInfo.tags" />
    <Relates :list="relates" />
    <Comments :article-id="articleId" />
  </div>
</template>

<script>
import BasicInfo from './components/basicInfo'
import Tags from './components/tag'
import Relates from './components/related'
import Comments from './components/comment'
import { getArticleDetail, getRelateArticles } from './service'
import Markdown from '~/components/Markdown'

export default {
  name: 'Article',
  layout: context => {
    return context.deviceType.platform === 'pc' ? 'pc' : 'mobile'
  },
  components: {
    BasicInfo,
    Tags,
    Relates,
    Comments,
    Markdown
  },
  async asyncData({ params, redirect }) {
    const relateArticles = await getRelateArticles()
    const articleInfo = await getArticleDetail(params.id)
    if (!articleInfo) return redirect('/article/error')
    return {
      articleInfo,
      relates: relateArticles,
      articleId: params.id
    }
  },
  data() {
    return {
      articleInfo: {},
      relates: [],
      articleId: null
    }
  },
  head() {
    const title = this.articleInfo?.title || ''
    return {
      title
    }
  }
}
</script>

<style lang="scss">
@import './style';

.article-extends {
  padding: 10px 20px 20px 20px;
  background: #fff;
  max-width: 100vw;

  i {
    margin-left: -10px;
    margin-right: 10px;
  }

  .tips {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100vw;
    padding: 5px 10px;
    border-radius: 2px;
    background-color: #fcf8e3;
    border: 1px solid #faebcc;
    color: #8a6d3b;
    text-indent: 20px;

    .fa {
      width: auto;
    }
  }

  .actions {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;

    span {
      position: absolute;
      left: 50%;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      font-weight: 500;
      background: #fff;
      transform: translateX(-50%);
      border-radius: 50%;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 40px;
      color: #fff;
      border-radius: 2px;
      cursor: pointer;

      &:first-child {
        background: #f78585;
        margin-right: 5px;
      }

      &:last-child {
        background: #5fcec0;
      }
    }
  }
}
</style>
