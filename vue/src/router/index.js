import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Surveys from '../views/Surveys.vue'
import SurveyView from '../views/SurveyView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import SurveyPublicView from '../views/SurveyPublicView.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Dashboard',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/surveys',
        name: 'Surveys',
        component: Surveys,
      },
      {
        path: '/surveys/create',
        name: 'SurveyCreate',
        component: SurveyView,
      },
      {
        path: '/surveys/:id',
        name: 'SurveyView',
        component: SurveyView,
      },
    ],
  },
  {
    path: '/view/survey/:slug',
    name: 'SurveyPublicView',
    component: SurveyPublicView,
  },
  {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    component: AuthLayout,
    meta: { isGuest: true },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // check user token when "requiresAuth" exists in "meta" key
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'Login' })
  } else if (store.state.user.token && to.meta.isGuest) {
    // redirect to dashboard if user already logged in and try to go to login or register pages
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
