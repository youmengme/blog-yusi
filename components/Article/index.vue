<template>
  <article class="article-item">
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
      <img
        class="article-cover"
        v-lazy="$formatImageUrl(article.cover, 'pc_article_cover')"
        :alt="article.title"
      />
      <div class="article-content">
        <div class="article-desc">{{ article.desc }}</div>
        <div class="article-ext">
          <div class="date">
            <i class="fa fa-clock-o" />
            {{ article.publishedAt | formatDateToRelativeDate }}
          </div>
          <div class="views">
            <i class="fa fa-eye" /> {{ article.views || 0 }}
          </div>
          <div class="like">
            <i class="fa" :class="article.liked ? 'fa-heart' : 'fa-heart-o'" />
            <span class="count"> {{ article.likes || 0 }} </span> 喜欢
          </div>
        </div>
      </div>
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

<style lang="scss">
@import 'styles/common.scss';
@import 'styles/pc.scss';
@import 'styles/mobile.scss';
</style>
