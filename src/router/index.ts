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
      component: LoginView,
      meta:{title:'登录'}
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import ('../views/NavView.vue'),
      meta: {title: '主页', breadcrumb: true},
      children:[
        {
          path: '/',
          name: 'home',
          component: () => import ('../views/HomeView.vue'),
          meta:{title:'主页', breadcrumb: true},
        },
        {
          path: 'home',
          name: 'home',
          component: () => import ('../components/DonutGraphPanel.vue'),
          meta: {title: '图表1', breadcrumb: true},
        },
        {
          path:'about',
          component: () => import ('../components/LineGraphPanel.vue'),
          meta: {title:'图表2', breadcrumb: true},
        }, 
        {
          path:'graph',
          component: () => import ('../components/PolarGraphPanel.vue'),
          meta: {title: '图表3', breadcrumb: true},
        },
      ]
    },
    {
      path:'/element',
      name:'ElementLogin',
      // @ts-ignore
      component: ()=> import ('../views/ElementLoginView.vue'),
      meta:{title:"登录2"}
    },
    {
      path:'/element-home',
      name:'ElementHome',
      // @ts-ignore
      component: ()=> import('../views/ElementHomeView.vue'),
      meta: {title:'主页2'}
    },
    {
      path: '/office',
      name: 'Office',
      // @ts-ignore
      component: ()=> import('../views/AboutView.vue'),
      meta:{title:'个人办公'},
      children:[
        {
          path:'about',
          component: () => import ('../views/AboutView.vue'),
          meta: {title:'图表', breadcrumb: true},
        },
      ]
    },
    {
      path: '/element-about',
      name: 'ElementAbout',
      component: ()=> import('../views/ElementAboutView.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import ('../views/404.vue')
    },
  ]
})

var history = new Object();

router.beforeEach((to, from, next) => {
    var text = to.path;
    if (text){
      if (!history[text]){
        history[text] = 1;
      } else {
        history[text] += 1;
      }
    }
    console.log(history);
    next();
})

export default router
