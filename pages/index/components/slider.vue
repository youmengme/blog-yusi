<template>
  <div class="swiper">
    <client-only>
      <swiper
        auto-update
        auto-destroy
        autoplay
        :options="swiperOptions"
        :style="{ height: $platform.isMobile ? '110px' : '230px' }"
      >
        <swiper-slide v-for="(item, index) in list" :key="index">
          <nuxt-link class="carousel-item" :to="item.url">
            <img v-lazy="$formatImageUrl(item.cover, '')" alt="" />
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOptions: {
        autoplay: true
      }
    }
  }
}
</script>

<style scoped lang="less">
.swiper {
  padding: 12.5px;
  background: #fff;
  margin-bottom: 10px;
  box-sizing: border-box;

  .el-carousel-item-custom {
    opacity: 0.7;

    &.is-active {
      opacity: 1;
    }
  }

  .carousel-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    background: #ddd;
    border-radius: 3px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
