export const formatDateToRelativeDateString = date => {
  let time = new Date(date).getTime()
  if (time > 0) {
    let result
    time = parseInt(time)
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const month = day * 30
    const now = new Date().getTime()
    const diffValue = now - time
    if (diffValue < 0) return

    const monthC = diffValue / month
    const weekC = diffValue / (7 * day)
    const dayC = diffValue / day
    const hourC = diffValue / hour
    const minC = diffValue / minute
    if (monthC >= 1) {
      if (monthC <= 12) {
        result = '' + parseInt(monthC) + '月前'
      } else {
        result = '' + parseInt(monthC / 12) + '年前'
      }
    } else if (weekC >= 1) {
      result = '' + parseInt(weekC) + '周前'
    } else if (dayC >= 1) {
      result = '' + parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
      result = '' + parseInt(hourC) + '小时前'
    } else if (minC >= 1) {
      result = '' + parseInt(minC) + '分钟前'
    } else {
      result = '刚刚'
    }
    return result
  } else {
    return ''
  }
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
