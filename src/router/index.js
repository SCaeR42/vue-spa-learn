import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Users from '../components/Users.vue'
import Catalog from '../components/Catalog.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/catalog', name: 'Catalog', component: Catalog },
  { path: '/users', name: 'Users', component: Users },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
