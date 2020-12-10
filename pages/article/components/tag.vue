<template>
  <div class="article-tags">
    <nuxt-link
      :to="$getPageRouter('tag', item.id)"
      class="tag"
      v-for="(item, index) in list"
      :key="index"
    >
      {{ item.name }}
    </nuxt-link>
    <i class="iconfont icon-weibiaoti1" />
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.article-tags {
  position: relative;
  display: flex;
  align-items: center;
  width: auto;
  height: 55px;
  border-top: 1px solid #f7f7f7;
  background: #fff;
  padding: 0 20px 0 55px;

  .iconfont {
    position: absolute;
    left: 20px;
    top: 10px;
    width: 21px;
    height: 30px;
    font-size: 25px;
    color: #bbb;
    font-weight: bold;
  }

  a {
    display: inline-block;
    padding: 2px 6px 3px;
    margin: 0 2px;
    color: #fff;
    background-color: #4a4a4a;
    opacity: 0.7;

    &:hover {
      background-color: #428bca;
      opacity: 1;
      filter: alpha(opacity=100);
    }

    &:nth-child(5n) {
      background-color: #4a4a4a;
    }

    &:nth-child(5n + 1) {
      background-color: #428bca;
    }

    &:nth-child(5n + 2) {
      background-color: #5cb85c;
    }

    &:nth-child(5n + 3) {
      background-color: #d9534f;
    }

    &:nth-child(5n + 4) {
      background-color: #f0ad4e;
    }
  }
}
</style>
