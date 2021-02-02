import { getArticleDetail as getArticleDetailAPI, getArticleList } from '~/api'

export const getArticleDetail = async articleId => {
  const { code, data } = await getArticleDetailAPI(articleId)
  if (code || !data) return null
  return data
}
export const getRelateArticles = async () => {
  const { code, data } = await getArticleList({
    type: 'view',
    size: 4
  })
  if (code || !data) return {}
  return data
}
