<template>
  <div v-if="tags.length > 0" class="widget tags">
    <div class="title">标签云</div>
    <div class="content">
      <nuxt-link
        v-for="(item, index) in tags"
        :key="index"
        title
        :to="$getPageRouter('tag', item.id)"
        class="tag"
      >
        {{ item.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Tags',
  computed: {
    ...mapState({
      tags: state => state.recommendTags
    })
  }
}
</script>

<style scoped lang="less">
.widget.tags {
  .title {
    color: var(--greenDrak);
  }

  .content {
    display: flex;
    flex-wrap: wrap;

    .tag {
      width: 48%;
      height: 25px;
      line-height: 25px;
      text-align: center;
      margin-bottom: 8px;
      margin-right: 3%;
      border-radius: 3px;
      background: var(--gray);
      color: var(--white);
      transition: opacity 0.2s ease-in-out;

      &:hover {
        opacity: 0.8;
      }

      &:nth-child(2n) {
        margin-right: 0;
      }

      &:nth-child(5n-5) {
        background: #f78585;
      }

      &:nth-child(5n-4) {
        background: #666;
      }

      &:nth-child(5n-3) {
        background: #6fc299;
      }

      &:nth-child(5n-2) {
        background: #eca3ac;
      }

      &:nth-child(5n-1) {
        background: #27ccc0;
      }
    }
  }
}
</style>
