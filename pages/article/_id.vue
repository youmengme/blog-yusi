<template>
  <div class="page-article">
    <div class="article-basic">
      <div class="breadcrumb">
        <nuxt-link to="/" class="fa fa-home" />
        <span class="iconfont icon-gt" />
        <nuxt-link :to="$getPageRouter('category', articleInfo.category.id)">
          {{ articleInfo.category.name }}
        </nuxt-link>
        <span class="iconfont icon-gt" />
        <span class="article-title">{{ articleInfo.title }}</span>
      </div>
      <div class="title">{{ articleInfo.title }}</div>
      <div class="info">
        <nuxt-link
          :to="$getPageRouter('category', articleInfo.category.id)"
          class="category"
        >
          <span class="fa fa-list-alt" /> {{ articleInfo.category.name }}
        </nuxt-link>
        <div class="views">
          <span class="fa fa-eye" /> {{ articleInfo.views }}
        </div>
        <div class="date">
          <span class="iconfont icon-clock" />
          {{ articleInfo.publishedAt | formatDateToRelativeDate }}
        </div>
        <nuxt-link to="#comment" class="comment">
          <span class="fa fa-comments-o" /> {{ '0条' }}
        </nuxt-link>
      </div>
    </div>
    <div
      id="article-detail-container"
      class="markdown-preview md-dark"
      v-html="articleInfo.content"
    />
    <div class="article-extends">
      <div class="tips">
        <i class="fa fa-bullhorn" />
        如果你觉得这篇文章对你有所帮助，请点击下方[喜欢]按钮支持我继续更新网站！
      </div>
      <div class="actions">
        <div class="like"><i class="fa fa-heart-o" /> 喜欢(99+)</div>
        <span>OR</span>
        <div class="share"><i class="fa fa-share-alt" /> 分享</div>
      </div>
    </div>

    <Tags :list="articleInfo.tags" />
    <MatchMedia v-slot="{ pc }">
      <Relates :list="relates" v-if="pc" />
      <Comments v-if="pc" />
    </MatchMedia>
  </div>
</template>

<script>
import { MatchMedia } from 'vue-component-media-queries'

import { getArticleDetail, getRelateArticles } from './service'
import Tags from './components/tag'
import Relates from './components/related'
import Comments from './components/comment'

export default {
  name: 'Article',
  components: {
    MatchMedia,
    Tags,
    Relates,
    Comments
  },
  async asyncData({ params }) {
    const relateArticles = await getRelateArticles({
      type: 'view',
      size: 4
    })
    const articleInfo = await getArticleDetail(params.id)

    return {
      articleInfo,
      relates: relateArticles
    }
  },
  data() {
    return {
      articleInfo: {},
      relates: []
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
.page-article {
  .article-basic {
    max-width: 100vw;
    background: #fff;
    border-bottom: 1px solid #dfdfdf;

    .breadcrumb {
      display: flex;
      align-items: center;
      width: auto;
      height: 40px;
      padding: 0 10px;
      background: #f7f7f7;

      a,
      span {
        margin-right: 5px;
        font-weight: 500;
      }

      span {
        color: #999;
        &.article-title {
          font-weight: 400;
        }
      }

      span[class*='icon-gt'] {
        font-size: 10px;
        font-weight: 400;
      }
    }

    .title {
      padding: 25px 10px;
      font-size: 30px;
      font-weight: 500;
      max-width: 100vw;
    }

    .info {
      display: flex;
      align-items: center;
      padding-left: 10px;
      margin-bottom: 10px;
      color: #999;

      > div,
      > a {
        display: flex;
        align-items: center;
        margin-right: 20px;

        > span {
          margin-right: 3px;
          color: #999;
          font-weight: 500;
          margin-top: -1px;
        }
      }
    }
  }

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
}
</style>
<style lang="less">
@import './style';
</style>
