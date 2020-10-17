export const jump = function() {}

/**
 * @desc 获取路由参数及其配置参数
 * @param type { category, tag, article } 跳转的类型
 * @param id { number } id
 * @param jump { boolean } 是否是js跳转
 * @param params { object } 其他参数
 * @returns {{name: (*|string), params: {id: *}}}
 */
export const getPageRouter = (type, id, jump, params = {}) => {
  const mapping = {
    category: 'category-id',
    tag: 'tag-id',
    article: 'article-id'
  }
  const data = {
    name: mapping[type] || 'index',
    params: {
      id,
      ...params
    }
  }

  if (jump) {
    return this.$route.push(data)
  }
  return data
}
