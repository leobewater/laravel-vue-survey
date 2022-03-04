import axios from 'axios'
import store from './store'

const axiosClient = axios.create({
  baseURL: 'https://laravel-vue-survey.test/api',
})

// add to every request
axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.state.user.token}`
  return config
})

export default axiosClient
