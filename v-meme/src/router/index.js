import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import AllMemes from '../pages/AllMemes.vue'
import Disclaimer from '../pages/Disclaimer.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/all', component: AllMemes },
  { path: '/disclaimer', component: Disclaimer }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router