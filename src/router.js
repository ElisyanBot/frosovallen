import { createRouter, createWebHistory } from 'vue-router';


export const router = createRouter({ 
  history: createWebHistory('/'),
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: () => import('@/views/Home.vue') 
    },
    { 
      path: '/events',
      name: 'events',
      component: () => import('@/views/Events.vue') 
    },
    { 
      path: '/:pathMatch(.*)*', 
      redirect: '/' 
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
});