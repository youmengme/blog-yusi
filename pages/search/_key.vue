<template>
  <div class="page-search">
    <div class="search-container">
      <p class="title">搜索</p>
      <input type="text" class="search-input" placeholder="请输入搜索关键词" />
      <button class="search-btn">搜索</button>
    </div>
    <ArticleList :list="list" :total="count" />
  </div>
</template>

<script>
import { getArticleList } from '@/api'
import ArticleList from '../../components/ArticleList'

export default {
  name: 'Search',
  layout: context => {
    return context.deviceType.platform === 'pc' ? 'pc' : 'mobile'
  },
  components: {
    ArticleList
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
      list: [],
      count: 0
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
.page-search {
  .search-container {
    position: relative;
    display: flex;
    justify-content: center;
    background: var(--white);
    padding: 80px 0;
    margin-bottom: 10px;

    .title {
      position: absolute;
      top: 25px;
      left: 50%;
      font-size: 26px;
      color: var(--green);
      font-weight: 600;
      letter-spacing: 15px;
      transform: translateX(-50%);
    }

    .search-input {
      width: 600px;
      height: 50px;
      border: 1px solid var(--green);
      border-right: 0;
      padding-left: 15px;
      color: var(--gray);
      font-size: 16px;
      &::-webkit-input-placeholder {
        color: var(--grayLigth);
      }
    }

    .search-btn {
      width: 100px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: 1px solid var(--green);
      border-left: none;
      background: var(--green);
      color: var(--white);
      font-size: 16px;
      font-weight: 600;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>
