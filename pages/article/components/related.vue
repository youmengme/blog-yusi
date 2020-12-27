<template>
  <div class="related" :class="$platform.isMobile ? 'mobile' : 'pc'">
    <div class="relates">
      <nuxt-link
        class="related-item"
        :to="$getPageRouter('article', item.id)"
        v-for="(item, index) in list"
        :key="index"
      >
        <img
          v-lazy="
            $formatImageUrl(
              item.cover,
              $platform.isMobile ? 'm_article_related' : 'pc_article_related'
            )
          "
          alt=""
          class="cover"
        />
        <p class="title">{{ item.title }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Relates',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  methods: {
    getImageUrl(url) {
      const mapping = {
        pc: 'imageView2/1/w/190/h/120/interlace/1/q/75',
        m: 'imageView2/1/w/80/h/51/interlace/1/q/75'
      }
      return `${url}?${this.$platform.isMobile ? mapping.m : mapping.pc}`
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/css/func';

.related {
  margin-top: 10px;
  background: #fff;
  padding: 20px;

  .relates {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &.mobile {
      .related-item {
        .title {
          font-size: 12px;
        }
      }
    }

    .related-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 15px;
      width: auto;

      &:last-child {
        margin-right: 0;
      }

      .cover {
        width: 100%;
        margin-bottom: 10px;
      }

      .title {
        max-width: 100%;
        .global-lines(2);
      }
    }
  }
}
</style>
