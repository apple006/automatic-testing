import Vue from 'vue'
import Router from 'vue-router'
import MyFirst from '@/components/MyFirst'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyFirst',
      component: MyFirst
    }
  ]
})
