<template>
  <div>
    <div class="content-default" :style="wrapStyle">
      <custom-header @toggle="translateContentWrap" />
      <div class="container">
        <Affiche />
        <div class="page-container"><nuxt /></div>
      </div>
      <custom-footer />
      <back-top />
    </div>
  </div>
</template>

<script>
import customHeader from '@/components/Header'
import customFooter from '@/components/footer'
import Affiche from '@/components/affiche'

import backTop from '@/components/right'
export default {
  components: {
    customHeader,
    customFooter,
    Affiche,
    backTop
  },
  // middleware: 'distribute',
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
}
</style>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
