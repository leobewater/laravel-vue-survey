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
    questions: [
      {
        id: 1,
        type: 'select',
        question: 'Form which country are you?',
        description: null,
        data: {
          options: [
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-asdfadfs', text: 'USA' },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-1231313', text: 'Georgia' },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-41231312', text: 'Germany' },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-12777777', text: 'India' },
          ],
        },
      },
      {
        id: 2,
        type: 'checkbox',
        question: 'What language videos do you want to see?',
        description: null,
        data: {
          options: [
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-asdfadfs', text: 'JS' },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-1231313', text: 'PHP' },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-41231312', text: 'HTML' },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-12777777', text: 'CSS' },
          ],
        },
      },
      {
        id: 3,
        type: 'checkbox',
        question: 'What framework?',
        description: null,
        data: {
          options: [
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-asdfadfs', text: 'Laravel' },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-1231313', text: 'Yii2' },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-41231312',
              text: 'odeigniter',
            },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-12777777', text: 'Symfony' },
          ],
        },
      },
      {
        id: 4,
        type: 'radio',
        question: 'Which Laravel framework do you love the most?',
        description: null,
        data: {
          options: [
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-asdfadfs',
              text: 'Laravel 5',
            },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-1231313', text: 'Laravel 6' },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-41231312',
              text: 'Laravel 7',
            },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-12777777',
              text: 'Laravel 8',
            },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-12777777',
              text: 'Laravel 9',
            },
          ],
        },
      },
      {
        id: 5,
        type: 'checkbox',
        question: 'What industry?',
        description: null,
        data: {
          options: [
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-asdfadfs',
              text: 'ecommerce',
            },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-1231313',
              text: 'real estate',
            },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-41231312',
              text: 'consumer goods',
            },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-12777777',
              text: 'all of the above',
            },
          ],
        },
      },
      {
        id: 6,
        type: 'text',
        question: "What's your favorite youtube channe?",
        description: null,
        data: {},
      },
      {
        id: 7,
        type: 'textarea',
        question: "What's your think about this survey?",
        description: 'write your honest option. Everything is anonymous.',
        data: {},
      },
    ],
  },
  {
    id: 102,
    title: 'Survey2',
    slug: 'survey2',
    status: 'draft',
    image:
      'https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEyqj2_400x400.png',
    description: 'My name is xxxxx.xxxx .xxxxxx.xxxx.',
    created_at: '2022-03-04 14:22:00',
    updated_at: '2022-03-04 14:22:00',
    expire_date: '2022-03-04 14:22:00',
    questions: [
      {
        id: 2,
        type: 'checkbox',
        question: 'What language videos do you want to see?',
        description: null,
        data: {
          options: [
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-asdfadfs', text: 'JS' },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-1231313', text: 'PHP' },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-41231312', text: 'HTML' },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-12777777', text: 'CSS' },
          ],
        },
      },
      {
        id: 4,
        type: 'radio',
        question: 'Which Laravel framework do you love the most?',
        description: null,
        data: {
          options: [
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-asdfadfs',
              text: 'Laravel 5',
            },
            { uuid: 'asdfasdfas-asdfasdf-asdfasdf-1231313', text: 'Laravel 6' },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-41231312',
              text: 'Laravel 7',
            },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-12777777',
              text: 'Laravel 8',
            },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-12777777',
              text: 'Laravel 9',
            },
          ],
        },
      },
      {
        id: 6,
        type: 'text',
        question: "What's your favorite youtube channe?",
        description: null,
        data: {},
      },
    ],
  },
  {
    id: 104,
    title: 'Survey 3',
    slug: 'survey-3',
    status: 'draft',
    image:
      'https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEyqj2_400x400.png',
    description: 'My name is xxxxx.xxxx .xxxxxx.xxxx.',
    created_at: '2022-03-04 14:22:00',
    updated_at: '2022-03-04 14:22:00',
    expire_date: '2022-03-04 14:22:00',
    questions: [
      {
        id: 5,
        type: 'checkbox',
        question: 'What industry?',
        description: null,
        data: {
          options: [
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-asdfadfs',
              text: 'ecommerce',
            },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-1231313',
              text: 'real estate',
            },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-41231312',
              text: 'consumer goods',
            },
            {
              uuid: 'asdfasdfas-asdfasdf-asdfasdf-12777777',
              text: 'all of the above',
            },
          ],
        },
      },
    ],
  },
]

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    },
    surveys: [...tmpSurveys],
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
