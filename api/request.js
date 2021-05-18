import axios from 'axios'

const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'https://blog.cn1.utools.club'
    : 'https://api-blog.youmeng.me'

const service = axios.create({
  baseURL: apiUrl,
  timeout: 30000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json;charset=UTF-8'
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
