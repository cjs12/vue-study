// 导入Vue与VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Foo from '@/views/router-demo/Foo.vue'
// import Bar from '../views/router-demo/Bar.vue'
import About from '@/views/About.vue'
import User from '@/views/dynamic-route/User.vue'

// 调用插件
Vue.use(VueRouter)

// 定义路由
// 每个路由配置一个组件
const routes = [
  {
    path: '/',
    name: '主页',
    // 懒加载，异步渲染
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:name',
    component: User,
    name: '嵌套路由 & 动态路由',
    children: [
      {
        path: 'relative',
        name: '相对路径',
        component: () => import('@/views/dynamic-route/Path.vue')
      }
    ]
  },
  {
    path: '/vuex',
    component: () => import('@/views/vuex-demo/VuexDemo.vue')
  },
  {
    path: '/components/markdown',
    component: () => import('@/views/markdown/Markdown.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

// 创建route实力，然后传递routes配置
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: routes
})

export default router

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
