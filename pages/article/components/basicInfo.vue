<template>
  <div
    class="article-basic"
    :class="{ mobile: $platform.isMobile }"
    v-if="detail"
  >
    <div class="breadcrumb">
      <nuxt-link to="/" class="fa fa-home" />
      <span class="iconfont icon-gt" />
      <nuxt-link :to="$getPageRouter('category', detail.category.id)">
        {{ detail.category.name }}
      </nuxt-link>
      <span class="iconfont icon-gt" />
      <span class="article-title">{{ detail.title }}</span>
    </div>
    <div class="title">{{ detail.title }}</div>
    <div class="info">
      <nuxt-link
        :to="$getPageRouter('category', detail.category.id)"
        class="category"
      >
        <span class="fa fa-list-alt" /> {{ detail.category.name }}
      </nuxt-link>
      <div class="views"><span class="fa fa-eye" /> {{ detail.views }}</div>
      <div class="date">
        <span class="iconfont icon-clock" />
        {{ detail.publishedAt | formatDateToRelativeDate }}
      </div>
      <nuxt-link to="#comment" class="comment">
        <span class="fa fa-comments-o" /> {{ '0条' }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicInfo',
  props: {
    detail: {
      type: Object,
      default: null
    }
  },
  components: {},
  data() {
    return {}
  },
  mounted() {
    console.log('isMobile', this.$platform.isMobile)
  }
}
</script>

<style lang="scss" scoped>
.article-basic {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #dfdfdf;
  overflow: hidden;

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
.mobile {
  font-size: 14px;
  .title {
    padding: 10px;
    font-size: 22px;
  }
}
</style>
