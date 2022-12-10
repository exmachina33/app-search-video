import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/search',
    name: 'search',
    meta: { auth: true },
    component: () => import('../layouts/AppLayout'),
    children: [
      {
        path: '/search',
        component: () => import('../views/SearchView'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../layouts/EmptyLayout'),
    children: [
      {
        path: '/login',
        component: () => import('../components/AppAuthForm'),
      }
    ]
  },
  {
    path: '/favorites',
    name: 'favorites',
    meta: { auth: true },
    component: () => import('../layouts/AppLayout'),
    children: [
      {
        path: '/favorites',
        component: () => import('../views/FavoritesView'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = store.getters.user
  if(!user) user = JSON.parse(localStorage.getItem('user'))
  const requireAuth = to.matched.some(record => record.meta.auth)
  if(!user && requireAuth) {
    next('/login')
    return
  }
  store.commit('saveUser', user)
  next()
})

export default router
