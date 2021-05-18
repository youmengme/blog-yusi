<template>
  <div id="header" class="custom-header">
    <header class="header">
      <div class="container-inner">
        <nuxt-link to="/" class="ym-logo">
          <span class="ym-mono">有梦博客</span>
          <span class="ym-bloger hidden-sm-and-down">
            – 关注前端圈,分享踩坑记录
          </span>
        </nuxt-link>
      </div>
      <div class="navbar hidden-md-and-down">
        <ul class="nav">
          <li v-for="(item, index) in headers" :key="index" class="menu-item">
            <nuxt-link
              v-if="item.category"
              :to="{ name: 'category-id', params: { name: item.name } }"
            >
              {{ item.name }}
            </nuxt-link>
            <nuxt-link v-if="item.url" :to="{ path: item.url }">
              {{ item.name }}
            </nuxt-link>
            <ul
              v-if="item.children && item.children.length > 0"
              class="sub-menu"
            >
              <li
                v-for="(childrenItem, index1) in item.children"
                :key="index1"
                class="sub-menu-item"
              >
                <nuxt-link
                  :to="{
                    name: 'category-id',
                    params: { name: childrenItem.name }
                  }"
                >
                  {{ childrenItem.name }}
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="search">
            <input
              v-model="kw"
              class="search-input"
              placeholder="请输入搜索关键词"
              type="text"
              @keydown.enter="handleSearchKeyword"
            />
            <div class="toggle-search" @click="handleSearchKeyword">
              <i class="fa fa-search" />
            </div>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header1',
  data() {
    return {
      kw: '',
      showMenu: false,
      headers: [
        {
          name: '首页',
          url: '/',
          children: []
        },
        {
          name: 'LeetCode',
          url: '/category/5'
        },
        {
          name: '随笔',
          url: '/category/3',
          children: []
        }
      ]
    }
  },
  methods: {
    handleSearchKeyword() {
      if (!this.kw) return
      this.$router.push('/search?kw=' + this.kw)
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
      this.$emit('toggle')
    }
  }
}
</script>
<style lang="scss" scoped>
@import './styles/common';
@import './styles/pc';
</style>
