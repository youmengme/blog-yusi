import request from './request'

// 获取文章列表
export const getArticleList = (params = {}) => {
  return request({
    url: '/articles',
    params,
    method: 'GET'
  })
}
export const getIndexPageSwiper = () => {
  return request({
    url: '/articles/recommend'
  })
}
// 获取文章分类列表
export const getCategoryArticle = (categoryId, params) => {
  return request({
    url: `/articles/category/${categoryId}`,
    params
  })
}

// 获取文章标签列表
export const getTagArticle = (tagId, params = {}) => {
  return request({
    url: `/articles/tag/${tagId}`,
    params
  })
}
/**********************************
 * Article
 * ************************************/

// 获取文章详情
export const getArticleDetail = articleId => {
  return request({
    url: `/articles/${articleId}`,
    method: 'GET'
  })
}
/**********************************
 * Tag
 * ************************************/
// 标签列表
export const getTagList = params => {
  return request({
    url: '/tags',
    params
  })
}

export const getTagDetail = (id, params) => {
  return request({
    url: `/tags/${id}`,
    params
  })
}

/**********************************
 * Category
 * ************************************/

// 获取分类id详情
export const getCategoryDetail = (id, params = {}) => {
  return request({
    url: `/categories/${id}`,
    params
  })
}

/**********************************
 * Comment
 * ************************************/

// 根据文章ID获取评论列表
export const getCommentsByArticleId = (id, params = {}) => {
  return request({
    url: `/comments/article/${id}`,
    params
  })
}
// 创建一条评论
export const createCommentItem = (id, data = {}) => {
  return request({
    url: `/comments/${id}`,
    data,
    method: 'POST'
  })
}
