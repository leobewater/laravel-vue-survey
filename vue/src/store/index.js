import { createStore } from 'vuex'
import axiosClient from '../axios'

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    },
    surveys: {
      loading: false,
      links: [],
      data: [],
    },
    currentSurvey: {
      data: {},
      loading: false,
    },
    questionTypes: ['text', 'select', 'radio', 'checkbox', 'textarea'],
    notification: {
      show: false,
      type: 'success',
      message: '',
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
    getSurveys({ commit }, { url = null } = {}) {
      // set surveys loading
      commit('setSurveysLoading', true)

      url = url || '/survey'
      return axiosClient.get(url).then((res) => {
        commit('setSurveysLoading', false)
        commit('setSurveys', res.data)
        return res
      })
    },
    getSurvey({ commit }, id) {
      // set survey loading
      commit('setCurrentSurveyLoading', true)

      // get survey
      return axiosClient
        .get(`/survey/${id}`)
        .then((res) => {
          // set survey to currentSurvey var
          commit('setCurrentSurvey', res.data)

          // update survey loading
          commit('setCurrentSurveyLoading', false)

          return res
        })
        .catch((err) => {
          commit('setCurrentSurveyLoading', false)
          throw err
        })
    },
    getSurveyBySlug({ commit }, slug) {
      commit('setCurrentSurveyLoading', true)
      return axiosClient
        .get(`/survey-by-slug/${slug}`)
        .then((res) => {
          commit('setCurrentSurvey', res.data)
          commit('setCurrentSurveyLoading', false)
          return res
        })
        .catch((err) => {
          commit('setCurrentSurveyLoading', false)
          throw err
        })
    },
    saveSurvey({ commit }, survey) {
      // remove non-fillable property
      delete survey.image_url

      let response

      if (survey.id) {
        // update survey
        response = axiosClient
          .put(`/survey/${survey.id}`, survey)
          .then((res) => {
            commit('setCurrentSurvey', res.data)
            return res
          })
      } else {
        // create survey
        response = axiosClient.post('/survey', survey).then((res) => {
          commit('setCurrentSurvey', res.data)
          return res
        })
      }

      return response
    },
    deleteSurvey({ dispatch }, id) {
      return axiosClient.delete(`/survey/${id}`).then((res) => {
        dispatch('getSurveys')
        return res
      })
    },
    saveSurveyAnswer({ commit }, { surveyId, answers }) {
      return axiosClient.post(`/survey/${surveyId}/answer`, { answers })
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
    setSurveysLoading: (state, loading) => {
      state.surveys.loading = loading
    },
    setSurveys: (state, surveys) => {
      state.surveys.links = surveys.meta.links
      state.surveys.data = surveys.data
    },
    setCurrentSurveyLoading: (state, loading) => {
      state.currentSurvey.loading = loading
    },
    setCurrentSurvey: (state, survey) => {
      state.currentSurvey.data = survey.data
    },
    notify: (state, { message, type }) => {
      state.notification.show = true
      state.notification.type = type
      state.notification.message = message
      setTimeout(() => {
        state.notification.show = false
      }, 3000)
    },
  },
  modules: {},
})

export default store
