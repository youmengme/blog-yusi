import qs from 'qs'
import request from './request'

// 获取文章分类列表
export const createArticle = data => {
  return request({
    url: '/articles',
    data: qs.stringify(data),
    method: 'POST'
  })
}
