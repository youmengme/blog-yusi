<template>
  <div v-if="pageCount > 1" class="pagination">
    <ul>
      <li v-if="active > 1" class="prev-page-id">
        <span v-if="showPreviewTag" @click="handleChangePage(active - 1)">
          上一页
        </span>
      </li>
      <li :class="active === 1 ? 'active' : ''">
        <span @click="handleChangePage(1)">1</span>
      </li>
      <li v-if="list[0] > 2"><span class="dot">...</span></li>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="active === item ? 'active' : ''"
      >
        <span @click="handleChangePage(item)">{{ item }}</span>
      </li>

      <li v-if="active + 4 < pageCount"><span class="dot">...</span></li>
      <li v-if="pageCount > active" class="next-page-id">
        <span v-if="pageCount > active" @click="handleChangePage(active + 1)">
          下一页
        </span>
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
    margin-left: 0;
    margin-bottom: 0;

    > li {
      display: inline;

      > span {
        margin: 0 3px;
        float: left;
        padding: 4px 12px 3px;
        line-height: 20px;
        text-decoration: none;
        background-color: var(--greyLight);
        color: var(--blackLight);
        cursor: pointer;

        &:hover {
          background-color: #6fc299;
          color: var(--white);
        }
        &.dot {
          background-color: var(--transparent);
          cursor: default;
          &:hover {
            color: var(--blackLight);
          }
        }
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

      > a,
      > span {
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
