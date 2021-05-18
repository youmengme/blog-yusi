import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: 'https://cdn.youmeng.me/blog/2021-05-18-error.webp',
  loading: 'https://cdn.youmeng.me/blog/2021-05-18-loading.svg',
  attempt: 1
})
