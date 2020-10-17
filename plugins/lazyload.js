import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: '../assets/img/error.webp',
  loading:
    'data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="537" height="800"></svg>',
  attempt: 1
})
