import axios from 'axios'

// const apiUrl = 'https://api.youmeng.me'
const apiUrl = ' http://localhost:4000'

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
