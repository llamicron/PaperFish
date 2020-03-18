import Vue from 'vue'
import Router from 'vue-router'
import store from '@/main.js';

import Home from '@/views/Home'
import Login from '@/views/Login'
import SignUp from '@/views/SignUp'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router
