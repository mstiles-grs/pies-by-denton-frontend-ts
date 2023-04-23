import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/Dashboard.vue'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


    {
      path: '/dashboard',
      name: 'home',
      component: DashboardView
    },

    {
      path: '/',
      component: LoginView
    },

  ]
})

export default router
