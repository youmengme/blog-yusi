<template>
  <div class="swiper">
    <el-carousel :interval="3000" height="220px" indicator-position="none">
      <el-carousel-item
        v-for="(item, index) in list"
        :key="index"
        class="el-carousel-item-custom"
      >
        <nuxt-link
          class="carousel-item"
          :to="$getPageRouter('article', item.id)"
        >
          <img :src="item.cover" alt="" />
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
  padding: 20px;
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
    width: auto;
    height: 100%;
    background: #ddd;
    border: 1px solid rgba(200, 200, 200, 0.2);

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
