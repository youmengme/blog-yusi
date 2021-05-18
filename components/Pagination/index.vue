<template>
  <div v-if="pageCount > 1" class="pagination">
    <ul>
      <li
        v-if="active > 1"
        class="prev-page-id"
        @click="handleChangePage(active - 1)"
      >
        <nuxt-link
          v-if="showPreviewTag"
          :to="{ name: 'page-id', params: { id: active - 1 } }"
        >
          上一页
        </nuxt-link>
      </li>
      <li :class="active === 1 ? 'active' : ''">
        <nuxt-link :to="{ name: 'page-id', params: { id: 1 } }">1</nuxt-link>
      </li>
      <li v-if="list[0] > 2"><span>...</span></li>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="active === item ? 'active' : ''"
      >
        <nuxt-link :to="{ name: 'page-id', params: { id: item } }">
          {{ item }}
        </nuxt-link>
      </li>

      <li v-if="active + 4 < pageCount"><span>...</span></li>
      <li v-if="pageCount > active" class="next-page-id">
        <nuxt-link
          v-if="pageCount > active"
          :to="{ name: 'page-id', params: { id: active + 1 } }"
        >
          下一页
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 20
    },
    active: {
      type: Number,
      default: 0
    }
  },
  computed: {
    pageCount() {
      const { total, size } = this
      return Math.ceil(total / size)
    },
    list() {
      const { active, pageCount } = this
      const start = active - 4 > 1 ? active - 4 : 2
      const end = active + 4 < pageCount ? active + 4 : pageCount
      const list = []
      for (let i = start; i <= end; i++) {
        list.push(i)
      }
      return list
    },
    showPreviewTag() {
      const { active } = this
      return active - 1 > 1 || active === 2
    }
  },
  methods: {
    handleChangePage(pageIndex) {
      this.$emit('change', pageIndex)
    }
  }
}
</script>
<style lang="scss" scoped>
.pagination {
  padding: 20px 0 15px 0;
  background-color: var(--white);
  text-align: center;
  ul {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    margin-left: 0;
    margin-bottom: 0;
    > li {
      display: inline;
      > a {
        margin: 0 3px;
        float: left;
        padding: 4px 12px 3px;
        line-height: 20px;
        text-decoration: none;
        background-color: var(--greyLight);
        color: var(--blackLight);
        &:hover {
          background-color: #6fc299;
          color: var(--white);
        }
        &:focus {
          background-color: #6fc299;
          color: var(--white);
        }
      }
      > span {
        margin: 0 3px;
        float: left;
        padding: 4px 12px 3px;
        line-height: 20px;
        text-decoration: none;
        color: var(--gray);
        background-color: var(--transparent);
        cursor: default;
      }
    }
    > .active {
      > a,
      > span {
        background-color: #00a67c;
        color: var(--white);
        cursor: default;
      }
    }
    > .disabled {
      > span {
        color: var(--gray);
        background-color: var(--transparent);
        cursor: default;
      }
      > a {
        color: var(--gray);
        background-color: var(--transparent);
        cursor: default;

        &:hover,
        &:focus {
          color: var(--gray);
          background-color: var(--transparent);
          cursor: default;
        }
      }
    }
  }
}
</style>
