import Vue from 'vue'
import { jump, getPageRouter } from '../utils/extends'
if (process.client) {
  Vue.prototype.$isClient = true
}

Vue.prototype.$jump = jump
Vue.prototype.$getPageRouter = getPageRouter
