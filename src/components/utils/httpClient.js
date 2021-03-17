import axios from 'axios'

const defaultConfig = {
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 1000, // indicates, 1000ms ie. 1 second
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
}

// const getAuthToken = () => 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYXZpa2lyYW4iLCJpYXQiOjE1ODU3MzM2MTZ9.PFVnbKiTlW72UY_mlDiqZ_Ize4OqJcA-6gCZvlxTyKpJuHoYFZ-L6hn3RxkIxcdJXtsg_pZbQVB4QbN64RwL5w'
const getAuthToken = () => localStorage.getItem('token')

const authInterceptor = (config) => {
  config.headers['Authorization'] = getAuthToken()
  return config
}

const httpClient = axios.create(defaultConfig)

/**
 * Request Interceptor
 */

httpClient.interceptors.request.use(authInterceptor)

/**
 * Response Interceptor
 */

export default httpClient
