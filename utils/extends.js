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

export const formatImageUrl2Device = (url, ruleName) => {
  const rules = {
    m_article_related: 'imageView2/1/w/80/h/51/interlace/1/q/75', // 文章详情页底部相关文章 M版
    pc_article_related: 'imageView2/1/w/190/h/120/interlace/1/q/75', // 文章详情页底部相关文章 PC版
    pc_global_widget_related: 'imageView2/1/w/100/h/65/interlace/1/q/75', // 全局右侧猜你喜欢 PC版
    pc_index_slider: 'imageView2/1/w/820/h/220/interlace/1/q/75', // 首页轮播图 PC版
    m_index_slider: 'imageView2/1/w/375/h/110/interlace/1/q/75', // 首页轮播图 M版
    pc_article_cover: 'imageView2/1/w/200/h/125/interlace/1/q/75' // 文章列表文章缩略图
  }
  return `${url}?${rules[ruleName]}`
}
