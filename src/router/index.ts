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
      path: '/navigation',
      name: 'navigation',
      component: () => import('../views/NavView.vue'),
      meta: { title: 'Navigation | Ian Kim' }
    },
    {
      path: '/web',
      name: 'web',
      component: HomeView,
      meta: { title: '웹개발입문 | Ian Kim' }
    },
    {
      path: '/server',
      name: 'server',
      component: () => import('../views/skhu/ServerView.vue'),
      meta: { title: 'server | Ian Kim' }
    },
    {
      path: '/frontend',
      name: 'frontend',
      component: HomeView,
      meta: { title: '프론트엔드프로그래밍 | Ian Kim' }
    },
    {
      path: '/hybrid',
      name: 'hybrid',
      component: HomeView,
      meta: { title: '하이브리드앱프로그래밍 | Ian Kim' }
    },
  ],
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'iank.im | Ian Kim';
  document.title = (to.meta.title as string) || defaultTitle;
  next();
});

export default router
