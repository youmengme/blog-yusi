<template>
  <button
    class="back-top btn"
    :class="{ show: isShow }"
    title="回顶部"
    style="outline: none"
    @click="backTop"
  >
    <i class="fa fa-arrow-up" />
  </button>
</template>

<script>
export default {
  name: 'BackTop',
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    if (this.$isClient) {
      window.onscroll = () => {
        const topScroll =
          document.body.scrollTop || document.documentElement.scrollTop
        this.isShow = topScroll >= 200
      }
    }
  },
  methods: {
    backTop() {
      if (this.$isClient) {
        document.getElementById('header').scrollIntoView({
          block: 'end',
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.back-top {
  position: fixed;
  right: 25px;
  bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--white);
  background: var(--cyanDrak);
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 2px;

  &.show {
    opacity: 1;
  }
}
</style>
