import { getArticleList, getTagList } from '@/api'
export const state = () => ({
  announcement: '你总是这样轻言放弃的话，无论多久你都只会原地踏步。',
  recommendArticles: [],
  recommendTags: [],
  newest: null
})

export const mutations = {
  setGlobalData(state, [key, val]) {
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
  nuxtServerInit(store, { params, route, req }) {
    const initAppData = [
      store.dispatch('initWidgetTag'),
      store.dispatch('initWidgetNewest'),
      store.dispatch('initWidgetArticle')
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
    commit('setGlobalData', ['recommendArticles', data || []])
  },

  // 最新文章
  async initWidgetNewest({ commit }) {
    const { code, data } = await getArticleList({
      size: 1,
      type: 'date'
    })
    if (code || !data || !data.length) return
    commit('setGlobalData', ['newest', data[0] || null])
  },

  // 标签云
  async initWidgetTag({ commit }) {
    const { code, data } = await getTagList({
      size: 10
    })
    if (code || !data || !data.length) return
    commit('setGlobalData', ['recommendTags', data || []])
  },

  // 友情链接
  initWidgetLinks({ commit }) {}
}
