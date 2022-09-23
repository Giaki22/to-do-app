import Vue from 'vue'
import VueRouter from 'vue-router'
import MTodolist from '../components/Molecules/MTodolist'
import MArchivedList from '../components/Molecules/MArchivedList'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: MTodolist
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/archived',
    name: 'ArchivedToDos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MArchivedList
  }
]

const router = new VueRouter({
  routes
})

export default router
