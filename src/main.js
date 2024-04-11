import { createApp } from 'vue'
import App from './App.vue'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.min.css'
import './assets/styles/main.scss'
import { createRouter, createWebHistory } from 'vue-router'


// Import Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Import your components for routing
import Debrief from './Debrief.vue'

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/debrief',
      name: 'Debrief',
      component: Debrief
    },
    {
      path: '/app',
      name: 'App',
      component: App
    },
    // You can add more routes here
  ]
})


createApp(App)
  .use(Oruga)
  .use(router) // Use the router instance
  .mount('#app')
