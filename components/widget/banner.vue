<template>
  <div class="widget banner" v-if="newest">
    <div class="title">{{ title }}</div>
    <nuxt-link class="content" :to="'/article/' + newest.id">
      <h3 class="article-title">{{ newest.title }}</h3>
      <p class="article-desc">{{ newest.desc }}</p>
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Textbanner',
  props: {
    title: {
      type: String,
      default: '最新发布'
    }
  },
  computed: {
    ...mapState({
      newest: state => state.newest
    })
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/func';

.widget.banner {
  width: auto;
  height: auto;

  .title {
    display: flex;
    justify-content: space-between;
    color: var(--red);
    font-weight: 500;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 16px 0;

    .article-title {
      color: var(--red);
      font-weight: 400;
    }

    .article-desc {
      color: var(--grey);
      margin-top: 5px;
      .global-lines(4);
    }
  }
}
</style>
