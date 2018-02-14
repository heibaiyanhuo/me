import Vue from 'vue'
import Router from 'vue-router'

import PostBoard from '@/components/PostBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PostBoard
    }
  ]
})
