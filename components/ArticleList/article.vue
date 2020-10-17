<template>
  <article v-lazy-container="{ selector: 'img' }" class="article-item">
    <header class="article-header">
      <nuxt-link
        class="article-category hidden-md-and-down"
        :to="$getPageRouter('category', article.category.id)"
      >
        {{ article.category.name }}
      </nuxt-link>
      <h2>
        <nuxt-link
          class="article-title"
          :to="$getPageRouter('article', article.id)"
          :title="article.title"
        >
          {{ article.title }}
        </nuxt-link>
      </h2>
    </header>
    <div class="article-detail">
      <nuxt-link
        class="article-cover hidden-md-and-down"
        :to="$getPageRouter('article', article.id)"
      >
        <img class="cover" :data-src="article.cover" :alt="article.title" />
      </nuxt-link>
      <nuxt-link
        class="article-detail"
        :to="$getPageRouter('article', article.id)"
      >
        <div class="article-desc">{{ article.desc }}</div>
        <div class="article-other">
          <div class="article-tags">
            <span class="iconfont icon-tag" v-if="article.tags.length" />
            <nuxt-link
              class="tag"
              v-for="(ele, i) in article.tags"
              :key="i"
              :to="$getPageRouter('tag', ele.id)"
            >
              {{ ele.name }}
            </nuxt-link>
          </div>
          <div class="article-article hidden-md-and-down">
            <span class="date">
              <i class="iconfont icon-clock" /> {{ article.publishedAt }}
            </span>
            <span class="views">
              <i class="iconfont icon-eye" /> {{ article.views || 0 }}
            </span>
            <span class="like">
              <i
                class="iconfont"
                :class="article.liked ? 'icon-like-full' : 'icon-like'"
              />
              <span class="count"> {{ article.likes || 0 }} </span> 喜欢
            </span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {}
}
</script>

<style lang="less">
@import '../../assets/css/func';

.article-item {
  width: 100%;
  background: var(--white);
  margin-bottom: 10px;
  padding: 20px 15px;

  &:hover {
    .cover {
      transform: scale(1.2);
    }
  }

  .article-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .article-category {
      position: relative;
      width: auto;
      height: 20px;
      line-height: 20px;
      color: var(--white);
      padding: 0 5px;
      background-color: var(--red);
      margin-right: 5px;

      &:before {
        content: '';
        position: absolute;
        top: 7px;
        right: -4px;
        border-left: 4px solid var(--red);
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
      }
    }

    .article-title {
      margin-left: 5px;
      transition: color 0.2s ease-in-out;
    }
  }

  .article-detail {
    display: flex;
    > .article-other {
      display: none;
    }
    .article-cover {
      display: flex;
      flex-shrink: 0;
      width: 200px;
      height: 125px;
      overflow: hidden;
      margin-right: 15px;

      .cover {
        width: 200px;
        height: 125px;
        transition: all 0.4s ease-in-out;
      }
    }

    .article-detail {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #777;
      line-height: 24px;
      cursor: auto;

      .article-desc {
        .global-lines(4);

        &:hover {
          color: #999;
        }
      }

      .article-other {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        .article-tags {
          cursor: pointer;

          .icon-tag {
            font-weight: bolder;
            font-size: 14px;
            cursor: default;
          }
          .tag {
            color: #999;
          }
        }

        .article-article {
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          width: auto;
          height: 24px;

          > span {
            display: flex;
            align-items: center;
            font-size: 13px;
            margin-right: 20px;
            color: #999;
            line-height: 1;

            &.like {
              color: #f78585;
              cursor: pointer;
            }

            i {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
