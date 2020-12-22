<template>
  <MediaQueryProvider
    :queries="$options.queries"
    @change="onMediaQueryChange"
    ssr
  >
    <div class="content-default" :style="wrapStyle">
      <CHeader @toggle="translateContentWrap" />

      <div class="container">
        <MatchMedia v-slot="{ pc }"> <Affiche v-if="pc" /> </MatchMedia>
        <div class="page-container">
          <div class="page-wrap"><nuxt /></div>
          <MatchMedia v-slot="{ pc }">
            <div class="page-widget" v-if="pc"><CWidget /></div>
          </MatchMedia>
        </div>
      </div>
      <CFooter />
      <back-top />
    </div>
  </MediaQueryProvider>
</template>

<script>
import { MediaQueryProvider, MatchMedia } from 'vue-component-media-queries'

import CHeader from '@/components/Header'
import CFooter from '@/components/footer'
import CWidget from '@/components/widget'
import Affiche from '@/components/affiche'
import backTop from '@/components/right'

import { uaParser } from '../utils/tramsforms/ua'
export default {
  components: {
    MediaQueryProvider,
    MatchMedia,
    CHeader,
    CFooter,
    CWidget,
    Affiche,
    backTop
  },
  queries: {
    mobile: '(max-width: 760px)',
    pc: '(min-width: 761px)'
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
    onMediaQueryChange(data) {
      console.log('onMediaQueryChange', data)
    },
    translateContentWrap() {
      this.wrapStyle = this.wrapStyle
        ? ''
        : 'transform: translate3d(220px, 0px, 0px);'
    }
  }
}
</script>
<style lang="less" scoped>
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
