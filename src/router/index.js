import Vue from 'vue'
import Router from 'vue-router'
import store from '@/main.js';

import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register';
import PageNotFound from '@/views/PageNotFound';

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register,
    },
    // Leave this route at the end
    {
      path: '*',
      component: PageNotFound,
    }
  ]
})

export default router
