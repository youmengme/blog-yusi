<template>
  <div id="header" class="custom-header">
    <header class="header">
      <div class="screen-mini hidden-lg-and-up" @click.stop="toggleMenu">
        <button class="btn"><i class="fa fa-list" /></button>
      </div>
      <div class="container-inner">
        <nuxt-link to="/" class="ym-logo">
          <span class="ym-mono">有梦博客</span>
        </nuxt-link>
      </div>
      <div
        class="mini-header"
        :class="{ 'hide-before': !showMenu }"
        @click.stop="toggleMenu"
      >
        <ul class="nav" @click.stop="() => {}">
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
          name: '笔记',
          url: '/',
          children: [
            {
              name: 'Vue',
              url: '/',
              children: []
            },
            {
              name: 'React',
              url: '/',
              children: []
            },
            {
              name: 'Typescript',
              url: '/',
              children: []
            }
          ]
        },
        {
          name: 'LeetCode',
          url: '/category/1',
          children: [
            {
              name: 'Easy',
              url: '/',
              children: []
            },
            {
              name: 'Medium',
              url: '/',
              children: []
            },
            {
              name: 'Hard',
              url: '/',
              children: []
            }
          ]
        },
        {
          name: '效率工具',
          url: '/',
          children: []
        },
        {
          name: '关于我',
          url: '/',
          children: []
        }
      ]
    }
  },
  methods: {
    handleSearchKeyword() {
      if (!this.kw) return
      console.log(this.kw)
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
      console.log(123123123, this.showMenu)
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="less" scoped>
@import './styles/common';
@import './styles/mobile';
</style>
