<template>
  <div v-if="articles.length" class="widget posts">
    <div class="title">猜你喜欢</div>
    <div class="content">
      <nuxt-link
        v-for="item in articles"
        :key="item.id"
        :to="$getPageRouter('article', item.id)"
        :title="item.title"
        class="posts-item"
      >
        <div class="cover"><img v-lazy="item.cover" :alt="item.title" /></div>
        <div class="article-info">
          <span class="article-title"> {{ item.title }} </span>
          <p class="article-date">
            {{ item.publishedAt }}
            <span class="like">
              <i class="fa fa-heart-o" />
              <span class="count">{{ item.likes }}</span> 喜欢
            </span>
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Postlist',
  computed: {
    ...mapState({
      articles: state => state.recommendArticles
    })
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/utils.scss';

.widget.posts {
  .title {
    color: var(--greenDrak);
  }

  .content {
    .posts-item {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #eee;

      &:hover {
        img {
          transform: scale(1.3);
        }
      }

      .cover {
        width: 100px;
        height: 65px;
        margin-right: 10px;
        overflow: hidden;
        border-radius: 3px;

        img {
          width: 100px;
          height: 65px;
          transition: all 0.3s ease-in-out;
        }
      }

      .article-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .article-title {
          @include line(2);
        }

        .article-date {
          display: flex;
          justify-content: space-between;
          color: var(--gray);

          .like {
            color: var(--pink);
          }
        }
      }
    }
  }
}
</style>
