import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home page (root)',
      component: Home
    },
    {
      path: '/index',
      name: 'Home page',
      redirect: '/'
    },
    {
      path: '/index.html',
      name: 'Home page (html)',
      redirect: '/'
    },
    {
      path: '/PageNotFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/PageNotFound'
    }
  ]
})
