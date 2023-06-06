import { createRouter, createWebHistory } from 'vue-router';


export const router = createRouter({ 
  history: createWebHistory('/frosovallen/'),
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: () => import('@/views/Home.vue') 
    },
    { 
      path: '/events',
      name: 'events',
      component: () => import('@/views/Events.vue') },
  ]
});