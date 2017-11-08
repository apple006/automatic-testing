import Vue from 'vue'
import Router from 'vue-router'
import MyFirst from '@/components/MyFirst'
import HelloWorld from '@/components/HelloWorld'
import Szm from '@/components/Szm'
import SzmForm from '@/components/SzmForm'
import checkbox from '@/components/cqx'
import MyTitle from '@/components/cqxCase'

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
      path: '/judson',
      name: 'MyFirst',
      component: MyFirst
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
    },
    {
      path: '/cqx',
      name: 'checkbox',
      component: checkbox
    },
    {
      path: '/cqxCase',
      name: 'MyTitle',
      component: MyTitle
    }

    // {
    //   path: '*',
    //   component: NotFoundComponent
    // }
  ]
})
