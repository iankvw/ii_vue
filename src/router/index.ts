import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nav',
      name: 'nav',
      component: () => import('../views/NavView.vue'),
      meta: { title: 'Navigation | Ian Kim' }
    },
    {
      path: '/server',
      name: 'server',
      component: HomeView,
      meta: { title: 'server | Ian Kim' }
    },
  ],
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'iank.im | Ian Kim';
  document.title = (to.meta.title as string) || defaultTitle;
  next();
});

export default router
