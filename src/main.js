import './assets/main.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { initializeApp } from "firebase/app";
import App from './App.vue'

const firebaseConfig = {
  apiKey: "AIzaSyBfmve6Nn2GPP19Sst8onsnIjMngWBr8uc",
  authDomain: "vue-sneakers-kirill.firebaseapp.com",
  projectId: "vue-sneakers-kirill",
  storageBucket: "vue-sneakers-kirill.appspot.com",
  messagingSenderId: "968547906873",
  appId: "1:968547906873:web:b26e302aa2e756971924e8"
};

initializeApp(firebaseConfig);
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
