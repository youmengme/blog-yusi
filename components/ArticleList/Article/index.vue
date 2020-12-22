<template>
  <MatchMedia ssr v-slot="{ mobile, pc }">
    <article
      v-lazy-container="{ selector: 'img' }"
      class="article-item"
      :class="{ mobile, pc }"
    >
      <header class="article-header">
        <nuxt-link
          class="article-category"
          :to="$getPageRouter('category', article.category.id)"
        >
          {{ article.category.name }}
        </nuxt-link>
        <h2 class="article-title">
          <nuxt-link
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
          class="article-desc"
          :to="$getPageRouter('article', article.id)"
        >
          <div class="article-desc">{{ article.desc }}</div>
          <div class="article-other">
            <div class="article-tags" v-if="false">
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
            <div />
            <div class="article-article hidden-md-and-down">
              <span class="date">
                <i class="fa fa-clock-o" />
                {{ article.publishedAt | formatDateToRelativeDate }}
              </span>
              <span class="views">
                <i class="fa fa-eye" /> {{ article.views || 0 }}
              </span>
              <span class="like">
                <i
                  class="fa"
                  :class="article.liked ? 'fa-heart' : 'fa-heart-o'"
                />
                <span class="count"> {{ article.likes || 0 }} </span> 喜欢
              </span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </article>
  </MatchMedia>
</template>

<script>
import { MatchMedia } from 'vue-component-media-queries'

export default {
  components: {
    MatchMedia
  },
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
@import '../../../assets/css/func';
@import './styles/common';
@import './styles/pc';
@import './styles/mobile';
</style>
