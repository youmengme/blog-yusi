<template>
  <div class="widget links">
    <div class="title">
      友情链接
      <div class="action"><span @click="addLinks"> 添加 </span></div>
    </div>
    <div class="content">
      <nuxt-link
        v-for="(item, index) in links"
        :key="index"
        to="/"
        class="link"
      >
        {{ item.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Links',
  data() {
    return {
      links: [
        { name: '百度一下' },
        { name: '百度一下' },
        { name: '百度一下' },
        { name: '百度一下' },
        { name: '百度一下' },
        { name: '百度一下' },
        { name: '百度一下' },
        { name: '百度一下' },
        { name: '百度一下' },
        { name: '百度一下' }
      ]
    }
  },
  methods: {
    addLinks() {
      this.$message({
        message: '还没开发好.....',
        type: 'warning'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.widget.links {
  .title {
    display: flex;
    justify-content: space-between;
    color: var(--greenDrak);
    .action {
      font-size: 12px;
      color: var(--green);
      cursor: pointer;
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    .link {
      width: 30%;
      line-height: 2;
      margin-right: 10px;
      padding: 3px 5px;
      text-align: center;
      border-radius: 3px;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: var(--greyLight);
      }
    }
  }
}
</style>
