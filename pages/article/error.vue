<template>
  <div class="error">
    <div class="error-text">欧呦，你访问的这篇文章不存在呢。</div>
    <div class="error-tip">
      您可以前往<a href="https://www.juejin.com">掘金</a
      >搜索相同的关键词获取帮助哈。
    </div>
    <div class="error-link"><nuxt-link to="/"> 返回首页</nuxt-link></div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {},
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.error {
  text-align: center;
  padding-top: 100px;

  .error-text {
    font-size: 30px;
    font-weight: 500;
  }

  .error-tip {
    margin-top: 20px;
    font-size: 14px;
  }

  .error-link {
    width: 100px;
    font-size: 14px;
    padding: 5px 10px;
    text-align: center;
    margin: 0 auto;
    margin-top: 100px;
    background: var(--greenDrak);

    a {
      color: #fff;
    }
  }
}
</style>
