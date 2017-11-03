import Vue from 'vue'
import Router from 'vue-router'
import MyFirst from '@/components/MyFirst'
import HelloWorld from '@/components/HelloWorld'
import Szm from '@/components/Szm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/judson',
      name: 'MyFirst',
      component: MyFirst
    },
    {
      path: '/szm',
      name: 'Szm',
      component: Szm
    }
  ]
})
