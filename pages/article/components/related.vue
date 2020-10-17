<template>
  <div class="related">
    <div class="relates">
      <nuxt-link
        class="related-item"
        :to="$getPageRouter('article', item.id)"
        v-for="(item, index) in list"
        :key="index"
      >
        <img :src="item.cover" alt="" class="cover" />
        <p class="title">{{ item.title }}</p>
      </nuxt-link>
    </div>
    <div class="recommends"></div>
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
  components: {}
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

    .related-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      margin-right: 15px;
      width: auto;
      &:last-child {
        margin-right: 0;
      }
      .cover {
        width: 100%;
        height: 100px;
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
