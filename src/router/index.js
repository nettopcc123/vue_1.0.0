import Vue from 'vue'
import Router from 'vue-router'
//import Index from '@/components/Index'
//import newlists from '@/components/newlists' 
// import newsMore from '@/components/newsMore' 
// import lotts from '@/components/lotts' 
// import lottsmore from '@/components/lottsmore'
// import user from '@/components/user'
// import feedback from '@/components/feedback'
// import disclaimer from '@/components/disclaimer'
// import message from '@/components/message'
// import favorites from '@/components/favorites'


 

// const list = r => require.ensure([], () => r(require('../components/list/list')), 'list');
// // 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 
// const router = new Router({
//     routes: [
//         {
//            path: '/list/blog',
//            component: list,
//            name: 'blog'
//         }
//     ]
// })

const Index = r => require.ensure([],() => r(require('@/components/Index')), 'Index');
const newlists = r => require.ensure([],() => r(require('@/components/newlists')), 'newlists');
const newsMore = r => require.ensure([],() => r(require('@/components/newsMore')), 'newsMore');
const lotts = r => require.ensure([],() => r(require('@/components/lotts')), 'lotts');
const lottsmore = r => require.ensure([],() => r(require('@/components/lottsmore')), 'lottsmore');
const user = r => require.ensure([],() => r(require('@/components/user')), 'user');
const feedback = r => require.ensure([],() => r(require('@/components/feedback')), 'feedback');
const disclaimer = r => require.ensure([],() => r(require('@/components/disclaimer')), 'disclaimer');
const message = r => require.ensure([],() => r(require('@/components/message')), 'message');
const favorites = r => require.ensure([],() => r(require('@/components/favorites')), 'favorites');




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
