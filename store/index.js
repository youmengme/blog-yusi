import { getArticleList, getTagList } from '@/api'
import { deviceType } from '@/utils/deviceType'

const SET_GLOBAL_DATA = 'SET_GLOBAL_DATA'

export const state = () => ({
  announcement: '你总是这样轻言放弃的话，无论多久你都只会原地踏步。',
  recommendArticles: [],
  recommendTags: [],
  newest: null,
  platformInfo: {}
})

export const mutations = {
  [SET_GLOBAL_DATA](state, [key, val]) {
    state[key] = val
  },
  addWidgetData(state, obj) {
    if (obj.navlist) {
      obj.navlist = JSON.parse(obj.navlist)
    }
    state.global = obj
  }
}

export const actions = {
  nuxtServerInit({ dispatch }, context) {
    const initAppData = [
      dispatch('initGlobalPlatform', context),
      dispatch('initWidgetTag'),
      dispatch('initWidgetNewest'),
      dispatch('initWidgetArticle')
    ]
    return Promise.all(initAppData)
  },
  // 猜你喜欢
  async initWidgetArticle({ commit }) {
    const { code, data } = await getArticleList({
      size: 5,
      type: 'like'
    })
    if (code || !data || !data.length) return
    commit(SET_GLOBAL_DATA, ['recommendArticles', data || []])
  },

  // 最新文章
  async initWidgetNewest({ commit }) {
    const result = await getArticleList({
      size: 1,
      type: 'date'
    })
    const { code, data } = result
    if (code || !data || !data.length) return
    commit(SET_GLOBAL_DATA, ['newest', data[0] || null])
  },

  // 标签云
  async initWidgetTag({ commit }) {
    const { code, data } = await getTagList({
      size: 10
    })
    if (code || !data || !data.length) return
    commit(SET_GLOBAL_DATA, ['recommendTags', data || []])
  },

  // 友情链接
  initWidgetLinks({ commit }) {},

  // 设置环境相关
  initGlobalPlatform({ commit }, context) {
    context.userAgent = process.server
      ? context.req.headers['user-agent']
      : navigator.userAgent
    const deviceInfo = deviceType(context.userAgent)
    context.platformInfo = deviceInfo
    commit(SET_GLOBAL_DATA, ['platformInfo', deviceInfo])
  }
}
