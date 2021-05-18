<template>
  <div class="content-default pc-main" :style="wrapStyle">
    <CHeader @toggle="translateContentWrap" />
    <div class="container">
      <Affiche />
      <div class="page-container">
        <div class="page-wrap"><nuxt /></div>
        <div class="page-widget" v-platform="'pc'"><CWidget /></div>
      </div>
    </div>
    <CFooter />
    <back-top />
  </div>
</template>

<script>
import CHeader from '@/components/Header/pc'
import CFooter from '@/components/footer'
import CWidget from '@/components/widget'
import Affiche from '@/components/affiche'
import BackTop from '@/components/right'

import { uaParser } from '@/utils/tramsforms/ua'
export default {
  components: {
    CHeader,
    CFooter,
    CWidget,
    Affiche,
    BackTop
  },
  data() {
    return {
      showList: ['all'],
      widgetData: {},
      position: '',
      status: 0,
      wrapStyle: '',
      isMobile: uaParser().isMobile
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
<style lang="scss" scoped>
.content-default {
  transition: all 0.2s ease-in-out;
  font-size: 14px;
  color: #555555;
}
.container {
  position: relative;
  max-width: 1226px;
  margin: 0 auto;
}
.page-container {
  position: relative;
  display: flex;
  align-items: flex-start;
  max-width: 1226px;

  .page-wrap {
    width: 856px;
    max-width: 979px;
    min-height: 80vh;
    flex: 1;
  }

  .page-widget {
    width: 360px;
    margin-left: 10px;
    position: sticky;
    top: 10px;
    flex-shrink: 0;
  }
}
</style>
