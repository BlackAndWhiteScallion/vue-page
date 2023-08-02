import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import ('../views/HomeView.vue')
    },
    {
      path:'/element',
      name:'ElementLogin',
      // @ts-ignore
      component: ()=> import ('../views/ElementLoginView.vue')
    },
    {
      path:'/element-home',
      name:'ElementHome',
      // @ts-ignore
      component: ()=> import('../views/ElementHomeView.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import ('../views/404.vue')
    },
  ]
})

var history: (string | null | undefined)[] = [];
router.beforeEach((to, from, next) => {
    history.push(to.name);
    console.log(history);
    next();
})

export default router
