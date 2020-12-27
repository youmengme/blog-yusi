import { getArticleDetail as getArticleDetailAPI, getArticleList } from '~/api'
import { markdown2html } from '~/plugins/markdown2html'

export const getArticleDetail = async articleId => {
  const { code, data } = await getArticleDetailAPI(articleId)
  if (code || !data) return null
  const { content, toc } = markdown2html(data.content)
  return {
    ...data,
    content,
    toc
  }
}
export const getRelateArticles = async () => {
  const { code, data } = await getArticleList({
    type: 'view',
    size: 4
  })
  if (code || !data) return {}
  return data
}
