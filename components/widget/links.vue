<template>
  <div class="widget links">
    <div class="title">
      友情链接
      <div class="action"><span @click="addLinks"> 添加 </span></div>
    </div>
    <div class="content" v-if="links.length">
      <nuxt-link
        v-for="(item, index) in links"
        :key="index"
        to="/"
        class="link"
      >
        {{ item.name }}
      </nuxt-link>
    </div>
    <div class="content empty" v-else>还没有友情链接呢~</div>
  </div>
</template>

<script>
export default {
  name: 'Links',
  data() {
    return {
      links: []
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
<style lang="scss" scoped>
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

    &.empty {
      width: auto;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #cccccc;
    }
  }
}
</style>
