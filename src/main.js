import './assets/main.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/HomeView.vue')
    },
      {
      path: '/favorites',
      name: 'favorites',
      component: () => import('./pages/FavoritesView.vue')
    },
      {
      path: '/login',
      name: 'login',
      component: () => import('./pages/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./pages/SignUpView.vue')
    },

  ]
})

app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app')

