export const state = () => ({
    articleDetail: {},
    recommendList: [],
    TOC: {}
})

export const mutations = {
    addArticleDetail(state, detail) {
        state.articleDetail = detail
    },
    addArticleRecommend(state, list){
        state.recommendList = list
    },
    setTOC(state, obj){
        state.TOC = obj
    }
}
