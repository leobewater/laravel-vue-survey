import { createStore } from 'vuex'
import axiosClient from '../axios'

const tmpSurveys = [
  {
    id: 100,
    title: 'Youtube Channel content',
    slug: 'youtube-channel-content',
    status: 'draft',
    image:
      'https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEyqj2_400x400.png',
    description: 'My name is xxxxx.xxxx .xxxxxx.xxxx.',
    created_at: '2022-03-04 14:22:00',
    updated_at: '2022-03-04 14:22:00',
    expire_date: '2022-03-04 14:22:00',
    questions: [],
  },
]

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    },
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post('/register', user).then(({ data }) => {
        commit('setUser', data)
        return data
      })
    },
    login({ commit }, user) {
      return axiosClient.post('/login', user).then(({ data }) => {
        commit('setUser', data)
        return data
      })
    },
    logout({ commit }) {
      return axiosClient.post('/logout').then((res) => {
        commit('logout')
        return res
      })
    },
  },
  mutations: {
    logout: (state) => {
      state.user.data = {}
      state.user.token = null
      sessionStorage.removeItem('TOKEN')
    },
    setUser: (state, userData) => {
      state.user.token = userData.token
      state.user.data = userData.user
      sessionStorage.setItem('TOKEN', userData.token)
    },
  },
  modules: {},
})

export default store
