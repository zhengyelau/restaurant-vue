import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/sign-up', component: SignUp },
  { path: '/login', component: Login },
  { path: '/add', component: Add },
  { path: '/update/:id', component: Update },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;