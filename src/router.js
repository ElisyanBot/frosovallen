import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/events', component: () => import('@/views/Events.vue') },
]


const router = createRouter({ history: createWebHistory(), routes});

export default router;