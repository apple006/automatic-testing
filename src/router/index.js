import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Szm from '@/components/Szm'
import SzmForm from '@/components/SzmForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/szm',
      name: 'Szm',
      component: Szm
    },
    {
      path: '/szmform',
      name: 'SzmForm',
      component: SzmForm
    }
    // {
    //   path: '*',
    //   component: NotFoundComponent
    // }
  ]
})
