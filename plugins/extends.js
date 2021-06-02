import Vue from 'vue'
import hideOnPlatform from '../extend/directive/hideOnPlatform'
import { jump, getPageRouter, formatImageUrl2Device } from '../utils/extends'
import { formatDateToRelativeDateString } from '../utils/func'
if (process.client) {
  Vue.prototype.$isClient = true
}

export default context => {
  Vue.prototype.$jump = jump
  Vue.prototype.$getPageRouter = getPageRouter
  Vue.prototype.$formatImageUrl = formatImageUrl2Device
  Vue.prototype.$platform = context.store.state.platformInfo
  Vue.filter('formatDateToRelativeDate', formatDateToRelativeDateString)
  Vue.filter('formatDateToRelativeDate', formatImageUrl2Device)
  Vue.directive('platform', hideOnPlatform(context))
}
