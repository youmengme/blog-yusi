<template>
  <div id="header" class="custom-header">
    <header class="header">
      <div class="screen-mini hidden-lg-and-up" @click.stop="toggleMenu">
        <button class="btn"><i class="fa fa-list" /></button>
      </div>
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
              <i class="iconfont icon-search" />
            </div>
          </li>
        </ul>
      </div>
      <div
        class="mini-header hidden-lg-and-up"
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
              <i class="iconfont icon-search" />
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
          url: '/',
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
      this.$emit('toggle')
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  position: relative;
  background: #1abc9c;
  z-index: 100;

  .screen-mini .btn {
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px 22px;
    color: #fff;
    outline: none;
    background: transparent;
    z-index: 100;
    cursor: pointer;
  }

  .container-inner {
    position: relative;
    max-width: 1226px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    .ym-logo {
      display: flex;
      align-items: baseline;
      justify-content: center;
      text-align: center;
      position: relative;
      text-shadow: 0 0 1px rgba(94, 255, 216, 0.8);
      padding: 15px 0;
      color: #fff;
      cursor: pointer;
      letter-spacing: -2px;

      &:hover {
        .ym-mono {
          letter-spacing: 5px;
        }

        .ym-bloger {
          left: 26px;
          opacity: 0.2;
        }
      }

      .ym-bloger {
        font-weight: bold;
        font-size: 24px;
        margin-left: -6px;
        font-family: 'cyjianxk', serif;
        transition: all 0.5s ease-out;
      }

      .ym-mono {
        font-size: 54px;
        font-family: 'RS_XingKai', serif;
        transition: all 0.1s ease-out;
        font-weight: bold;
      }
    }
  }

  .navbar {
    height: 50px;
    background-color: @background_4a4a4a;
    opacity: 0.9;

    .nav {
      position: relative;
      display: flex;
      align-items: center;
      width: auto;
      height: 50px;
      margin: 0 auto;
      font-size: 16px;
      max-width: 1226px;

      .search {
        position: absolute;
        right: 0;
        display: flex;
        transition: all 0.3s linear;
        width: auto;
        overflow: hidden;

        &:hover {
          opacity: 0.75;

          .search-input {
            width: 250px;
            padding-left: 15px;
          }
        }

        .search-input {
          width: 0;
          font-size: 14px;
          color: #fff;
          padding-left: 0;
          background: lighten(rgb(74, 74, 74), 5%);
          transition: width 0.2s ease-in-out;
        }

        .toggle-search {
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          color: #fff;
          background: #16a085;
          cursor: pointer;
        }
      }

      .menu-item {
        position: relative;
        display: flex;
        align-items: center;
        min-width: 75px;

        a {
          padding: 14px 20px;
          color: @white;
          font-weight: bold;
          transition: all 0.2s ease-in-out;
        }

        .sub-menu {
          min-width: 130px;
          left: 0;
          max-height: 0;
          position: absolute;
          top: 100%;

          .sub-menu-item {
            position: relative;
            margin: 0;
            opacity: 1;
            transform: rotateY(90deg);
            transition: transform 0.3s;

            a {
              display: block;
              width: auto;
              line-height: 30px;
              padding: 5px 20px 5px;
              color: @white;
            }
          }
        }

        &:hover {
          a {
            background-color: @cyan;
          }

          .sub-menu {
            display: block;
            max-height: 100px;

            .sub-menu-item {
              transform: rotateY(0deg);

              a {
                &:hover {
                  background-color: @sub-menu-hover-bg;
                }
              }

              &:nth-child(1) {
                transition-delay: 350ms;
              }

              &:nth-child(2) {
                transition-delay: 300ms;
              }

              &:nth-child(3) {
                transition-delay: 250ms;
              }

              &:nth-child(4) {
                transition-delay: 200ms;
              }
            }
          }
        }
      }
    }
  }

  .mini-header {
    position: fixed;
    left: -220px;
    top: 0;
    width: 220px;
    height: 100vh;
    background: #222;
    padding-top: 60px;
    &.hide-before {
      &:before {
        display: none;
      }
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100vw;
    }

    .nav {
      flex-direction: column;

      .menu-item {
        position: relative;
        border-bottom: 0.5px solid #111;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;

        > a {
          position: relative;
          width: 100%;
          color: #00a67c;
          font-size: 12px;
          padding: 15px 0 15px 50px;

          &:before {
            content: '';
            position: absolute;
            left: 25px;
            top: 50%;
            transform: translateY(-50%);
            width: 8px;
            height: 8px;
            border: 1px solid #666;
            border-radius: 50%;
          }
        }

        .sub-menu {
          position: relative;
          background: #333;
          width: 100%;

          .sub-menu-item {
            font-size: 12px;
            transform: rotateY(0deg);

            a {
              display: flex;
              width: 100%;
              height: 40px;
              line-height: 40px;
              padding-left: 50px;
              color: #ddd;
              cursor: pointer;

              &:hover {
                background: @cyan;
              }
            }
          }
        }

        a {
          transition: background 0.2s ease-in-out;

          &:hover {
            color: #fff;
            background: @cyan;
          }
        }

        &:hover {
          .sub-menu {
            top: auto;
          }
        }
      }

      .search {
        position: relative;
        overflow: initial;
        width: 100%;
        box-sizing: border-box;
        opacity: 1 !important;
        display: flex;
        align-items: center;
        justify-content: center;

        .search-input {
          width: 0;
          font-size: 14px;
          color: #fff;
          padding-left: 0;
          background: lighten(rgb(74, 74, 74), 5%);
          transition: width 0.2s ease-in-out;
        }

        .toggle-search {
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          color: #fff;
          background: #16a085;
          cursor: pointer;
        }

        &:hover {
          border-bottom: 1px solid #00a67c;

          .toggle-search {
            background-color: @cyan;
          }
        }

        .search-input {
          flex: 1;
          width: 150px !important;
          height: 50px;
          padding-left: 15px;
          background: transparent;
        }

        .toggle-search {
          padding: 0;
          width: 50px;
          height: 50px;
          border-radius: 50% 50% 0 0;
          flex-shrink: 0;
          background: transparent;
          cursor: pointer;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
