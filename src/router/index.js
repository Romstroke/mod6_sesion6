import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Personajes from '@/views/Personajes.vue'
//import Personaje from '@/views/Personaje.vue'
//import Contacto from '@/views/Contacto.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/personajes',
    component: Personajes,
    alias: ['/people','/characters']
  },
  {
    path: '/personaje/:id',
    //component: Personaje,
    props: true,
    component: () => import(/* webpackChunkName: "personaje" */ '../views/Personaje.vue')

  },
  {
    path:'/contacto',
    //component: Contacto,
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')

  },
  {
    path:'*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
