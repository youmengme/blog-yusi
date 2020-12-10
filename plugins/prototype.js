import Vue from 'vue'
import { jump, getPageRouter } from '../utils/extends'
import { formatDateToRelativeDateString } from '../utils/func'
if (process.client) {
  Vue.prototype.$isClient = true
}

Vue.prototype.$jump = jump
Vue.prototype.$getPageRouter = getPageRouter
Vue.filter('formatDateToRelativeDate', formatDateToRelativeDateString)
