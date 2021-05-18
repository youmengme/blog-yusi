<template>
  <div class="widget social">
    <nuxt-link
      v-for="(item, index) in actions"
      :key="index"
      :to="item.path"
      rel="external nofollow"
      target="_blank"
      class="social-item"
    >
      <i class="iconfont" :class="item.className" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Social',

  data() {
    return {
      actions: [
        {
          className: 'icon-weibo',
          path: '/go/weibo'
        },
        {
          className: 'icon-github',
          path: '/go/github'
        },
        {
          className: 'icon-weixin',
          path: '/go/weixin'
        },
        {
          className: 'icon-juejin',
          path: '/go/juejin'
        },
        {
          className: 'icon-email',
          path: '/go/email'
        },
        {
          className: 'icon-rss',
          path: '/go/rss'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.widget.social {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 65px;
  background: #fff;
  padding: 10px;

  .social-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    color: #fff;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;

    i {
      font-size: 26px;
    }

    &:nth-child(1) {
      background: #f78585;
    }

    &:nth-child(2) {
      background: #666;
    }

    &:nth-child(3) {
      background: #6fc299;
    }

    &:nth-child(4) {
      background: #eca3ac;
    }

    &:nth-child(5) {
      background: #27ccc0;
    }

    &:nth-child(6) {
      background: #ff7c49;
    }

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
