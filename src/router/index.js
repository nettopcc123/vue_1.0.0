import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import newlists from '@/components/newlists' 
import newsMore from '@/components/newsMore' 
import lotts from '@/components/lotts' 
import lottsmore from '@/components/lottsmore'
import user from '@/components/user'
import feedback from '@/components/feedback'
import disclaimer from '@/components/disclaimer'
import message from '@/components/message'
import favorites from '@/components/favorites'


 


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/newlists',
      name: 'newlists',
      component: newlists
    },
    {
      path: '/newsMore',
      name: 'newsMore',
      component: newsMore
    },
    {
      path: '/lotts',
      name: 'lotts',
      component: lotts
    },{
      path:'/lottsmore',
      name:'lottsmore',
      component:lottsmore
    },{
      path:'/user',
      name:'user',
      component:user
    },{
      path:'/feedback',
      name:'feedback',
      component:feedback
    },{
      path:'/disclaimer',
      name:'disclaimer',
      component:disclaimer
    },{
      path:'/message',
      name:'message',
      component:message
    },{
      path:'/favorites',
      name:'favorites',
      component:favorites
    }
  ]
})
