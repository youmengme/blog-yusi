import axios from 'axios'

// const apiUrl = 'https://api-blog.youmeng.me'
const apiUrl = 'https://blog.cn1.utools.club'

const service = axios.create({
  baseURL: apiUrl,
  timeout: 30000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
})

service.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.resolve(error.response)
  }
)

export default service
