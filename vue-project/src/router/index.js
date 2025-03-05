import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';  // Your home page
import About from '@/components/About.vue'; // Import the new About page

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }, // Add the new page route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
