import qs from 'qs'
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
export const getCategoryArticle = data => {
  return request({
    url: '/getCategoryArticle',
    data: qs.stringify(data),
    method: 'POST'
  })
}

// 获取文章标签列表
export const getTagArticle = (data = {}) => {
  return request({
    url: '/getTagArticle',
    data: qs.stringify(data),
    method: 'POST'
  })
}

// 获取推荐文章列表
export const getRandArticle = (data = {}) => {
  return request({
    url: '/getRandArticle',
    data: qs.stringify(data),
    method: 'POST'
  })
}

// 获取文章详情
export const getArticleItem = (data = {}) => {
  return request({
    url: '/getArticleItem',
    data: qs.stringify(data),
    method: 'POST'
  })
}

// 获取文章详情
export const getAbout = (data = {}) => {
  return request({
    url: '/getAbout',
    data: qs.stringify(data),
    method: 'POST'
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
