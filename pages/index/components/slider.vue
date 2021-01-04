<template>
  <div class="swiper">
    <el-carousel
      :interval="3000"
      :height="$platform.isMobile ? '110px' : '230px'"
    >
      <el-carousel-item
        v-for="(item, index) in list"
        :key="index"
        class="el-carousel-item-custom"
      >
        <nuxt-link class="carousel-item" :to="item.url">
          <img v-lazy="$formatImageUrl(item.cover, '')" alt="" />
        </nuxt-link>
      </el-carousel-item>
    </el-carousel>
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
    return {}
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
