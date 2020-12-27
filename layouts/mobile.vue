<template>
  <div class="content-default mobile-main" :style="wrapStyle">
    <CHeader @toggle="translateContentWrap" />
    <div class="container">
      <div class="page-container">
        <div class="page-wrap"><nuxt /></div>
      </div>
    </div>
    <CFooter />
    <back-top />
  </div>
</template>

<script>
import CHeader from '@/components/Header/mobile'
import CFooter from '@/components/footer'
import backTop from '@/components/right'

export default {
  components: {
    CHeader,
    CFooter,
    backTop
  },
  data() {
    return {
      showList: ['all'],
      widgetData: {},
      position: '',
      status: 0,
      wrapStyle: ''
    }
  },
  methods: {
    translateContentWrap() {
      this.wrapStyle = this.wrapStyle
        ? ''
        : 'transform: translate3d(220px, 0px, 0px);'
    }
  }
}
</script>
<style lang="less" scoped>
.mobile-main {
  transition: all 0.2s ease-in-out;
  font-size: 14px;
  color: #555;
  max-width: 100vw;
}

.container {
  position: relative;
  max-width: 100vw;
  margin: 0 auto;
}

.page-container {
  position: relative;
  display: flex;
  align-items: flex-start;
  max-width: 100vw;

  .page-wrap {
    width: 100vw;
    min-height: 80vh;
    flex: 1;
  }
}
</style>
