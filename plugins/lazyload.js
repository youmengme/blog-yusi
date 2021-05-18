import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: '/static/error.webp',
  loading: '/static/loading.svg',
  attempt: 1
})
