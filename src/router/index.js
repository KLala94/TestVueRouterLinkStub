import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
// import Menu from '../views/Menu.vue'
import First from '@/components/first.vue'
import Second from '@/components/second.vue'
import Third from '@/components/third.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/first',
    name: 'first',
    component: First
 },
 {
   path: '/second',
   name: 'second',
   component: Second
 },
 {
   path: '/third',
   name: 'third',
   component: Third
 },
  {
    path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
